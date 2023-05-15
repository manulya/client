import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { fetchBrands } from "../http/brandAPI";
import { fetchTypes } from "../http/typeAPI";

const Picture = (props) => {
  const brands = useSelector((state) => state.brand.brand);
  const types = useSelector((state) => state.type.type);
  const picture = props.picture;
  const dispatch = useDispatch();

  const brand = brands.filter((brand) => brand.id === picture.brandid);
  const type = types.filter((type) => type.id === picture.typeid);

  if (!picture || picture.length === 0 || !type || type.length === 0 || !brand || brand.length === 0) {
    return <Spinner />;
  }

  return (
    <VacancyContainer>
      <img src={process.env.REACT_APP_API_URL + picture.img} alt={picture.name} width="200" height="200" />
      <CompanyName>{picture.name}</CompanyName>
      <div>{type[0].name}</div>
      <div>{brand[0].name}</div>
      <Salary>{picture.price}</Salary>
    </VacancyContainer>
  );
};

export default Picture;

const VacancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  background-size: cover;
  background-position: center;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  margin-top: 10px;
`;

const Salary = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 10px;
`;
