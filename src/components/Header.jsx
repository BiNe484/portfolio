import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Lắng nghe scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cuộn smooth
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const headerHeight = 62; // px

    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };


  // Menu
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const renderMenu = () =>
    menuItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={`
          cursor-pointer font-medium transition
          ${scrolled ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-200"}
        `}
      >
        {item.label}
      </button>
    ));

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-400
        backdrop-blur-sm
        ${scrolled ? "bg-white/80 shadow-2xl" : "bg-white/10"}
      `}
    >
      <div className="max-w mx-auto px-4 py-3 flex items-center justify-between">

        {/* Tên */}
        <div className="flex items-center px-0 md:px-8">
          <span className={`text-lg font-semibold transition 
            ${scrolled ? "text-black" : "text-white"}
          `}>
            Nguyễn Minh Khánh
          </span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-10">
          {renderMenu()}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Nút tải CV */}
          <Button
            variant={scrolled ? "outlined" : "contained"}
            startIcon={<DownloadIcon />}
            sx={{
              textTransform: "none",
              color: scrolled ? "#000" : "#fff",
              borderColor: scrolled ? "#000" : "rgba(255,255,255,0.7)",
              backgroundColor: scrolled ? "transparent" : "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              "&:hover": {
                backgroundColor: scrolled ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.3)",
              },
            }}
          >
            Tải CV
          </Button>

          {/* Dark mode button */}
          <IconButton
            sx={{
              color: scrolled ? "black" : "white",
            }}
          >
            <Brightness4Icon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
