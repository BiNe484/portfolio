function CertificateCard({source, title, desc }) {
  return (
<div
      className="
        group
        w-full h-full
        bg-[#0F0F0F] border border-gray-800 shadow-lg
        transition-transform duration-300
        hover:scale-105 hover:bg-gray-800/50
        hover:shadow-2xl hover:shadow-purple-700/20        
      "
    >
      {/* IMAGE */}
      <div className="w-full h-60 p-4">
          <img
            src={source}
            alt={title}
            className="
              w-full h-full object-cover
            "
          />
        </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-gray-200 font-bold text-lg mb-1">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}
export default CertificateCard;