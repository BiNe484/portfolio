import React from "react";
import FadeIn from "./animation/FadeIn";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <section id="contact" className="relative w-full flex pt-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-linear-to-br from-[#FFF2E0] via-[#f8f1e7] to-[#ebf6fa]" />

      {/* Nội dung */}
      <Box className="relative w-full max-w mx-auto px-6 mb-24">
        {/* Title */}
        <FadeIn direction="up">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">📞 Liên hệ</h2>
            <span className="text-md text-gray-500 text-center">
              Liên hệ với tôi nếu bạn có bất kỳ câu hỏi hay cơ hội hợp tác nào nhé.
            </span>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn direction="up" delay={150}>
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <form className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Chủ đề liên hệ"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <textarea
                  rows="4"
                  placeholder="Nội dung tin nhắn..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black/30"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  group mt-2 w-full bg-black text-white py-3 rounded-lg
                  font-medium transition flex items-center justify-center
                "
              >
                {/* Text */}
                <span className="group-hover:opacity-0 transition-opacity duration-200">
                  Gửi liên hệ
                </span>

                {/* Icon */}
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <SendIcon />
                </span>
              </button>
            </form>
          </div>
        </FadeIn>
      </Box>
    </section>
  );
}

export default Contact;
