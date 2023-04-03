import React from 'react';
import AudioPlayer from 'react-audio-player';

const PodcastEpisodePlayer = ({ episodeTitle, episodeDescription, audioUrl }) => {
  return (
    <div>
      <h1>{episodeTitle}</h1>
      <p>{episodeDescription}</p>
      <AudioPlayer src={audioUrl} controls />
    </div>
  );
};

export default PodcastEpisodePlayer;