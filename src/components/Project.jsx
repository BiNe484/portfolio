import React from "react";
import FadeIn from "./animation/FadeIn";
import ProjectCard from "./ui/ProjectCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Project() {
  return (
    <section id="projects" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#0F0F0F]">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-gray-200 text-3xl font-bold mb-2">Projects</h2>
            <span className="text-md text-gray-500 text-center">Some of the UI design and software development projects I have participated in.</span>
          </div>
        </FadeIn>
        
        <Grid container spacing={4} alignItems="stretch">

          <FadeIn direction="up" delay={100}>
            <Grid size={{ xs: 12, md: 4 }}>              
              <ProjectCard source={"./POS.png"} 
                title="Cosmetic POS Website System" 
                desc="Participated in designing the Admin Dashboard interface and testing core functionalities, including product creation, editing, deletion, authentication, and role-based access control."
                language="ReactJS Vite, Nodejs, TypeScript, TailwindCSS, MongoDB, Material UI" />
            </Grid>
          </FadeIn>


          <FadeIn direction="up" delay={160}>
            <Grid size={{ xs: 12, md: 4 }}>            
              <ProjectCard source={"./game.jpg"} 
                title="Unity Engine Project" 
                desc="Participated in designing gameplay, UI, and developing the game. Conducted manual testing during development."
                language="Unity Engine, C#, Firebase" />
            </Grid>
          </FadeIn>


          <FadeIn direction="up" delay={220}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./portfolio.png"} 
                title="Portfolio Website" 
                desc="Designed and developed a personal portfolio website using ReactJS, Material UI, and Tailwind CSS."
                language="ReactJS Vite, JavaScript, TailwindCSS, Material UI" />
            </Grid>
          </FadeIn>


          <FadeIn direction="up" delay={100}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./android.png"} 
                title="Mobile Banking" 
                desc="Participated in designing and developing a mobile application to simulate the workflow and functions of a current banking app."
                language="Android Studio, Java" />
            </Grid>
          </FadeIn>

                  

          <FadeIn direction="up" delay={160}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./godot.png"} 
                title="Godot Engine Project" 
                desc="Designed a simple 2D action game, applying 2D physics, animation, basic AI, and UI system."
                language="Godot Engine, GDScript" />
            </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={220}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProjectCard source={"./tasmana.png"} 
                title="Company Management" 
                desc="Participated in designing, developing and testing a company management software with features for managing companies, residents, and generating reports. Integrated facial recognition AI to unlock the software."
                language="C#, ADO.NET, SQL Server" />
            </Grid>
          </FadeIn>

        </Grid>
      </Box>
    </section>
  );
}

export default Project;
