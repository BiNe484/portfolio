import React from "react";
import FadeIn from "./animation/FadeIn";
import ProjectCard from "./ui/ProjectCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Project() {
  return (
    <section id="about" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-linear-to-r from-slate-200 to-gray-100">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Dự án</h2>
            <span className="text-md text-gray-500">Một số dự án thiết kế giao diện và phát triển phần mềm từng tham gia</span>
          </div>
        </FadeIn>
        
        <Grid container spacing={4} alignItems="stretch">
          {/* CỘT TRÁI */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeIn direction="left" delay={100}>
            <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden shadow-2xl flex">
              <ProjectCard source={"./game.jpg"} title="Trò chơi" desc="Thiết kế giao diện và phát triển trò chơi hành động" />
            </div>
            </FadeIn>
          </Grid>

          {/* CỘT PHẢI */}
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="flex flex-col gap-4 h-full">

              {/* Card trên */}
              <div className="flex-[0.4] min-h-[180px] rounded-2xl overflow-hidden shadow-2xl">
                <ProjectCard title="Web App" desc="Phát triển giao diện Dashboard và quản lý" />
              </div>

              {/* Card dưới */}
              <div className="flex-[0.6] min-h-[180px] rounded-2xl overflow-hidden shadow-2xl">
                <ProjectCard title="Mobile App" desc="Phát triển giao diện ứng dụng ngân hàng di động" />
              </div>

            </div>
          </Grid>
        </Grid>

      </Box>
    </section>
  );
}

export default Project;
