import useChat from "./chat/useChat";
import React, { useState } from "react";

function Swipe(props) {
  
  console.log(props.id)
    const roomId = props.user._id; 
    const user = props.me // Gets roomId from URL
    const id = props.id
    const type ="swipe"
    const image =props.pic
    const time = Date.now()
    console.log(props)
    const { messages, sendMessage } = useChat(roomId, user, id, type, image, time); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = useState(`I like your profile!`);
    // const [account, setAccount] = useState([]);
    
 
  
    const handleNewMessageChange = (event) => {
      setNewMessage(event.target.value);
      console.log(props.user.name)
      console.log(user + '!!!!!!')
    };
  
    const handleSendMessage = () => {
      document.getElementById(props.user.image_url).style.display="none";
      console.log(roomId);
      sendMessage(newMessage);
      setNewMessage(`Your profile was liked by ${props.me}`);
      // alert("Your like has been sent!!")
    };

    const handleSwipeChange = () =>{
      document.querySelector('.this').style.display="block";
      
      props.toggle()
   
    }
    
    return(
      <div>
        <div className="like-button">
        <button className="swipe" onClick={handleSwipeChange}>Swipe</button>
          <div id="me">
          <img className="profilePic" src={props.user.image_url} />
          
          <p id="user-name">{props.user.name}</p>
          <p>Age: {props.user.age}</p> 
          <p>Bio: {props.user.bio}</p> 
          <p>Gender: {props.user.gender}</p> 
          <p>Likes: {props.user.preference}</p> 
          </div>
          <button id={props.user.image_url} onClick={handleSendMessage} className="swipe this">
            Like
          </button>
          
        </div>
        </div>
    )
}

export default Swipe;