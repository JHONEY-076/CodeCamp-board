import styled  from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faUser} from"@fortawesome/free-solid-svg-icons";


export const Wrapper=styled.div`
 width: 1200px;
  margin: 100px;

`
export const CardWrapper=styled.div`
 border: 1px solid black;
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




export const Name=styled.div`
width: 200px;
height: 20px;
font-size:20px;
padding-left:10px
`

export const ProfileWrapper=styled.div`
width:100%;
display:flex;
flex-direction:row;
border-bottom: solid 1px black;
padding-bottom:20px

`
export const IconWrapper=styled.div`

width:100%;
height:50px;
display:flex;
flex-direction:row;
justify-content:space-evenly;
padding-left:600px;


`

export const Profile=styled.div`
width:200px;
height:50px;
display:flex;
flex-direction:column;
padding-left:10px;

`


export const Date=styled.span`
width:200px;
height:200px;
padding-top:10px;
padding-left:10px;
font-size:15px;
color: gray;
`

export const Title=styled.div`
width:100%;
height:50px;
font-size:30px;
 padding-top:50px;
 

`

export const Content=styled.div`
width:100%;
height:90%;
padding-top:30px;
`

export const Body=styled.div`
width:100%;
height:800px;
display:flex;
flex-direction:column;
justify-content: space-between;
margin-top:10px;

`

export const Button=styled.button`

width:179px;
height:45px;
border:solid 1px gray;
background-color:white;
cursor:pointer;
:hover{
background-color:yellow;
border-color:white;

}



`

export const ButtonWrapper=styled.div`
width:100%;
height:45px;
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-evenly;
padding-top:100px;


`

export const GoodButtonWrapper=styled.div`

width:100px;
height:45px;
display:flex;
flex-direction:column;
align-items:center;
`

export const GoodButton=styled.div`

width:100px;
height20px;
padding-top:10px;
padding-left:50px;

`

export const LikeWrapper=styled.div`

width:30%;
height:45px;
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-evenly;
padding-top:100px;
`