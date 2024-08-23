import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsWriteUI from "./BoardWrite.presenter";
import{CREATE_BOARD} from './BoardWrite.queries'
import { faL } from "@fortawesome/free-solid-svg-icons";





export default function BoardsWrite(){

 //state 변수 저장
 const [writer, setWriter] = useState("");
 const [password, setPassword] = useState("");
 const [title, setTitle] = useState("");
 const [contents, setContent] = useState("");
//  const[address,setAddress]=useState("");
//  const[youtube,setYoutube]=useState("");
 const[picture1,setPicture1]=useState("+");
 const[picture2,setPicture2]=useState("+");
 const[picture3,setPicture3]=useState("+");

const[isActive,setisActive]=useState(false);




// 에러 메세지를 나타내는 state 변수 저장 
 const [writerError, setWriterError] = useState("");
 const [passwordError, setPasswordError] = useState("");
 const [titleError, setTitleError] = useState("");
 const [contentError, setContentError] = useState("");
//  const[addressError,setAddressError]=useState("");
//  const[youtubeError,setYoutubeError]=useState("");

// useMutation  
const [createBoard] = useMutation(CREATE_BOARD)


//useRouter
const router=useRouter()




 // 해당 칸에 생성된 값이 주어졌다면 해당 변수를 초기화 시켜주는 곳 
 const onChangeWriter = (event) => {
   setWriter(event.target.value);

   if(event.target.value&&password&&title&&contents){
    setisActive(true);


   }


   if (event.target.value !=="") {
     setWriterError("");
   }
 };

 const onChangePassword = (event) => {
   setPassword(event.target.value);

   if(writer&&event.target.value&&title&&contents){
    setisActive(true)


   }

   if (event.target.value !=="") {
     setPasswordError("");
   }
 };

 const onChangeTitle = (event) => {
   setTitle(event.target.value);

   if(writer&&password&&event.target.value&&contents){
    setisActive(true)


   }

   if (event.target.value !=="") {
     setTitleError("");
   }
 };
 const onChangeContent = (event) => {
   setContent(event.target.value);

   if(writer&&password&&title&&event.target.value){
    setisActive(true)


   }

   if (event.target.value !=="") {
     setContentError("");
   }
 };

//  const onChangeAddress=(event)=>{
//    setAddress(event.target.value);
//    if(event.target.value!==""){
//      setAddressError("");

//    }
//  };

// const onChangeYoutube=(event)=>{
//  setYoutube(event.target.value);
//  if(event.target.value!==""){
//    setYoutubeError("");
//  }
// }


const onChangePicture1=()=>{
setPicture1("업로드 완료")

}
const onChangePicture2=()=>{
 setPicture2("업로드 완료")
 
 }

 const onChangePicture3=()=>{
   setPicture3("업로드 완료")
   
   }


 // 해당 인풋창에 생성된 값이 주어지지 않았으면 setState 함수를 통해 에러 메세지를 전달하는 곳
 const onClickSubmit = async() => {

   

   if (!writer) {
     setWriterError("작성자를 입력해주세요.");
   }
   if (!password) {
     setPasswordError("비밀번호를 입력해주세요.");
   }
   if (!title) {
     setTitleError("제목을 입력해주세요.");
   }
   if (!contents) {
     setContentError("내용을 입력해주세요.");
   }
//    if(!address){
//      setAddressError("주소를 입력해주세요");
//    }
//    if(!youtube){
//      setYoutubeError("유튜브 주소를 다시 입력해주세요");
//    }

   try{
   if (writer && password && title && contents) {
     const result = await createBoard({
       variables: {
         createBoardInput: {
           writer: writer,
           password: password,
           title: title,
           contents: contents
         }
       }
     })
     console.log(result)
     console.log(result.data.createBoard._id)
     router.push(`/boards/${result.data.createBoard._id}`)
   }

 }catch(error){
   alert(error.message)
 }
 };

return(

<BoardsWriteUI 

onChangeWriter={onChangeWriter}
onChangePassword={onChangePassword}
onChangeTitle={onChangeTitle}
onChangeContent={onChangeContent}
onClickSubmit={onClickSubmit}
onChangePicture1={onChangePicture1}
onChangePicture2={onChangePicture2}
onChangePicture3={onChangePicture3}




writerError={writerError}
passwordError={passwordError}
titleError={titleError}
contentError={contentError}
picture1={picture1}
picture2={picture2}
picture3={picture3}
isActive={isActive}



/>



)


}