import React from "react";
import FadeIn from "./animation/FadeIn";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import CalendarTodaySharpIcon from '@mui/icons-material/CalendarTodaySharp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function About() {
  
  // list
  const menuList = [
    {id: 1, icon: CalendarTodaySharpIcon, label: "Date of birth", content: "04/08/2004" },
    {id: 2, icon: MailOutlineSharpIcon, label: "Email", content: "minhkhanh484.work@gmail.com" },
    {id: 3, icon: LocalPhoneOutlinedIcon, label: "Phone number", content: "0334437312" },
    {id: 4, icon: FacebookOutlinedIcon, label: "Facebook", content: "https://www.facebook.com/nguyen.minh.khanh.410853", href: "https://www.facebook.com/nguyen.minh.khanh.410853" },
  ];

  const renderList = () =>
    menuList.map((item) => {
      const Icon = item.icon;
      
      return (
        <li key={item.id} className="mb-4 ">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            {Icon && (
              <Icon 
                sx={{ 
                  fontSize: 14,
                  color: "#1e90ff"
                }}
              />
            )}
            {item.label}
          </p>
          <p className="ml-6 text-sm">{ item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.content}</a> : item.content}</p>
        </li>
      );
    });

  return (
    <section id="about" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#0F0F0F]">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12 ">
            <h2 className="text-3xl font-bold mb-2 text-gray-200">About Me</h2>
            <span className="text-md text-gray-500">Personal information and career goals.</span>
          </div>
        </FadeIn>
        
        <Grid
          container
          spacing={4}
          rowSpacing={10}
          alignItems="stretch"
          className="flex justify-between mt-12"
        >
          {/* BÊN TRÁI*/}
          <FadeIn direction="left" delay={100}>
            <Grid size={{xs:12, md:6}}>            
                <div className="relative border-gray-800 border bg-gray-800/10 p-6 h-full">
                <p className="text-white text-md font-bold ">Personal Information</p>
                  {/* Khung trên*/}
                  <div className="backdrop-blur-md border-gray-800 border p-4 h-full mt-4
                  hover:scale-105 hover:bg-gray-800/50
                  hover:shadow-2xl hover:shadow-purple-700/20
                  transition-transform duration-300">
                    <ul className="list-none pl-2 text-gray-200 wrap-break-word">
                      {renderList()}
                    </ul>
                  </div>
                </div>            
            </Grid>
          </FadeIn>

          {/* BÊN PHẢI*/}
          <FadeIn direction="right" delay={100}>
            <Grid size={{ xs: 12, md: 6 }}>            
                <div className="relative border-gray-800 border bg-gray-800/10 p-6 h-full">
                <p className="text-white text-md font-bold">Career Goals</p>
                  {/* Khung trên*/}
                  <div className="backdrop-blur-md border-gray-800 border p-4 h-full mt-4
                  hover:scale-105 hover:bg-gray-800/50
                  hover:shadow-2xl hover:shadow-purple-700/20
                  transition-transform duration-300">
                    <p className="text-sm text-gray-200 mb-6 text-justify">
                      Aspire  to  become  a  skilled  Frontend  Developer  specializing  in 
                      responsive, user-friendly web apps using technologies like React.js and 
                      Tailwind  CSS.  As  a  Frontend  Intern,  eager  to  apply  academic 
                      knowledge  and  project  experience  in  real-world  projects,  contribute 
                      meaningfully  under  professional  guidance,  gain  hands-on  experience, 
                      and continuously learn to grow into a competent developer. Available 
                      and committed to a 4-5 month internship, flexible full-time or part-time 
                      based on company needs.
                    </p>
                    <div>
                      <p className="text-gray-200 text-sm font-bold mt-2">Education</p>
                      <div className="text-gray-300 text-xs backdrop-blur-md border-gray-800 border rounded-xl p-4 mt-2">
                        <p className="font-bold">Computer Science</p>
                        <p>2022 - 2026: Bachelor of Computer Science at Ton Duc Thang University (TDTU)</p>
                      </div>
                    </div>
                  </div>
                </div>
            </Grid>
          </FadeIn>
        </Grid>
      </Box>
      
    </section>
  );
}

export default About;
