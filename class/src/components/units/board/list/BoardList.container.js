import { useQuery } from "@apollo/client"
import BoardsListUI from "./BoardList.presenter"


export default function BoardsList(){

    
    const {data}=useQuery(FETCHBOARDS)



    return(
         <BoardsListUI/>

    )
}