import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { fetchBrands } from "../http/brandAPI";
import { fetchTypes } from "../http/typeAPI";
import DownloadButton from "./download";
import { createBasketItem } from "../http/basketAPI";
import { deletePicture, updatePicture } from "../http/pictureAPI";
import DOMPurify from 'dompurify';

const Picture = (props) => {
  const userid = localStorage.getItem("userId");
  const brands = useSelector((state) => state.brand.brand);
  const types = useSelector((state) => state.type.type);
  const picture = props.picture;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [writeMsg, setWriteMsg] = useState([]);
  const [sendMessage, setSendMessage] = useState([]);

  const brand = brands.filter((brand) => brand.id === picture.brandid);
  const type = types.filter((type) => type.id === picture.typeid);

  if (
    !picture ||
    picture.length === 0 ||
    !type ||
    type.length === 0 ||
    !brand ||
    brand.length === 0
  ) {
    return <Spinner />;
  }

  const handleApply = () => {
    try {
      dispatch(createBasketItem(userid, picture.id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSend = (job_id,index) => {
    const message=DOMPurify.sanitize(sendMessage[index])
dispatch(updatePicture(job_id,message))
setWriteMsg((prevWriteMsg) => ({ ...prevWriteMsg, [index]: false }));
  };
  const handleDelete = (id) => {
    dispatch(deletePicture(id));
  };

  return (
    <>
      {users.isAdmin ? (
        <VacancyContainer>
          <img
            src={process.env.REACT_APP_API_URL + picture.img}
            alt={picture.name}
            width="200"
            height="200"
          />
          <CompanyName>{picture.name}</CompanyName>
          <div>{type[0].name}</div>
          <div>{brand[0].name}</div>
          {writeMsg[picture.id]===true ? (
                    <MessageForm>
                      <MessageInput
                        placeholder="новая цена"
                        value={sendMessage[picture.id]}
                        onChange={(event) => {
                          const newMessage = { ...sendMessage };
                          newMessage[picture.id] = event.target.value;
                          setSendMessage(newMessage);
                        }}
                      ></MessageInput>
                      
                    </MessageForm>
                  ) : (
                    <Message onClick={() => {
                      setWriteMsg((prevWriteMsg) => ({ ...prevWriteMsg, [picture.id]: true }))
                    }}>
                      {picture.price}
                    </Message>
                  )}
          <JobButton onClick={() => handleSend(picture.id, picture.id)}>Редактировать</JobButton>
          <JobButton onClick={() => handleDelete(picture.id)}>
            Удалить
          </JobButton>
        </VacancyContainer>
      ) : (
        <VacancyContainer>
          <img
            src={process.env.REACT_APP_API_URL + picture.img}
            alt={picture.name}
            width="200"
            height="200"
          />
          <CompanyName>{picture.name}</CompanyName>
          <div>{type[0].name}</div>
          <div>{brand[0].name}</div>
          <Salary>{picture.price}</Salary>
          <JobButton onClick={handleApply}>Добавить в корзину</JobButton>
          <DownloadButton pictureData={picture} />
        </VacancyContainer>
      )}
    </>
  );
};

export default Picture;

const VacancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
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
const JobButton = styled.button`
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
