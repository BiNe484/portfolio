import React from "react";
import FadeIn from "./animation/FadeIn";
import AvatarFrame from "./ui/AvatarFrame";
import TechCard from "./ui/Techcard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ReactJSIcon from "../assets/icons/reactjs.png";
import TailwindIcon from "../assets/icons/tailwindcss.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import FigmaIcon from "../assets/icons/figma.png";
import GitIcon from "../assets/icons/git.png";

function Home() {
  const techList = [
  {
    name: "React",
    icon: ReactJSIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
];
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="./background.png"
          alt="background"
          className="w-full h-full object-cover scale-100"
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
            <FadeIn direction="up">
            <div className="text-white space-y-2 md:pt-0 pt-24">
              <p className="text-xl">Hello! I'm</p>
              <h1 className="text-5xl font-bold">Nguyễn Minh Khánh</h1>
              <p className="text-xl">IT Intern</p>
              <p className="text-lg pt-6 text-justify">
                I am a Computer Science undergraduate with a strong interest in game development and interactive applications. I have a solid foundation in programming through academic projects and hands-on experience with web and mobile applications. I possess basic knowledge of game development using Unity and Godot, including gameplay logic, interactive scenes, and application structure. I am eager to learn, receptive to feedback, and motivated to continuously improve through real-world game projects.
              </p>
            </div>
            </FadeIn>
          </Grid>

          {/* BÊN PHẢI*/}
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeIn direction="up">
              <div className="">
                <AvatarFrame/>
              </div>              
            </FadeIn>
          </Grid>
        </Grid>
      </Box>
      <FadeIn direction="up" delay={200}>
          <div
            className="
              absolute bottom-6 left-0 w-full
              flex flex-wrap
              justify-center
              gap-4
              px-6
            "
          >
            {techList.map((tech) => (
              <TechCard
                key={tech.name}
                icon={
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-5 h-5"
                  />
                }
                name={tech.name}
              />
            ))}

          </div>
      </FadeIn>
    </section>
  );
}

export default Home;
