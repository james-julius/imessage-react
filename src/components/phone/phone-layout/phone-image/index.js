import React from 'react'
import styles from './../style.module.css'

const PhoneImage = (props) => (
    <div className={styles["phone-image"]}>
        {props.children}
    </div>
);

export default PhoneImage
