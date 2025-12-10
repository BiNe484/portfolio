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
    {icon: CalendarTodaySharpIcon, label: "Ngày sinh", content: "04/08/2004" },
    {icon: MailOutlineSharpIcon, label: "Email", content: "minhkhanh484.work@gmail.com" },
    {icon: LocalPhoneOutlinedIcon, label: "Số điện thoại", content: "0334437312" },
    {icon: FacebookOutlinedIcon, label: "Facebook", content: "https://www.facebook.com/nguyen.minh.khanh.410853", href: "https://www.facebook.com/nguyen.minh.khanh.410853" },
  ];

  const renderList = () =>
    menuList.map((item) => {
      const Icon = item.icon;
      
      return (
        <li className="mb-4 ">
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
      <div className="absolute inset-0 overflow-hidden bg-linear-to-r from-slate-200 to-gray-100">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Về tôi</h2>
            <span className="text-md text-gray-500">Thông tin cá nhân và mục tiêu nghề nghiệp</span>
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
          <Grid size={{xs:12, md:6}}>
            <FadeIn direction="left" delay={100}>
              <div className="relative bg-white/70 p-6 rounded-xl shadow-2xl h-full">
              <p className="text-gray-800 text-md font-bold">Thông tin cá nhân</p>
                {/* Khung trên*/}
                <div className=" bg-white p-4 rounded-xl shadow-lg h-full mt-4">
                  <ul className="list-none pl-2 text-gray-700 wrap-break-word">
                    {renderList()}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </Grid>

          {/* BÊN PHẢI*/}
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeIn direction="right" delay={100}>
              <div className="relative bg-white/70 p-6 rounded-xl shadow-2xl h-full">
              <p className="text-gray-800 text-md font-bold">Mục tiêu nghề nghiệp</p>
                {/* Khung trên*/}
                <div className=" bg-white p-4 rounded-xl shadow-lg h-full mt-4">
                  <p className="text-sm text-gray-700 mb-6 text-justify">
                    Mục tiêu nghề nghiệp của tôi là trở thành một lập trình viên Frontend và một Tester,
                    có khả năng cả về phát triển giao diện người dùng bắt mắt và kiểm thử phần mềm.
                    Tôi mong muốn làm việc trong một môi trường sáng tạo,
                    nơi tôi có thể áp dụng kiến thức về ReactJS và Node.js để xây dựng các ứng dụng web hiệu quả và thân thiện với người dùng.
                    Tôi cũng hướng tới việc không ngừng học hỏi và nâng cao kỹ năng của mình để đóng góp tích cực vào sự phát triển của công ty.
                  </p>
                  <div>
                    <p className="text-sm font-bold mt-2">Học vấn</p>
                    <div className="text-xs text-gray-500 bg-gray-100 rounded-2xl p-4 mt-2">
                      <p className="font-bold">Công nghệ thông tin</p>
                      <p>2022 - 2026: Sinh viên ngành Khoa học máy tính, Trường Đại học Tôn Đức Thắng (TDTU)</p>
                    </div>
                  </div>
                </div>
              </div>
          </FadeIn>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default About;
