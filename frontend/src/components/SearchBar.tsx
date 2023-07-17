import React,{useState} from 'react'
import styled from 'styled-components';


function SearchBar() {

  const [searchWord, setsearchWord] = useState("");

  return (
    <SearchWrapper>
       <form action='url' method='get'>
          <SearchInput 
          placeholder='검색어를 입력하세요'
          onChange={(e)=>{
            setsearchWord(e.target.value)
            console.log(typeof searchWord)
          }}
          />
        </form>
    </SearchWrapper>
  )
}

export default SearchBar

const SearchWrapper = styled.div`
  max-width : 1280px;
  margin: 0 auto;
  position :relative;
  height : 50px;
  padding : 30px 0 20px;
`;
 
const SearchInput = styled.input`
position : absolute;
left : 50%;
transform: translateX(-50%);

width : 962px;
height : 30px;
border : 1px solid #036B3F;
border-radius : 10px;
background-color : #fff;
box-shadow : 0px 4px 4px 0px rgba(0,0,0,.25);
padding : 12px 20px;

&:hover{
  background-color : #f2f2f2;
}

&:active {
  text-decoration: none;
  border : 1.5px solid #036B3F;
}

`;