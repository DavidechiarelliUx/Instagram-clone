import { useState, useEffect } from 'react';
import {GET} from '../../utils/http';
import './Messages.css';
import { Back, Call, CameraIcon } from '../../icons';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [chatName, setChatName] = useState("");

  useEffect(() => {
    GET("https://api.npoint.io/45615d0ddef177eef95b")
      .then((res) => setMessages(res.messageList))
      .catch((err) => console.log(err));
  }, []);

  const onSetChatName = (value) => setChatName(value);

  const onChatRendering = () => {
    switch (chatName) {
      case "":
        return (
          <div className="Messages__list">
            {messages?.map((chat) => (
              <div
                onClick={() => onSetChatName(chat.participants[1].username)}
                key={chat.id}
                className="Messages__chat"
              >
                <img
                  src={chat.participants[1].avatar_url}
                  alt={chat.participants[1].username}
                />
                <div className="Messages__chat--text">
                  <p>{chat.participants[1].username}</p>
                  <p>{chat.messages[chat.messages.length - 1].content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        const chat = messages.find(
          (chat) => chat.participants[1].username === chatName
        );
        return (
          <div className="Messages__single">
            <div className="Messages__single--header">
              <p onClick={() => onSetChatName("")}><Back/></p>
              <img
                src={chat.participants[1].avatar_url}
                alt={chat.participants[1].username}
              />
              <h2>{chat.participants[1].username}</h2>
              <p className='Messages__single--header--call'><Call/></p>
            </div>
            <div className="Messages__single--body">
              {chat.messages.map((message) => (
                <p
                  className={`singleChat__msg ${
                    message.sender === "John" ? "right" : "left"
                  }`}
                  style={{
                    alignSelf: message.sender === "John" ? "flex-end" : "flex-start",
                  }}
                  key={message.id}
                >
                  {message.content}
                </p>
              ))}
            </div>
            <form>
              <div className='form-input'>
                <input
                  id="messageInput"
                  type="text"
                  placeholder="Scrivi un messaggio..."
                />
                <span className='form-icon'>
                  <CameraIcon/> 
                </span>
              </div>
            </form>
          </div>
        );
    }
  };

  return <div className="Messages">{onChatRendering()}</div>;
};

export default Messages;