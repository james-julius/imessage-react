import React, { useState, useEffect } from 'react'
import styles from '../style.module.css'
import Header from "../../header";
import CollapsedInputFooter from "../../footer/collapsed-input-footer";
import MessageHistory from "../../messages/message-history";

const PhoneWindow = () => {
  const [spotifyURI, setSpotifyURI] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("R R");
  // Get ready to assign this data
  useEffect(() => {
    setName("J J ")
    window.addEventListener(
      "message",
      function (event) {
        console.log(window.parent.location.href);
        if (
          event.origin !== "https://aio-4bcab1.webflow.io/artist-react-linked"
        )
          return;
        setName("Event received");
        alert(event.data);
        // var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
        if (typeof event.data === "object" && event.data.call === "sendValue") {
          let data = event.data.value;
          setSpotifyURI(data.spotifyURI);
          setMessages(data.messages);
          setName(data.name);
        }
      },
      false
    );
  }, []);
  

  
  document.onload = function() {
    window.parent.postMessage('message', () => 'readyForProps')
  }


  function initialiseName() {
    let splitName = name.split(' ');
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  }

  return (
  <div
    className={styles['window']}
  >
      <Header name={name} initials={initialiseName()}/>
      <MessageHistory messages={messages}/>
      <CollapsedInputFooter spotifyURI={spotifyURI}/>
  </div>
)}

export default PhoneWindow
