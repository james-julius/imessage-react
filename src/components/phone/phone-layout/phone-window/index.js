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

  function getParamValue(paramName)
{
    let url = window.location.search.substring(1); //get rid of "?" in querystring
    let qArray = url.split('&'); //get key-value pairs
    for (let i = 0; i < qArray.length; i++) 
    {
        let pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName) 
            return pArr[1]; //return value
    }
}

  useEffect(() => {
    const dataObj = getParamValue('dataObj')
    setName(dataObj.name);
    setMessages(dataObj.messaages);
    setSpotifyURI(dataObj.spotifyURI)

  }, []);
  

  

  function initialiseName() {
    let splitName = name.split(' ');
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  }

  return (
  <div
    className={styles['window']}
  >
      <Header name={name} initials={initialiseName(name)}/>
      <MessageHistory messages={messages}/>
      <CollapsedInputFooter spotifyURI={spotifyURI}/>
  </div>
)}

export default PhoneWindow
