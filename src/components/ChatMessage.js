import React from "react";
import { USER_ICON_IMG_URL2 } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="pt-2 shadow-lg flex ">
      {/* <h1>Live Chat</h1> */}
      <img className="w-8 h-8" alt="user-logo" src={USER_ICON_IMG_URL2} />

      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
