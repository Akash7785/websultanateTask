import React, { useState } from "react";
import ChatIcon from "../assets/navicons/Chat.svg";
import sendMsg from "../assets/send.png";

// Dummy messages
const initialMessages = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "coolmate",
    time: "10:13",
    message: "Hello all friends",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "coolmate",
    time: "10:13",
    message: "its all time waiting and show now low 😢",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "coolmate",
    time: "10:13",
    message:
      "Please provide camera access through your browser or device settings...",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "HATEfriends",
    time: "10:13",
    message: "Good luck everybody 🍀",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    name: "coolmate",
    time: "10:13",
    message: "how you been mate? It's been a while",
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "coolmate",
    time: "10:13",
    message: "Oooooofff",
  },
  {
    id: 7,
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "coolmate",
    time: "10:13",
    message: "err how did I move to sports",
  },
  {
    id: 8,
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "coolmate",
    time: "10:13",
    message: "thought the mod had gone mad asking not to share casino bets lol",
  },
  {
    id: 9,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "coolmate",
    time: "10:13",
    message: "Hello all friends",
  },
  {
    id: 10,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "coolmate",
    time: "10:13",
    message: "its all time waiting and show now low 😢",
  },
  {
    id: 11,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "coolmate",
    time: "10:13",
    message:
      "Please provide camera access through your browser or device settings...",
  },
  {
    id: 12,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "HATEfriends",
    time: "10:13",
    message: "Good luck everybody 🍀",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMsg = {
      id: messages.length + 1,
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "you",
      time: new Date().toLocaleTimeString(),
      message: newMessage,
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <aside className="hidden lg:flex flex-col bg-[#16161B] w-[320px] h-[900px] text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2e]">
        <div className="flex items-center gap-2">
          <img src={ChatIcon} alt="live" />
          <span className="font-medium">Chat</span>
        </div>
        <div className="flex items-center gap-2 text-sm bg-[#1e1e22] px-3 py-2 rounded-md">
          <div className="relative w-4 h-4">
            <span className="absolute inset-0 rounded-full bg-[#B1FF62] opacity-20 animate-ping"></span>
            <span className="absolute inset-1 rounded-full bg-[#B1FF62] opacity-70"></span>
          </div>
          <span>12,490</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-hidden">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-2">
            <img
              src={msg.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-xs text-gray-400">
                <span className="font-medium text-[#A3A3B7] mr-1 ">
                  {msg.name}
                </span>
                {msg.time}
              </div>
              <div className="bg-[#1e1e22] text-sm px-3 py-1 rounded-md mt-1 w-fit max-w-[220px] break-words">
                {msg.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-[#2a2a2e] flex items-center gap-2 bg-[#16161B]">
        <input
          type="text"
          placeholder="Enter your message"
          className="flex-1 bg-[#1e1e22] text-sm px-3 py-2 rounded-md outline-none text-white placeholder:text-gray-400"
          value={newMessage}
          onChange={handleMessageChange}
        />
        <button
          onClick={handleSendMessage}
          className="bg-[#7848FF] p-2 rounded-md"
        >
          <img src={sendMsg} alt="" />
        </button>
      </div>
    </aside>
  );
};

export default Chat;
