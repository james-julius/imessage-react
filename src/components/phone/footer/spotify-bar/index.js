import React from 'react'

export default function SpotifyBar({
  spotifyURI,
}) {

  function makeSpotifyLink(input) {
    if (input.includes('/track/')) {
    input = input.replace('/track/', '/embed/track/')
    }
    
    if (input.includes('/album/')) {
      input = input.replace("/album/", "/embed/album/");
    }

    for (let n = 2; n < input.length; n++) {
      let j = input[n - 2];
      let k = input[n - 1];
      let l = input[n];
      if (j === '?' && k === 's' && l === 'i') {
        input = input.substring(0, n - 2);
      }
    }
    return input;
  }

  return (
    <iframe
      title="spotify-player"
      src={makeSpotifyLink(spotifyURI)}
      width="100%"
      height="100"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}