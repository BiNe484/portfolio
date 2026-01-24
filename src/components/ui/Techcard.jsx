function TechCard({ icon, name }) {
  return (
    <div
      className="
        flex items-center gap-3
        px-4 py-3
        rounded-lg
        border border-gray-500
        bg-white/5 backdrop-blur-md
        shadow-sm
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg hover:shadow-purple-700/20
        cursor-default
      "
    >
      {/* ICON */}
      <div className="text-xl">
        {icon}
      </div>

      {/* NAME */}
      <span className="text-sm font-medium text-gray-100">
        {name}
      </span>
    </div>
  );
}

export default TechCard;
