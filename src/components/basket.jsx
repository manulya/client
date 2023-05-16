import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBasketItem, fetchBasket } from "../http/basketAPI";
import { fetchPicture } from "../http/pictureAPI";
import Header from "./header/header";
import { createOrder } from "../http/orderAPI";
import DOMPurify from 'dompurify';
import { CATALOG_ROUTE, ORDER_ROUTE } from "../utils/consts";

const Requests = () => {
  const userId = localStorage.getItem("userId")
  const basket = useSelector((state) => state.basket.basket);
  const pictures = useSelector((state) => state.picture.picture);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState([]);

  useEffect(() => {
    dispatch(fetchPicture());
    dispatch(fetchBasket(userId));
  }, [dispatch, userId]);


  const handleDelete = (id) => {
    dispatch(deleteBasketItem(id));
  };
  const handleOrder = (pictureid,index) => {
    try {
      const userid=userId
      const Address = DOMPurify.sanitize(address[index]);
      console.log(Address)
      dispatch(createOrder(userid, pictureid, Address));
      setAddress(prevState => {
        const updateAddress = [...prevState];
        updateAddress[index] = Address;
  return updateAddress;
      });
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <Header/>
      <SendedButton onClick={() => navigate(ORDER_ROUTE)}>
        История заказов
      </SendedButton>
      {basket.length === 0 ? (
        <EmptyContainer>
          <Empty>Вы ещё не добавили ни одной картины в корзину</Empty>
          <SendedButton onClick={() => navigate(ORDER_ROUTE)}>
          История заказов
          </SendedButton>
        </EmptyContainer>
      ) : (
        <RequestsContainer>
          <RequestsHeader>Эти картины вы добавили в корзину</RequestsHeader>
          <JobsContainer>
            {basket.map((basketItem, index) => {
              const picture = pictures.find((picture) => picture.id == basketItem.pictureid);
             
              return (
                <VacancyContainer key={index}>
                  <JobTitle>{picture.name}</JobTitle>

                  <img src={process.env.REACT_APP_API_URL + picture.img} alt={picture.name} width="200" height="200" />
                  <MessageForm>
                    <Message
                      placeholder="Ваш адрес"
                      value={address[index]}
                      onChange={(event) => {
                        const updateAddress = [...address];
                        updateAddress[index] = event.target.value;
                        setAddress(updateAddress);
                      }}

                    ></Message>
                  </MessageForm>
                  
                  <Button onClick={() =>
                     handleOrder(basketItem.pictureid, index)}
                     >
                    Заказать картину
                  </Button>
                  <Button onClick={() => handleDelete(basketItem.id)}>
                    Удалить из корзины
                  </Button>
                </VacancyContainer>
              );
            })}
          </JobsContainer>
        </RequestsContainer>
      )}
    </>
  );
};

export default Requests;
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
  height: 350px;
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

const Img = styled.img`
  
`;
const SendedButton = styled.button`
  position: absolute;
  top: -10%;
  right: 1%;
  background-image: linear-gradient(to left, #15b5af, #2e1fa2);
  color: #f9dfdf;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10%;
  :hover {
    color: #f2eefa;
  }
`;
const EmptyContainer = styled(JobsContainer)``;
const MessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const Message = styled.input`
  background-color: #ffffff;
  border: 1px solid #a1a1a1;
  border-radius: 10px;
`;