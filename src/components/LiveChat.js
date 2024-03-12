import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, generateMessageString } from "../utils/helper";

const LiveChat = () => {
  const [liveChatMessage, setLiveChatMessage] = useState("")
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("i:", i);
      dispatch(
        addMessage({
          name: generate(),
          message: generateMessageString(15),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-[700px]">
      <div className="w-[22rem] flex flex-col-reverse overflow-y-scroll h-[450px] ml-1 p-1 border border-black bg-slate-100 rounded-lg">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form className=" w-[22rem] ml-1 p-1 h-[50px] pt-2  border border-black bg-slate-100 rounded-lg" onSubmit={(e)=>{
        e.preventDefault();
        console.log("on submit form")
        dispatch(addMessage({name:"shree",
      message:liveChatMessage}))
        
      }}>
        <input className="p-2 w-60" placeholder="Chat..." type="text" value={liveChatMessage} onChange={(e)=>setLiveChatMessage(e.target.value)}></input>
        <button className="px-4 m-2 bg-green-300 border border-black rounded" >Submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
