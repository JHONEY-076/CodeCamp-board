
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import{faCircleUser,faLink,faLocationDot,faThumbsUp,} from"@fortawesome/free-solid-svg-icons";
    import{faThumbsDown}from"@fortawesome/free-regular-svg-icons";
    import { useMutation, useQuery } from "@apollo/client";
    import { useRouter } from "next/router";
    import { useState } from "react";
    import BoardsDetailUI from "./BoardDetail.presenter";
    import  {DELETE_BOARD, FETCH_BOARD} from "./BoardDetail.queries";
    
   
    



export default function BoardsDetail(){

    const router=useRouter()
    const[deleteBoard]=useMutation(DELETE_BOARD)



    const{data}=useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.boardId},
    });
    
    console.log(data)
    
    const[like,setlike]=useState(0)
    const[Dislike,setDislike]=useState(0)



     //좋아요 아이콘 클릭시 증가하는 함수
    const OnclickLike=()=>{

    setlike(like+1);

    }
    //싫어요 아이콘 클릭시 증가하는 함수
    const OnclickDisLike=()=>{
    setDislike(Dislike+1);
    }

    const OnClickMoveToList=()=>{
        router.push("/boards")
    }

    const onClickDelete=(event)=>{
    deleteBoard({
        variables:{
            boardId:(event.target.id)
        }
    })
    alert("해당 게시물을 삭제합니다");
    
    router.push("/boards")
   
    }


return(


<BoardsDetailUI

OnclickLike={OnclickLike}
OnclickDisLike={OnclickDisLike}
FontAwesomeIcon={FontAwesomeIcon}
OnClickMoveToList={OnClickMoveToList}
onClickDelete={onClickDelete}

like={like}
Dislike={Dislike}
faCircleUser={faCircleUser}
faLink={faLink}
faLocationDot={faLocationDot}
faThumbsUp={faThumbsUp}
faThumbsDown={faThumbsDown}
data={data}

/>

)



}