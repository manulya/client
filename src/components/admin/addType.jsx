import React, { useState } from 'react';
import styled from 'styled-components';
import {createType} from '../../http/typeAPI'

const AddType = () => {
  const [name, setName] = useState("");
  
  const clickType = async (event) => {
    try {
      event.preventDefault();
      
      let data = await createType(name);
      setName("");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <BrandForm onSubmit={clickType}>
        <BrandInput
          type="text"
          placeholder="Введите тип картины"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <BrandButton type="submit">Добавить тип</BrandButton>
      </BrandForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const BrandForm = styled.form`
  background: #333 ;
  padding: 10px;
  border-radius: 15px;
`;

const BrandInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const BrandButton = styled.button`
  background-color: #19307a;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: 0px;
  cursor: pointer;
`;

export default AddType;
