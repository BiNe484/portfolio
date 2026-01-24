function ProjectCard({ source, title, desc, language }) {
  return (
    <div
      className="
        group
        w-full h-full
        border-2 border-gray-800 bg-gray-800/10 shadow-lg
        transition-transform duration-300
        hover:-translate-y-6 hover:bg-gray-800/50
        hover:shadow-2xl hover:shadow-purple-700/20
      "
    >
      {/* IMAGE */}
      <div className="w-full h-60 p-4">

        <div className="w-full h-full  overflow-hidden rounded-md">
          <img
            src={source}
            alt={title}
            className="
              w-full h-full object-cover 
              grayscale
              group-hover:grayscale-0
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-gray-200 font-bold text-lg mb-1">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">
          {desc}
        </p>
        <p className="text-sm text-gray-600 pt-2">
          {language}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
