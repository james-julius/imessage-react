import React from 'react'
import styles from './style.module.css'
// import InputBar from "../input-bar";
// import HomeBar from "../home-bar";
import SpotifyBar from "../spotify-bar"

const CollapsedInputFooter = ({spotifyURI}) => (
  <div className={styles['input-view']}>
    {/* <InputBar/> */}
    {/* <HomeBar/> */}
    <SpotifyBar spotifyURI={spotifyURI}/>
  </div>
);

export default CollapsedInputFooter
