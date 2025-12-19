import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./animation/FadeIn";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Contact() {
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success", // success | error | warning | info
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: "Gửi email thành công! Mình sẽ phản hồi sớm nhé.",
            severity: "success",
          });
          formRef.current.reset();
        },
        (error) => {
          setSnackbar({
            open: true,
            message: "Gửi email thất bại. Vui lòng thử lại sau.",
            severity: "error",
          });
          console.error(error);
        }
      );
  };


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
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chủ đề
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Chủ đề liên hệ"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Nội dung tin nhắn..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
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
            <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Contact;
