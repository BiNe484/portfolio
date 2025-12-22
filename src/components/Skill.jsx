import React from 'react'
import FadeIn from "./animation/FadeIn";
import SkillCard from "./ui/SkillCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Skill() {
  return (
    <section id="skills" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-linear-to-br from-[#f3f0ff] via-[#f7f6fb] to-[#f7e7f8]"></div>
      <Box
        className="relative w-full max-w mx-auto px-6 md:px-12 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">⚡ Kỹ năng</h2>
            <span className="text-md text-gray-500">Một số kỹ năng tôi đã học và phát triển.</span>
          </div>
        </FadeIn>

        <Grid container spacing={4} alignItems="stretch">

          <FadeIn direction="up" delay={160}>
        {/* CỘT TRÁI */}
          <Grid size={{ xs: 12, md: 4 }}>
              <SkillCard 
                title="💻 Công nghệ"
                desc={[
                  "JavaScript",
                  "ReactJS, TailwindCSS, MUI",
                  "HTML, CSS",
                  "Python",
                  "C, C#",
                  "SQL"
                ]}
              />
          </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
          {/* CỘT GIỮA  */}
            <Grid size={{ xs: 12, md: 4 }}>
              <SkillCard 
                title="🧪 Kiểm thử"
                desc={[
                  "Viết test case thủ công",
                  "Manual Tsting",
                  "Ghi nhận và mô tả bug",
                  "Kiểm thử giao diện",
                  "Kiểm thử luồng người dùng cơ bản"
                ]}
              />
          </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={240}>
          {/* CỘT PHẢI */}
           <Grid size={{ xs: 12, md: 4 }}>
              <SkillCard 
                title="🛠️ Công cụ"
                desc={[
                  "Postman",
                  "Figma",
                  "Git, GitHub, GitLab",
                  "Visual Studio Code",
                  "Unity Engine",
                  "Microsoft Office (Word, Excel, PowerPoint)"
                ]}
              />
          </Grid>
          </FadeIn>

        </Grid>
      </Box>

    </section>
  )
}

export default Skill