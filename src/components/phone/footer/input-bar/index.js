import React from 'react'
import styles from './style.module.css'
import {IoIosMic} from "react-icons/io";
import PropTypes from "prop-types";

export default const InputBar = ({text, inputStyle}) => (
  <div className={styles['input-bar']}>
    <div className={styles['text-box']}>
      <span className={styles[inputStyle]}>
        {text}
      </span>
      <span className={styles['voice-icon']}>
        <IoIosMic/>
      </span>
    </div>
  </div>
);

InputBar.propTypes = {
  text: PropTypes.string
};