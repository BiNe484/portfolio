function SkillCard({ title, desc }) {
  return (
    <div className="relative border border-gray-800 bg-gray-800/10 p-6 shadow-2xl h-full flex flex-col
    hover:scale-105 hover:bg-gray-800/50
    hover:shadow-2xl hover:shadow-purple-700/20
     transition-transform duration-300">
      <p className="text-white font-bold flex justify-center mb-4">
        {title}
      </p>

      <ul className="text-sm list-disc pl-5 text-gray-200">
        {desc.map((item, index) => (
          <li key={index} className="mb-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
