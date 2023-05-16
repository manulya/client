import React from 'react';
import styled from 'styled-components';

const DownloadButtonAll = ({ picture }) => {
  const handleClick = () => {
    const docContent = JSON.stringify(picture); 
    const downloadLink = document.createElement("a");
    downloadLink.href = "data:application/json;charset=utf-8," + encodeURIComponent(docContent);
    downloadLink.download = `pictures.json`;
    downloadLink.click();
  };

  return (
    <Button onClick={handleClick}>JSON</Button>
  );
};

export default DownloadButtonAll;


const Button = styled.button`
  background-color: #47c329;
  background-image: linear-gradient(to bottom, #66e347, #3ad314);
  color: white;
  margin-left:45%;
  width:120px;
  height: 50px;
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
