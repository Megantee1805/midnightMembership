import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoPlayer = ({ url }) => {
  return (
    <Container>
      <PlayerWrapper>
        <StyledPlayer
          url={url}
          width='100%'
          height='100%'
          controls
        />
      </PlayerWrapper>
    </Container>
  );
};

export default VideoPlayer;
