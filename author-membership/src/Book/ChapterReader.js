import React, { useState } from "react";
import styled from "styled-components";

const ChapterContainer = styled.div`
  margin: 20px;
`;

const ChapterContent = styled.div`
  font-size: ${props => props.fontSize}px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

const ChapterReader = ({ chapterContent }) => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize - 1);
  };

  return (
    <ChapterContainer>
      <ChapterContent fontSize={fontSize}>{chapterContent}</ChapterContent>
      <Button onClick={increaseFontSize}>Increase Font Size</Button>
      <Button onClick={decreaseFontSize}>Decrease Font Size</Button>
      <Button>Bookmark</Button>
      <Button>Like</Button>
    </ChapterContainer>
  );
};

export default ChapterReader;