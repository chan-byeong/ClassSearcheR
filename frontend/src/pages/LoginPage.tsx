import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

import {useSelector , useDispatch} from 'react-redux'
import {setId , setPassword} from '../redux/slices/userSlice';

function LoginPage() {

  const dispatch = useDispatch();
  //const user  = useSelector( (state:any) => state.user )
  
  const requestLogin = (e : any) => {
    e.preventDefault();
    axios.get("endpoint")
      .then((res)=>{

      })
      .catch((err)=>{console.log(err)})
  }

  return (
    <div>
      <Container>
        <form
          onSubmit={requestLogin}
          style={{display : "flex" , flexDirection:"column", }}>

          <Input placeholder='id' 
          onChange={(e)=>dispatch(setId(e.target.value))}
          />
          <Input type='password' placeholder='password'
          onChange={(e)=>dispatch(setPassword(e.target.value))}
          />
          
          <Button type='submit'>로그인</Button>
        </form>
        <Signup href='/'>회원가입</Signup>
      </Container>

    </div>
  )
}

export default LoginPage;

const Container = styled.section`
  display : flex;
  flex-direction : column;
  max-width : 1200px;
  height : 100vh;
  justify-content : center;
  align-items : center;
`;

const Input = styled.input`
  width : 411px;
  height : 35px;
  border : 1px solid #d9d9d9;
  border-radius : 5px;
  margin-bottom : 15px;
  background-color : #d9d9d9;
  padding : 0 14px;
`;

const Button = styled.button`
  width : 440px;
  height : 38px;
  background-color : #036B3F;
  font-size : 20px;
  font-weight : 700;
  color : #FFFFFF;
  text-align : cetner;
  border : 1px solid #d9d9d9;
  border-radius : 5px;
  cursor : pointer;
`;

const Signup = styled.a`
  color : #B4ABAB;
  font-size : 13px;
  margin-top : 12px;
`;