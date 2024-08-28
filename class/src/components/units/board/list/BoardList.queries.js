import {gql} from "@apollo/client"

const FETCHBOARDS=gql`
query fetchBoards($boardId:ID!){
     fetchBoards(boardId:$boardId){
     _id
     writer
     title
     createAt
     }
}

`