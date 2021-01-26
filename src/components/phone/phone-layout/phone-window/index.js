import React, { useState } from 'react'
import styles from '../style.module.css'
import Header from "../../header";
import CollapsedInputFooter from "../../footer/collapsed-input-footer";
import MessageHistory from "../../messages/message-history";

const PhoneWindow = () => {
  // Get ready to assign this data
  window.addEventListener('message', function(event) {
  if (event.origin !== window.parent.location.href) return;
    alert(event)
    // var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    if (typeof event.data === 'object' && event.data.call === 'sendValue') {
        let data = event.data.value;
        setSpotifyURI(data.spotifyURI);
        setMessages(data.messages);
        setName(data.name);
    }
}, false);

  
  document.onload = function() {
    window.parent.postMessage('message', () => 'readyForProps')
    setName(window.parent.artistName);
  }

  const [spotifyURI, setSpotifyURI] = useState('');
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('R R');

  function initialiseName() {
    let splitName = name.split(' ');
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  }

  return (
  <div
    className={styles['window']}
  >
    <h1>{window.parent.querySelector("#testEl").innerHTML}</h1>
      <Header name={name} initials={initialiseName()}/>
      <MessageHistory messages={messages}/>
      <CollapsedInputFooter spotifyURI={spotifyURI}/>
  </div>
)}

export default PhoneWindow
