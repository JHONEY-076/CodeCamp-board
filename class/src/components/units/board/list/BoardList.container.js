import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardsListUI from "./BoardList.presenter"


export default function BoardsList(){

    
    const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);


const onClickMoveToBoardNew =()=>{

router.push("/boards/new")
}

const onClickMoveToBoardDetail=(event)=>{
    router.push(`/boards/${event.target.id}`);
};








    return(
         <BoardsListUI
         data={data}
         onClickMoveToBoardNew={onClickMoveToBoardNew}
         onClickMoveToBoardDetail={onClickMoveToBoardDetail}
         />
    )
}