
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import{faCircleUser,faLink,faLocationDot,faThumbsUp,} from"@fortawesome/free-solid-svg-icons";
    import{faThumbsDown}from"@fortawesome/free-regular-svg-icons";
    import { useQuery } from "@apollo/client";
    import { useRouter } from "next/router";
    import { useState } from "react";
    import BoardsDetailUI from "./BoardDetail.presenter";
    import  {FETCH_BOARD} from "./BoardDetail.queries";
    
   
    



export default function BoardsDetail(){

    const router=useRouter()
    console.log(router)
    
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

return(


<BoardsDetailUI

OnclickLike={OnclickLike}
OnclickDisLike={OnclickDisLike}
FontAwesomeIcon={FontAwesomeIcon}

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