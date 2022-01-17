import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div style={{
      overflow: 'hidden',
      paddingBottom: '56.25%',
      position: 'relative',
      borderRadius: 20,
      marginTop: 10
  }}>
    <iframe
      width="600"
      height="320"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          position: 'absolute'
      }}
    />
  </div>
);

export default YoutubeEmbed;