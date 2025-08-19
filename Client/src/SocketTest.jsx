// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:4000");

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     socket.on("msg", (msg) => {
//       setMessage(msg);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App;






import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"
const App = () => {
  const socket = io("http://localhost:4000")
  const [msg,setmsg] = useState("")
  useEffect(()=>{
    socket.on("msg",(msg)=>{
      setmsg(msg)
    })
  })
  return (
    <div>{`message is ${msg}`}</div>
  )
}

export default App







