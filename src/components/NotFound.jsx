import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0f0f14] overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl top-1/4 left-1/2 -translate-x-1/2 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-white/10">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Oops! Page not found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
          You might have entered the wrong URL 😅
        </p>

        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-xl
            bg-white/10 backdrop-blur
            border border-white/20
            text-white
            hover:bg-white/20
            hover:scale-105
            transition-all duration-300
          "
        >
          ← Quay về trang chủ
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
