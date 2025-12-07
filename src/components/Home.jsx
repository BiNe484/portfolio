import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Home() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/background.png"
          alt="background"
          className="w-full h-full object-cover scale-110 blur-md"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 md:px-12"
        sx={{ flexGrow: 1 }}
      >
        <Grid
          container
          spacing={4}
          rowSpacing={10}
          alignItems="center"
          className="flex justify-between"
        >
          {/* BÊN TRÁI*/}
          <Grid size={{xs:12, md:6}}>
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Xin chào!</h1>
              <p className="text-lg mb-2">
                Tôi là Bi, sinh viên ngành CS tại trường T! Yêu thích các công việc về Tester, Thiết kế giao diện.
              </p>
              <p>Luôn khao khát học hỏi những điều mới mẻ mỗi ngày.</p>
            </div>
          </Grid>

          {/* BÊN PHẢI*/}
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="flex justify-center items-center relative">
              
              {/* Hiệu ứng glow nhiều màu */}
              <div
                className="
                  absolute 
                  w-80 h-80 md:w-100 md:h-100 
                  rounded-full 
                  blur-3xl 
                  opacity-70
                  animate-pulse
                  bg-[radial-gradient(circle_at_center,#ff00ff,#00ffff,#0066ff)]
                "
              ></div>

              {/* Avatar */}
              <div
                className="
                  relative
                  w-80 h-80 md:w-100 md:h-100
                  rounded-full overflow-hidden 
                  shadow-xl border-4 border-white/40
                "
              >
                <img
                  src="/avatar.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Home;
