import React from "react";
import axios from "axios";

const chats = () => {
  const fetchChat = async () => {
    const data = await axios.get("/api/chat");
    console.log(data);
  };
};

export default chats;
