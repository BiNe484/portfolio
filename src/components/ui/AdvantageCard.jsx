function AdvantageCard({ title, desc }) {
  return (
    <div className="relative bg-white p-6 rounded-xl shadow-2xl h-full flex flex-col
    hover:scale-105 transition-transform duration-300">
      <p className="text-gray-800 font-bold flex justify-center mb-4">
        {title}
      </p>

      <ul className="text-sm list-disc pl-5 text-gray-700 flex-1">
        {desc.map((item, index) => (
          <li key={index} className="mb-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvantageCard;
