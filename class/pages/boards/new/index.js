import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error,
} from "../../../styles/boardsNew";
import { useState } from "react";
import { useMutation,gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`



export default function BoardsNewPage() {

  //state 변수 저장
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");
  const[address,setAddress]=useState("");
  const[youtube,setYoutube]=useState("");
  const[picture1,setPicture1]=useState("+");
  const[picture2,setPicture2]=useState("+");
  const[picture3,setPicture3]=useState("+");


// 에러 메세지를 나타내는 state 변수 저장 
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const[addressError,setAddressError]=useState("");
  const[youtubeError,setYoutubeError]=useState("");

 // useMutation  
 const [createBoard] = useMutation(CREATE_BOARD)

  // 해당 칸에 생성된 값이 주어졌다면 해당 변수를 초기화 시켜주는 곳 
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !=="") {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !=="") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !=="") {
      setTitleError("");
    }
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value !=="") {
      setContentError("");
    }
  };

  const onChangeAddress=(event)=>{
    setAddress(event.target.value);
    if(event.target.value!==""){
      setAddressError("");

    }
  };

const onChangeYoutube=(event)=>{
  setYoutube(event.target.value);
  if(event.target.value!==""){
    setYoutubeError("");
  }
}


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
    if(!address){
      setAddressError("주소를 입력해주세요");
    }
    if(!youtube){
      setYoutubeError("유튜브 주소를 다시 입력해주세요");
    }


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
    }
  };


  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <Error>{contentError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" onChange={onChangeAddress}/>
          <Error>{addressError}</Error>
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." onChange={onChangeYoutube} />
        <Error>{youtubeError}</Error>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton onClick={onChangePicture1}> {picture1}</UploadButton>
        <UploadButton onClick={onChangePicture2}>{picture2}</UploadButton>
        <UploadButton onClick={onChangePicture3}>{picture3}</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
   
    </Wrapper>
  );


}