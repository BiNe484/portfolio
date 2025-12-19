import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // ===== Scroll detect =====
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ===== Active section =====
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollPos = window.scrollY + 80;
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const headerHeight = 62;

    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          backdrop-blur-sm
          ${scrolled ? "bg-white/80 shadow-2xl" : "bg-white/10"}
        `}
      >
        <div className="max-w mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <span
            className={`text-lg font-semibold transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Nguyễn Minh Khánh
          </span>

          {/* Desktop menu */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: "2.5rem",
            }}
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-3 py-1 font-medium transition
                    ${scrolled ? "text-gray-800" : "text-white"}
                    ${isActive ? "text-blue-500" : "hover:text-blue-400"}
                  `}
                >
                  {item.label}
                  <span
                    className={`
                      absolute inset-0 rounded-full border-2 transition
                      ${
                        isActive
                          ? "border-blue-500 scale-100 opacity-100"
                          : "border-transparent scale-75 opacity-0"
                      }
                    `}
                  />
                </button>
              );
            })}
          </Box>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* CV button – chỉ desktop */}
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
                    backgroundColor: scrolled
                      ? "transparent"
                      : "rgba(255,255,255,0.15)",
                  }}
                >
                  Tải CV
                </Button>
              </a>

            {/* Mobile dropdown icon – chỉ khi menu ẩn */}
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ color: scrolled ? "black" : "white",
                display: { md: "inline-flex", lg: "none" }
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div
          className={`
            fixed top-[62px] left-0 w-full z-40
            backdrop-blur-sm
            ${scrolled ? "bg-white/80" : "bg-white/10"}
            shadow-2xl
            flex flex-col items-center gap-6
            py-8
            lg:hidden
          `}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileOpen(false);
              }}
              className={`
                text-lg font-medium transition
                ${
                  activeSection === item.id
                    ? "text-blue-500"
                    : scrolled
                    ? "text-gray-800 hover:text-blue-400"
                    : "text-white hover:text-blue-300"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
