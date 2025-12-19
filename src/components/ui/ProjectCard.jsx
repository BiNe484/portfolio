function ProjectCard({ source, title, desc, language }) {
  return (
    <div className="
    w-full h-full 
    bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg
    hover:scale-105 hover:rotate-2 transition-transform duration-300">
      
      {/* IMAGE */}
      <div className="w-full h-60 p-4">
        <img
          src={source}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {desc}
        </p>
        <p className="text-sm text-gray-400 pt-2">
          {language}
        </p>
      </div>

    </div>
  );
}

export default ProjectCard;
