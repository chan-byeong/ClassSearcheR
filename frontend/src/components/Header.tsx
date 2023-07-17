import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Nav>
        <p>MENU</p>
        <p>PROFILE</p>
      </Nav>  
    </Container>

  )
}

export default Header

const Container = styled.div`
  max-width : 1280px;
  margin : 0 auto;
  height : 6vh;
`;

const Nav = styled.div`
  position : fixed;
  top : 0;
  width:1280px;
  margin-top : 40px;
  border-bottom : 1px solid #036B3F;

  display : flex;

  p{
    &: first-child {      
      margin-right : auto;
    }
    &: last-child {
      margin-left : auto;
    }
  }

`;