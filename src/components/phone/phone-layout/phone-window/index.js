import React from 'react'
import styles from '../style.module.css'
import Header from "../../header";
import CollapsedInputFooter from "../../footer/collapsed-input-footer";
import MessageHistory from "../../messages/message-history";

const PhoneWindow = () => {
  let spotifyURI = "https://open.spotify.com/track/3PFnF7lmHOxoYGXhxUkzCE?si=Kjoy_nseQ_2-OxGTRQvTag";
  let messages = [
    {
      isArtist: true,
      text: `How's isolation been for you?`,
    },
    {
      isArtist: false,
      text: `Not too bad thanks`,
    },
    {
      isArtist: true,
      text: `Have you been making lots of music? `,
    },
    {
      isArtist: false,
      text: `Oh yeah`,
    },
  ];
  let name = 'James Julius';
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
