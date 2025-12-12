function SkillCard({ title, desc }) {
  return (
    <div className="relative bg-white/70 p-6 rounded-xl shadow-2xl h-full flex flex-col">
      <p className="text-gray-800 text-lg font-bold flex justify-center mb-4">
        {title}
      </p>

      <ul className="list-disc pl-5 text-gray-700 flex-1">
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
