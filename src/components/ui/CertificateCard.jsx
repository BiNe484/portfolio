function CertificateCard({source, title, desc }) {
  return (
    <div className="relative w-full h-full min-h-56 rounded-2xl overflow-hidden
    hover:scale-105 transition-transform duration-300">
      <img
        src={source}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white"></div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 flex flex-col items-center justify-center px-2">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
export default CertificateCard;