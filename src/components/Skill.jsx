import React from 'react'
import FadeIn from "./animation/FadeIn";
import SkillCard from "./ui/SkillCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Skill() {
  return (
    <section id="skills" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-linear-to-r from-slate-200 to-gray-100"></div>
      <Box
        className="relative w-full max-w mx-auto px-6 md:px-12 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Kỹ năng</h2>
            <span className="text-md text-gray-500">Một số kỹ năng, điểm mạnh và điểm yếu của tôi.</span>
          </div>
        </FadeIn>

        <Grid container spacing={4} alignItems="stretch">

          <FadeIn direction="up" delay={160}>
        {/* CỘT TRÁI */}
          <Grid size={{ xs: 12, md: 3 }}>
              <SkillCard 
                title="Ngôn ngữ và Tester cơ bản"
                desc={[
                  "Frontend cơ bản",
                  "ReactJS",  
                  "JavaScript",
                  "Html/CSS",                  
                  "Python",
                  "Kiểm thử thủ công",
                  "Viết Test Case",
                  "Viết Bug Report",
                  "Kiểm thử giao diện và chức năng"
                ]}
              />
          </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={160}>
        {/* CỘT TRÁI */}
          <Grid size={{ xs: 12, md: 3 }}>
              <SkillCard 
                title="Kỹ năng mềm"
                desc={[
                  "Tư duy logic tốt",
                  "Khả năng tự học tốt",
                  "Làm việc độc lập và làm việc nhóm",
                  "Quản lý thời gian",
                  "Khả năng quan sát, chú ý chi tiết",
                  "Chủ động tìm hiểu và hoàn thành nhiệm vụ"
                ]}
              />
          </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
          {/* CỘT GIỮA  */}
            <Grid size={{ xs: 12, md: 3 }}>
              <SkillCard 
                title="Ưu điểm"
                desc={[
                  "Tỉ mỉ, cẩn thận, cú ý đến chi tiết",
                  "Trung thực, thẳng thắn",
                  "Ham học hỏi, tiếp thu nhanh",
                  "Dễ hòa nhập với môi trường mới sau 1–2 lần tương tác"
                ]}
              />
          </Grid>
          </FadeIn>

          <FadeIn direction="up" delay={240}>
          {/* CỘT PHẢI */}
           <Grid size={{ xs: 12, md: 3 }}>
              <SkillCard 
                title="Nhược điểm"
                desc={[
                  "Chưa có nhiều kinh nghiệm thực tế, nhưng đang chủ động tự học thông qua dự án cá nhân",
                  "Hơi ít nói trong lần tương tác đầu tiên, nhưng dễ hòa nhập và giao tiếp tự nhiên hơn sau khi quen team.",
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