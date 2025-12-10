function ProjectCard({source, title, desc }) {
  return (
    <div className="relative w-full h-full">
      <img
        src={source}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80"></div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 flex flex-col items-center justify-center text-white px-2">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
export default ProjectCard;