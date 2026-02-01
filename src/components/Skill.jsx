import React from 'react'
import FadeIn from "./animation/FadeIn";
import TechCard from "./ui/Techcard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import HTMLIcon from "../assets/icons/html.png";
import CSSIcon from "../assets/icons/css.png";
import ReactJSIcon from "../assets/icons/reactjs.png";
import ViteIcon from "../assets/icons/vite.png";
import NodeJSIcon from "../assets/icons/nodejs.png";
import TailwindIcon from "../assets/icons/tailwindcss.png";
import TypeScriptIcon from "../assets/icons/typescript.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import MUIIcon from "../assets/icons/muiui.png";
import PythonIcon from "../assets/icons/python.png";
import UnityIcon from "../assets/icons/unity.png";
import CSharpIcon from "../assets/icons/csharp.png";
import FirebaseIcon from "../assets/icons/firebase.png";
import SQLIcon from "../assets/icons/sql.png";


import PostmanIcon from "../assets/icons/postman.png";
import FigmaIcon from "../assets/icons/figma.png";
import GitIcon from "../assets/icons/git.png";
import GitHubIcon from "../assets/icons/github.png";
import GitLabIcon from "../assets/icons/gitlab.png";
import VSCodeIcon from "../assets/icons/vs.png";
import WordIcon from "../assets/icons/word.png";
import ExcelIcon from "../assets/icons/excel.png";
import PPTXIcon from "../assets/icons/pptx.png";

function Skill() {

  // Danh sách công nghệ
    const techList = [
    {
      name: "HTML",
      icon: HTMLIcon,
    },
    {
      name: "CSS",
      icon: CSSIcon,
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
    },
    {
      name: "JavaScript",
      icon: JavaScriptIcon,
    },
    {
      name: "React",
      icon: ReactJSIcon,
    },
    {
      name: "Vite",
      icon: ViteIcon,
    },
    {
      name: "NodeJS",
      icon: NodeJSIcon,
    },
    {
      name: "Material UI",
      icon: MUIIcon,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
    },
    {
      name: "Python",
      icon: PythonIcon,
    },
    {
      name: "Unity",
      icon: UnityIcon,
    },
    {
      name: "C#",
      icon: CSharpIcon,
    },
    {
      name: "Firebase",
      icon: FirebaseIcon,
    },
    {
      name: "SQL",
      icon: SQLIcon,
    },
  ];

  // Tools
    const toolList = [
    {
      name: "Postman",
      icon: PostmanIcon,
    },
    {
      name: "Git",
      icon: GitIcon,
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
    },
    {
      name: "GitHLab",
      icon: GitLabIcon,
    },
    {
      name: "Figma",
      icon: FigmaIcon,
    },
    {
      name: "VS Code",
      icon: VSCodeIcon,
    },
    /*{
      name: "Word",
      icon: WordIcon,
    },
    {
      name: "Excel",
      icon: ExcelIcon,
    },
    {
      name: "PowerPoint",
      icon: PPTXIcon,
    }*/
  ];
  return (
    <section id="skills" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#0F0F0F]"></div>
      <Box
        className="relative w-full max-w mx-auto px-6 md:px-12 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-gray-200 text-3xl font-bold mb-2">Skills</h2>
            <span className="text-md text-gray-500">Some of the skills I have learned and developed.</span>
          </div>
        </FadeIn>

        <Grid container spacing={4} alignItems="stretch">

          <FadeIn direction="up" delay={160}>
        {/* CỘT TRÁI */}
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="relative border border-gray-800 bg-gray-800/10 p-6 h-full flex flex-col
            hover:scale-105 hover:bg-gray-800/50
            hover:shadow-2xl hover:shadow-purple-700/20
            transition-transform duration-300">
              <p className="text-gray-200 font-bold flex justify-center mb-4">
                Technologies
              </p>

              <div className="flex flex-wrap justify-center gap-4 px-6">
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
            </div>
          </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={240}>
          {/* CỘT PHẢI */}
           <Grid size={{ xs: 12, md: 6 }}>
            <div className="relative border border-gray-800 bg-gray-800/10 p-6 h-full flex flex-col
            hover:scale-105 hover:bg-gray-800/50
            hover:shadow-2xl hover:shadow-purple-700/20
            transition-transform duration-300">
              <p className="text-gray-200 font-bold flex justify-center mb-4">
                Tools
              </p>

              <div className="flex flex-wrap justify-center gap-4 px-6">
                {toolList.map((tech) => (
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
            </div>
          </Grid>
          </FadeIn>

        </Grid>
      </Box>

    </section>
  )
}

export default Skill