import React from "react";
import FadeIn from "./animation/FadeIn";
import ProjectCard from "./ui/ProjectCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Project() {
  return (
    <section id="projects" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-linear-to-r from-[#edf7f7] to-[#fbe3f3]">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">📂 Dự án</h2>
            <span className="text-md text-gray-500">Một số dự án thiết kế giao diện và phát triển phần mềm từng tham gia.</span>
          </div>
        </FadeIn>
        
        <Grid container spacing={4} alignItems="stretch">
          {/* CỘT TRÁI */}
          <FadeIn direction="up" delay={140}>
            <Grid size={{ xs: 12, md: 4 }}>              
              <ProjectCard source={"./POS.png"} 
                title="Web POS System" 
                desc="Tham gia thiết kế giao diện Admin Dashboard, kiểm thử các chức năng chính: thêm/sửa/xóa sản phẩm, đăng nhập, phân quyền." />
            </Grid>
          </FadeIn>

          {/* CỘT Giữa */}
          <FadeIn direction="up" delay={160}>
            <Grid size={{ xs: 12, md: 4 }}>            
              <ProjectCard source={"./game.jpg"} 
                title="Game Project" 
                desc="Tham gia thiết kế gameplay và giao diện cơ bản cho trò chơi. Thực hiện kiểm thử thủ công trong quá trình phát triển." />
            </Grid>
          </FadeIn>

          {/* CỘT PHẢI */}
          <FadeIn direction="up" delay={180}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./portfolio.png"} 
                title="Portfolio Website" 
                desc="Thiết kế và phát triển website cá nhân với ReactJS, Material UI, Tailwind CSS." /> 
            </Grid>
          </FadeIn>
        </Grid>

      </Box>
    </section>
  );
}

export default Project;
