import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../http/orderAPI";
import { fetchPicture } from "../http/pictureAPI";
import Header from "./header/header";

const Order = () => {
  const userid = localStorage.getItem("userId");
  const orders = useSelector((state) => state.basket.order);
  const pictures = useSelector((state) => state.picture.picture);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userid)
     dispatch(fetchPicture());
    dispatch(fetchOrders(userid));
  }, [dispatch, userid]);

  
  return (
    <>
      <Header/>
      {orders.length === 0 ? (
        <Empty>Вы ещё ничего не заказали</Empty>
      ) : (
        <RequestsContainer>
          <RequestsHeader>Ваши заказы</RequestsHeader>
          <JobsContainer>
            {orders.map((order, index) => {
              const picture = pictures.find((picture) => picture.id == order.pictureid);
              
              return (
                <VacancyContainer key={index}>
                  <JobTitle>{picture.name}</JobTitle>
                  <img src={process.env.REACT_APP_API_URL + picture.img} alt={picture.name} width="200" height="200" />
                  <City>{order.address}</City>
                  
                </VacancyContainer>
              );
            })}
          </JobsContainer>
        </RequestsContainer>
      )}
    </>
  );
};

export default Order;
const RequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestsHeader = styled.h2`
  margin-top: 5%;
  font-size: 24px;
  text-align: center;
`;
const Empty = styled(RequestsHeader)``;
const JobsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

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
    ),
    #f2f2f2;
  background-size: cover;
  background-position: center;
  padding: 30px;
  border-radius: 10px;
`;

const JobTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 5px;
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #333333;
`;
const JobButton = styled.button`
  background-color: #9c27b0;
  background-image: linear-gradient(to bottom, #9c27b0, #7b1fa2);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
  :hover {
    background-color: #9c27b0;
    color: #f2eefa;
  }
`;
const City = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
`;
const Message = styled(City)`
  cursor: pointer;
`;
const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const MessageInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #a1a1a1;
  border-radius: 10px;
`;
