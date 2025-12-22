import { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const fakeKnowledge = [
  {
    keywords: ["bạn là ai", "giới thiệu"],
    answer:
      "Mình là AI assistant của portfolio này. Mình chỉ trả lời các câu hỏi liên quan đến Nguyễn Minh Khánh 😄",
  },
  {
    keywords: ["kỹ năng", "skill"],
    answer:
      "Khánh có kinh nghiệm với React, Tailwind, MUI, Unity và Godot.",
  },
  {
    keywords: ["dự án", "project"],
    answer:
      "Một số dự án nổi bật: Portfolio cá nhân, game nhỏ với Unity/Godot, và các UI frontend React.",
  },
  {
    keywords: ["liên hệ", "contact"],
    answer:
      "Bạn có thể sử dụng form ở cuối trang để liên hệ với Nguyễn Minh Khánh.",
  },
];

function BoxChat() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
        sender: "ai",
        text: "Xin chào 👋\nBạn có thể hỏi mình về portfolio này!",
        },
    ]);

    const getFakeReply = (question) => {
        const q = question.toLowerCase();
        const found = fakeKnowledge.find((item) =>
        item.keywords.some((k) => q.includes(k))
        );
        return (
        found?.answer ||
        "Xin lỗi 😅 mình chỉ là fake reply thôi.\nMình chỉ trả lời khi bạn nhập đúng các từ khoá nội bộ (ví dụ: giới thiệu, kỹ năng, dự án, liên hệ).\nMong bạn thông cảm nhé!"
        );
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        const thinkingMessage = { sender: "ai", text: "Đang suy nghĩ..." };

        setMessages((prev) => [...prev, userMessage, thinkingMessage]);
        setInput("");

        setTimeout(() => {
            setMessages((prev) => {
            // xoá message "Đang suy nghĩ..."
            const newMessages = [...prev];
            newMessages.pop();

            return [
                ...newMessages,
                {
                sender: "ai",
                text: getFakeReply(input),
                },
            ];
            });
        }, 2000); // 👈 2 giây
    };

  return (
    <>
      {/* CHAT ICON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg"
        >
          <ChatBubbleOutlineIcon className="text-white" />
        </button>
      )}

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-6 left-6 z-50 w-80 h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-blue-500">
            <span className="text-white font-medium">AI Assistant</span>
            <button onClick={() => setOpen(false)}>
              <CloseIcon className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] px-3 py-2 rounded-xl whitespace-pre-line
                  ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-100 text-gray-700"
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập câu hỏi..."
              className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <IconButton onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
}

export default BoxChat;
