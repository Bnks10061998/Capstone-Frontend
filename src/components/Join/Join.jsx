import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const JoinChat = async (values) => {
    console.log(values);
    try {
  
    const res = await axios.post(
      "http://localhost:8080/Join/Startjoin",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  
  if (res.data.success) {
              
    message.success(res.data.message);
}
}
 catch (error) {
console.log(error);
}


};

  return (
    <div className="joinOuterContainer" style={{ height: "635px", paddingTop: "11px" , paddingLeft: "500px",color: "#157ae1"}}>
      <div className="joinInnerContainer">
        <h1 className="heading">Create Chat Page</h1>
        <div style={{ paddingTop: "11px",paddingLeft: "50px" }}>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div style={{ paddingTop: "11px",paddingLeft: "50px" }}>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <div style={{ paddingTop: "11px" }}>
          <button className={'button mt-20'} style={{ paddingTop: "11px" ,paddingLeft: "200px"}} type="submit">Join to Chat</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
