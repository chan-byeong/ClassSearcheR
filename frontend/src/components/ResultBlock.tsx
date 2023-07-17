import React from 'react'
import styled from 'styled-components'

//props : {searchWord : string | undefined}

function ResultBlock() {
  return (
    <Container>
      <ResBox/>
    </Container>
  )
}

export default ResultBlock;

const Container = styled.div`
  max-width : 962px;
  margin : 0 auto;
  position : relative;
  height : 50vh;
  padding : 20px 20px;
  
  display :flex;
  flex-direction : column;
  align-items : center;

  border : 1px solid #036B3F;
  border-radius : 3px;

  background-color :#fff;
`;

const ResBox = styled.div`
  width : 90%;
  height : 45px;
  border : 1px solid #036B3F;
  border-radius : 3px;
  box-shadow : 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;