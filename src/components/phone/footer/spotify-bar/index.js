import React from 'react'

export default function SpotifyBar({
  trackURI = "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3",
}) {
  return (
    <iframe
      title="spotify-player"
      src={trackURI}
      width="100%"
      height="100"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}