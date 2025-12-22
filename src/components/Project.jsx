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

          <FadeIn direction="up" delay={100}>
            <Grid size={{ xs: 12, md: 4 }}>              
              <ProjectCard source={"./POS.png"} 
                title="Cosmetic POS Website System" 
                desc="Tham gia thiết kế giao diện Admin Dashboard, kiểm thử các chức năng chính: thêm/sửa/xóa sản phẩm, đăng nhập, phân quyền."
                language="ReactJS Vite, Nodejs, TypeScript, HTML/CSS, TailwindCSS, MongoDB, MuiUI" />
            </Grid>
          </FadeIn>


          <FadeIn direction="up" delay={160}>
            <Grid size={{ xs: 12, md: 4 }}>            
              <ProjectCard source={"./game.jpg"} 
                title="Unity Engine Project" 
                desc="Tham gia thiết kế gameplay, giao diện và phát triển trò chơi. Thực hiện kiểm thử thủ công trong quá trình phát triển."
                language="Unity Engine, C#, Firebase" />
            </Grid>
          </FadeIn>


          <FadeIn direction="up" delay={220}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./portfolio.png"} 
                title="Portfolio Website" 
                desc="Thiết kế và phát triển website cá nhân với ReactJS, Material UI, Tailwind CSS."
                language="ReactJS Vite, JavaScript, HTML, CSS, TailwindCSS, MuiUI" />
            </Grid>
          </FadeIn>


          <FadeIn direction="up" delay={100}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./android.png"} 
                title="Mobile Banking" 
                desc="Tham gia thiết kế và phát triển ứng dụng điện thoại để mô phỏng luồng làm việc, chức năng của một app ngân hàng hiện nay."
                language="Android Studio, Java" />
            </Grid>
          </FadeIn>

                  

          <FadeIn direction="up" delay={160}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./godot.png"} 
                title="Godot Engine Project" 
                desc="Thiết kế game hành động 2D đơn giản, áp dụng vật lý 2D, animation, AI cơ bản và hệ thống UI."
                language="Godot Engine, GDScript" />
            </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={220}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./tasmana.png"} 
                title="Company Management" 
                desc="Tham gia thiết kế, phát triển và kiểm thử phần mềm quản lý công việc với các chức năng quản lý
                công ty, dân cư, tạo báo cáo. Tích hợp AI nhận diện khuôn mặt để mở khóa phần mềm."
                language="C#, ADO.NET, SQL Server" /> 
            </Grid>
          </FadeIn>

        </Grid>
      </Box>
    </section>
  );
}

export default Project;
