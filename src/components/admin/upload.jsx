import React, { useState } from "react";
import { createPicture } from "../../http/pictureAPI";
import { createBrand } from "../../http/brandAPI";

const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = async (event) => {
        const jsonData = event.target.result;
        const parsedData = JSON.parse(jsonData);

        if (Array.isArray(parsedData)) {
          for (let i = 0; i < parsedData.length; i++) {
            const pictureData = parsedData[i];
            let data = await createBrand(pictureData.name);
            
          }
        }
      };

      fileReader.readAsText(selectedFile);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Загрузить</button>
    </div>
  );
};

export default FileUploadButton;
