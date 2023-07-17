import React, { useState } from 'react'
import styled from 'styled-components';

import ConditionBar from '../components/ConditionBar'; 
import ResultBlock from '../components/ResultBlock';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const MainPage = () => {


  

  return (
    <Container>
      <Header/>
      <SearchBar/>
      <ConditionBar />
      {/* 검색어 넘겨주기 */}
      <ResultBlock /> 
    </Container>
  );
}

export default MainPage;

export const Container = styled.section`
  min-width : 1340px;
  margin: 0 auto;
  height : 1000px;
  background-color :#D9D9D9;
`;


