import React from "react";
import FadeIn from "./animation/FadeIn";
import CertificateCard from "./ui/CertificateCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Certificate() {
  return (
    <section id="certificates" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-linear-to-br from-[#FFF2E0] via-[#f8f1e7] to-[#ebf6fa]">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">📜 Chứng chỉ</h2>
            <span className="text-md text-gray-500">Một số chứng chỉ đã đạt được.</span>
          </div>
        </FadeIn>
        
        <Grid container spacing={4} alignItems="stretch">
          {/* CỘT TRÁI */}
          <FadeIn direction="up" delay={140}>
            <Grid size={{ xs: 12, md: 4 }}>                
                <CertificateCard source={"./PET.png"} title="Tiếng Anh" desc="Chứng chỉ PET B1 (Preliminary English Test)" />                
            </Grid>
        </FadeIn>

          {/* CỘT Giữa */}
          <FadeIn direction="up" delay={160}>
            <Grid size={{ xs: 12, md: 4 }}>                
                <CertificateCard source={"./nothing.png"} title="Tiếng Trung" desc="Chứng chỉ HSK (Hanyu Shuiping Kaoshi / 汉语水平考试)" />                
            </Grid>
        </FadeIn>

          {/* CỘT PHẢI */}
          <FadeIn direction="up" delay={180}>
            <Grid size={{ xs: 12, md: 4 }}>            
                <CertificateCard source={"./nothing.png"} title="Tiếng Anh" desc="Chứng chỉ PET (Preliminary English Test) cấp B1" />            
            </Grid>
          </FadeIn>
        </Grid>

      </Box>
    </section>
  );
}

export default Certificate;
