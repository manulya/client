import React from 'react';
import styled from 'styled-components';
import Header from '../header/header'
import AddType from './addType.jsx';
import AddBrand from './addBrand.jsx';
import {AddPicture} from './addPicture'
import backgroundImage from '../../img/adminbackground.svg';

export const Admin = () => {
  return (
    <>
    <Header/>
    <AdminContainer style={{backgroundImage: `url(${backgroundImage})`}}>
      <FormsContainer>
        <AddPicture/>
        <AddType />
        <AddBrand/>
      </FormsContainer>
    </AdminContainer>
    </>
  );
};

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 50px;
`;
