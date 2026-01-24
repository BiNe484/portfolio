import { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const fakeKnowledge = [
  {
    keywords: ["who are you", "introduce"],
    answer:
      "I am the AI assistant of this portfolio. I only answer questions related to Nguyen Minh Khanh 😄",
  },
  {
    keywords: ["skills", "skill"],
    answer:
      "Khanh has experience with React, Tailwind, MUI, Unity and Godot.",
  },
  {
    keywords: ["projects", "project"],
    answer:
      "Some notable projects: Personal portfolio, small games with Unity/Godot, and React frontend UIs.",
  },
  {
    keywords: ["contact"],
    answer:
      "You can use the form at the bottom of the page to contact Nguyen Minh Khanh.",
  },
];

function BoxChat() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
        sender: "ai",
        text: "Hello 👋\nYou can ask me about this portfolio!",
        },
    ]);

    const getFakeReply = (question) => {
        const q = question.toLowerCase();
        const found = fakeKnowledge.find((item) =>
        item.keywords.some((k) => q.includes(k))
        );
        return (
        found?.answer ||
        "I'm sorry 😅 I'm just a fake reply.\nI only answer when you enter the correct internal keywords (e.g., introduce, skills, projects, contact).\nPlease understand!"
        );
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        const thinkingMessage = { sender: "ai", text: "Thinking..." };

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
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
        >
          <ChatBubbleOutlineIcon className="text-white" />
        </button>
      )}

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-6 left-6 z-50 w-80 h-[420px] bg-black rounded-2xl flex flex-col overflow-hidden">
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
                      : "bg-white/70 text-gray-700"
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white/10 p-3 border-t flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Enter..."
              className="flex-1 px-3 py-2 text-white text-sm rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <IconButton onClick={handleSend} color="primary">
              <SendIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
}

export default BoxChat;
