import React from 'react'
import styles from '../style.module.css'
import Header from "../../header";
import CollapsedInputFooter from "../../footer/collapsed-input-footer";
import MessageHistory from "../../messages/message-history";

const PhoneWindow = () => {
  let messages = ['hi']
  return (
  <div
    className={styles['window']}
  >
      <Header/>
      <MessageHistory messages={messages}/>
      <CollapsedInputFooter/>
  </div>
)}

export default PhoneWindow
