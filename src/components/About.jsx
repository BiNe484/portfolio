import React from "react";
import FadeIn from "./animation/FadeIn";
import AdvantageCard from "./ui/AdvantageCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import CalendarTodaySharpIcon from '@mui/icons-material/CalendarTodaySharp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function About() {
  
  // list
  const menuList = [
    {id: 1, icon: CalendarTodaySharpIcon, label: "Ngày sinh", content: "04/08/2004" },
    {id: 2, icon: MailOutlineSharpIcon, label: "Email", content: "minhkhanh484.work@gmail.com" },
    {id: 3, icon: LocalPhoneOutlinedIcon, label: "Số điện thoại", content: "0334437312" },
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
      <div className="absolute inset-0 overflow-hidden bg-linear-to-br from-[#fef0fb] via-[#f9f9fe] to-[#dfe1ff]">

      </div>
      {/* Nội dung */}
      <Box
        className="relative w-full max-w mx-auto px-6 mb-24"
        sx={{ flexGrow: 1 }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">🧑‍💻 Về tôi</h2>
            <span className="text-md text-gray-500">Thông tin cá nhân và mục tiêu nghề nghiệp.</span>
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
                <div className="relative bg-white/80 p-6 rounded-xl shadow-2xl h-full">
                <p className="text-gray-800 text-md font-bold">Thông tin cá nhân</p>
                  {/* Khung trên*/}
                  <div className=" bg-white p-4 rounded-xl shadow-lg h-full mt-4
                  hover:scale-105 transition-transform duration-300">
                    <ul className="list-none pl-2 text-gray-700 wrap-break-word">
                      {renderList()}
                    </ul>
                  </div>
                </div>            
            </Grid>
          </FadeIn>

          {/* BÊN PHẢI*/}
          <FadeIn direction="right" delay={100}>
            <Grid size={{ xs: 12, md: 6 }}>            
                <div className="relative bg-white/80 p-6 rounded-xl shadow-2xl h-full">
                <p className="text-gray-800 text-md font-bold">Mục tiêu nghề nghiệp</p>
                  {/* Khung trên*/}
                  <div className=" bg-white p-4 rounded-xl shadow-lg h-full mt-4
                  hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-gray-700 mb-6 text-justify">
                      Mục tiêu nghề nghiệp của tôi là trở thành một lập trình viên Frontend và một Tester,
                      có khả năng cả về phát triển giao diện người dùng bắt mắt và kiểm thử phần mềm.
                      Tôi mong muốn làm việc trong một môi trường sáng tạo,
                      nơi tôi có thể áp dụng kiến thức để xây dựng các ứng dụng web hiệu quả, thân thiện và mượt mà với người dùng.
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
            </Grid>
          </FadeIn>

          {/* Kỹ năng mềm */}

          {/* Ưu điểm */}
          <FadeIn direction="left" delay={100}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AdvantageCard 
              title="😆 Ưu điểm"                 
              desc={[
                    "Làm việc độc lập và làm việc nhóm",
                    "Khả năng tự học tốt",               
                    "Khả năng quan sát, chú ý chi tiết",
                    "Trung thực, thẳng thắn",
                    "Tư duy kiểm thử khi làm giao diện",
                    "Sáng tạo trong bố cục và trải nghiệm người dùng"
                  ]}/>
          </Grid>
          </FadeIn>

          {/* Nhược điểm */}
          <FadeIn direction="right" delay={100}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AdvantageCard 
              title="🫣 Nhược điểm"                
              desc={[
                    "Ban đầu hơi trầm khi làm việc với người mới, nhưng giao tiếp rất tốt sau khi đã quen và làm việc chung",
                    "Chưa có nhiều kinh nghiệm thực tế, nhưng chủ động học và cải thiện mỗi ngày"
                  ]}/>
          </Grid>
          </FadeIn>
        </Grid>
      </Box>
      
    </section>
  );
}

export default About;
