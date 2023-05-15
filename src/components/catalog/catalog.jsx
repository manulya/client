import React, { useEffect, useState } from "react";
//import Search_main from "./search_main/search_main";
import styled from "styled-components";
import Picture from "../Picture";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/header";
import { fetchPicture, getAllPictures } from "../../http/pictureAPI";
import { fetchBrands } from "../../http/brandAPI";
import { fetchTypes } from "../../http/typeAPI";


const Catalog = () => {
  const pictures = useSelector((state) => state.picture.picture);
  const found = useSelector((state) => state.picture.found);
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([]);
  const [sortPicture, setSortPicture] = useState("");
  const [pictureCount, setPictureCount] = useState(0);

  const handleSearch = (search,sort) => {
    setSearchResult(search);
    setSortPicture(sort);
  };

  useEffect(() => {
    setPictureCount(pictures.length)
    //dispatch(fetchPicture(searchResult[0], searchResult[1], searchResult[2], sortPicture));
    dispatch(fetchPicture());
    dispatch(fetchBrands())
    dispatch(fetchTypes())
  }, [
    dispatch
  ]);
  
  return (
    <Container>
      <Header />

      {!found ? (
        <Nothing>Ничего не найдено :(</Nothing>
      ) : (
        <VacanciesContainer>
          {pictures.map((picture, index) => {
            return <Picture key={index} picture={picture} />;
          })}
        </VacanciesContainer>
      )}
    </Container>
  );
};

export default Catalog;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 0.8fr 2fr;
  min-height: 120vh;
`;
const Nothing = styled.h1`
  align-self: center;
  justify-self: center;
`;

const VacanciesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 50px;
  justify-items: center;
  margin-top: 15%;
`;
const SearchContainer = styled.div`
  margin-top: -100px;
`;
