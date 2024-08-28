import styled from "@emotion/styled";

export const Wrapper=styled.div`
 width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`

export const BestWrapper=styled.div`
width:100%;
height:350px;
border: 1px solid black;
display:flex;
flex-direction: row;
margin-bottom:50px;

`

export const BestBoardsWrapper=styled.div`
width:282px;
height:257px;
display:flex;
flex-direction:column
border: 1px solid black;
border-radius: 15px;
align-items:center;


`

export const BestTitle =styled.div`
width:208px;
height:42px;
font-weight:300;


`










export const SearchWrapper=styled.div`

width:100%;
height:60px;
display:flex;
flex-direction:row;

`
export const Searchbox=styled.input`
width:776px;
height:52px;
margin-right:30px;
padding-left:20px;
`

export const SearchDay=styled.input`
width:244px;
height:52px;
margin-right:20px;
padding-left:20px;
`

export const SearchButton= styled.button`
width:94px;
height:52px;
background-color:black;
color:white;
border-radius:15px;
`


export const listWrapper=styled.div`
width:100%;
height:662px;
border-bottom:1px solid black;
margin-bottom:30px;

`






export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer=styled.div`

width:100%;
height:52px;
display: flex;
flex-direction:row;

`


export const Submitpage=styled.button`

width:171px;
height:52px;
border-radius:15px;
border:1px solid black;
margin-left: 85%;
`

export const Page=styled.div`

width:128px;
height:24px;


`

export const FontAwesomeIcon=styled.div`
width: 24px;
height:24px;
padding-top:20px;
margin-right:10px;

`