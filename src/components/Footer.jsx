import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  // ===============================
  // DATA
  // ===============================
  const socialButtons = [
    {
      icon: <FacebookOutlinedIcon fontSize="medium" className="text-black" />,
      link: "https://www.facebook.com/nguyen.minh.khanh.410853",
    },
    {
      icon: <GitHubIcon fontSize="medium" className="text-black" />,
      link: "https://github.com/BiNe484",
    },
  ];

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  // ===============================
  // RENDER FUNCTIONS
  // ===============================

  const renderButtons = () =>
    socialButtons.map((item, index) => (
      <button
        key={index}
        onClick={() => window.open(item.link)}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
      >
        {item.icon}
      </button>
    ));

  // Cuộn smooth
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const headerHeight = 62; // px

    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  const renderMenu = () =>
    menuItems.map((item, index) => (
      <p
        key={index}
        className="cursor-pointer hover:text-gray-300 transition"
        onClick={() => scrollToSection(item.id)}
      >
        {item.label}
      </p>
    ));

  return (
    <section id="footer">
      <div className="max-w h-[180px] bg-[#111111] flex flex-col items-center justify-center">

        {/* Social Buttons */}
        <div className="flex gap-4 mb-6">{renderButtons()}</div>

        {/* Menu */}
        <div className="flex gap-12 text-sm text-white">{renderMenu()}</div>
      </div>

      {/* Copyright */}
      <div className="max-w h-8 bg-black flex justify-center items-center text-white">
        <p>Copyright &copy;2025; Nguyễn Minh Khánh</p>
      </div>
    </section>
  );
}

export default Footer;
