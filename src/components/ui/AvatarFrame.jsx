function AvatarFrame() {
  return (
            <div className="flex justify-center items-center relative md:pb-0 pb-48">
              
              {/* Glow*/}
              <div
                className="
                  absolute 
                  w-80 h-80 md:w-100 md:h-100 
                  rounded-full 
                  blur-2xl 
                  opacity-70
                  animate-pulse
                  bg-[radial-gradient(circle_at_center,#677381,#82A0AA,#A3CFCD)]
                "
              ></div>

              {/* Avatar */}
              <div
                className="
                  relative
                  w-60 h-60 md:w-70 md:h-70
                  rounded-full overflow-hidden 
                  border-4 border-white/40
                  hover:scale-110 transition-transform duration-300
                "
              >
                <img
                  src="./avatar.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
  );
}

export default AvatarFrame;