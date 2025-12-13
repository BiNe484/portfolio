import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MouseFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
        fixed
        w-6 h-6
        rounded-full
        bg-[radial-gradient(circle_at_center,#677381,#FF5D90,#F458FF)]
        blur-md
        pointer-events-none
        z-9999
      "
      style={{
        left: pos.x - 12,
        top: pos.y - 12,
      }}
    />
  );
}

export default MouseFollower;