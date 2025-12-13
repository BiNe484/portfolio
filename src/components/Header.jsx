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
  // Lắng nghe scroll để highlight menu
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollPos = window.scrollY + 80; // bù chiều cao header

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  // Menu
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const renderMenu = () =>
    menuItems.map((item) => {
      const isActive = activeSection === item.id;

      return (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`
            relative px-3 py-1 font-medium transition-all duration-300
            ${scrolled ? "text-gray-800" : "text-white"}
            ${isActive ? "text-blue-500" : "hover:text-blue-400"}
          `}
        >
          {item.label}

          {/* Border animation */}
          <span
            className={`
              absolute inset-0 rounded-full border-2 transition-all duration-300
              ${isActive
                ? "border-blue-500 scale-100 opacity-100"
                : "border-transparent scale-75 opacity-0"}
            `}
          />
        </button>
      );
    });

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
        <nav className="hidden lg:flex gap-10">
          {renderMenu()}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Nút tải CV */}
          <a
  href="/cv-nguyen-minh-khanh.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
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
          </a>

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
