import React, { useState } from 'react'
import styled from 'styled-components'
import {Checkbox} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

  //검색 수행 함수
  //대학
  //과  
  //이수구분 
  //요일  
  //시간  
  //기교
  //전공 -> 학년
  //심교 -> 교양 구분

function ConditionBar() {

  const [cond, setCond] = useState({
    colleague : "",
    major : "",
    classify : "",
    days : [],
    grade : [],
    simgyo : [],
  })

  const handleChange = (e : SelectChangeEvent)=>{
    setCond({...cond , colleague:e.target.value})
  }

  return (
    <Container>

      
    </Container>
  )
}

export default ConditionBar;


const Container = styled.div`
  max-width : 962px;
  margin: 0 auto;
  position :relative;
  height : 18vh;
  padding : 20px 20px;
  margin-bottom : 16px;

  border : 1px solid #036B3F;
  border-radius : 3px;
  box-shadow : 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  background-color :#fff;
`;
const Label = styled.p`
  font-size : 14px;
  color : #036B3f;
  border-bottom : 1px solid #B4ABAB;
  padding-bottom : 2px;
`;
const ConBox = styled.div`
  display : inline-block;
`;
