import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPicture } from "../../http/pictureAPI";
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { fetchTypes } from '../../http/typeAPI';
import { fetchBrands } from '../../http/brandAPI';

export const AddPicture=()=> {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchTypes());
  }, []);
    const brands = useSelector((state) => state.brand.brand);
    console.log(brands)
    const types = useSelector((state) => state.type.type);
    const [name, setPictureName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [typeid, setTypeid] = useState("");
    const [typeName, setTypeName] = useState("Выберите тип картины");
    const [brandid, setBrandid] = useState("");
    const [brandName, setBrandName] = useState("Выберите бренд производителя");

    const clickPicture = async (event) => {
        try {
          event.preventDefault();
          let formData = new FormData();
          formData.append("name", name);
          formData.append("price", price);
          formData.append("img", img);
          formData.append("typeid", typeid);
          formData.append("brandid", brandid);
          let data = await createPicture(formData);
          setPictureName("");
          setPrice("");
          setImg("");
          setTypeid("Выберите тип картины");
          setBrandid("Выберите бренд производителя");
        } catch (error) {
          alert(error.response.data.message);
        }
      };

      return (
        <JobInputForm onSubmit={clickPicture} enctype="multipart/form-data">
              <JobTitle
                placeholder="Введите название"
                value={name}
                onChange={(event) => setPictureName(event.target.value)}
              ></JobTitle>
              <Description
                placeholder="Введите стоимость"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              ></Description>

<CompanyLogo
      placeholder="Выберите файл"
      type="file"
      name="img"
      onChange={(event) => setImg(event.target.files[0])}
    />
              <Dropdown>
                <Dropdown.Toggle>
                  {brandName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {brands.map((brand, index) => (
                    <Dropdown.Item
                    key={index} onClick={()=>{setBrandid(brand.id)
                    setBrandName(brand.name)}}
                    >
                      {brand.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
{/* ////////////////////////////////////////////////////// */}
              <Dropdown>
                <Dropdown.Toggle>
                  
                  {typeName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {types.map((type, index) => (
                    <Dropdown.Item
                    key={index} onClick={()=>{setTypeid(type.id)
                    setTypeName(type.name)}}
                    >
                      {type.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              
              <BrandButton type="submit">Добавить</BrandButton>
              
            
            </JobInputForm>
      )
    }
    const BrandButton = styled.button`
  background-color: #19307a;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: 0px;
  cursor: pointer;
`;
    const CompanyInputForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
  `;
  const CompanyNameInput = styled.input`
    margin: 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
  `;
  const CompanyDecriptionInput = styled(CompanyNameInput)``;
  const CompanyLogo = styled.input`
    margin: 20px 0px 0px 115px;
  `;
  
  const CompanyButton = styled.button`
    margin-top: 30px;
    background-color: green;
    background-image: linear-gradient(to bottom, #9c27b0, #7b1fa2);
    color: white;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    margin-right: 0.5rem;
    :hover {
      background-color: green;
    }
  `;
  const JobInputForm = styled(CompanyInputForm)`
  margin-top: 30px;
  width: 300px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
`;
  
 
  const JobTitle = styled(CompanyNameInput)``;
  const Description = styled(CompanyNameInput)``;
  const Location = styled(CompanyNameInput)``;
  const JobButton = styled(CompanyButton)``;

   
