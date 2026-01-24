import { useEffect, useState } from "react";

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
        w-20 h-20
        rounded-full
        pointer-events-none
        z-9999
        backdrop-blur-sm
        ring-04 ring-white/10
        shadow-lg shadow-white/20        
      "
      style={{
        left: pos.x - 40,
        top: pos.y - 40,
      }}
    />
  );
}

export default MouseFollower;
