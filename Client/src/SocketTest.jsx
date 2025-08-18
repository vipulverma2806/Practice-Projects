// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:4000");

// export default function App() {
//   const [msg, setMsg] = useState("");
//   const [send,setSend] =useState("")

//   useEffect(() => {
//     socket.on("message", setMsg);
//   }, []);

//   return (
//     <div>
//       <h1>{msg}</h1>
//       <input type="text" onChange={(e)=>setSend(e.target.value)} />
//       <button onClick={() => socket.emit("message",send)}>
//         Send to Server
//       </button>
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

export default function App() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [to,setTo] = useState("");
  useEffect(() => {
    socket.on("chat", m => setMsgs(prev => [...prev, m]));
    return () => socket.off("chat");
  }, []);

  const send = () => {
    socket.emit("chat", {to,msg});
    setMsg("");
  };

  return (
    <div>
      <div>
        {msgs.map((m, i) => <div key={i}>{m}</div>)}
      </div>
      <input placeholder="msg" value={msg} onChange={e => setMsg(e.target.value)} />
      <input placeholder="target" value={to} onChange={e => setTo(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}

