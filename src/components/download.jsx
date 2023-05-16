import React from 'react';
import styled from 'styled-components';

const DownloadButton = ({ pictureData }) => {
  const handleClick = async () => {
    try {
      const imageUrl = process.env.REACT_APP_API_URL + pictureData.img;
      const response = await fetch(imageUrl);
      const imageBlob = await response.blob();

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(imageBlob);
      downloadLink.download = `${pictureData.name}.jpg`;
      downloadLink.click();

      // Освобождаем URL объекта после скачивания
      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button onClick={handleClick}>Скачать картину</Button>
  );
};

export default DownloadButton;


const Button = styled.button`
  background-color: #47c329;
  background-image: linear-gradient(to bottom, #66e347, #3ad314);
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
  :hover {
    background-color: #27b045;
    color: #f2eefa;
  }
`;
