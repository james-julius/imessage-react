import React from 'react'
import PropTypes from 'prop-types'
import Message from "../message";
import styles from "./../style.module.css";

const MessageHistory = ({ messages }) => (
  <div className={styles["chat"]}>
    {messages.map((msg, idx) => (<Message key={idx} {...msg} />))}
  </div>
);

MessageHistory.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isArtist: PropTypes.bool,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  isTyping: PropTypes.bool
};

export default MessageHistory