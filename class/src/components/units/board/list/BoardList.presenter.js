import *as S from "./BoardList.styles"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {getDate} from "../../../../commons/libraries/utils"
import picture1 from "../../../../../public/img.png"

export default function BoardsListUI(props){


return (
<S.Wrapper>
   
<S.BestWrapper>
    
   
    <S.BestBoardsWrapper>
    


    </S.BestBoardsWrapper>


</S.BestWrapper>

<S.SearchWrapper>
<S.FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
<S.Searchbox placeholder="제목을 검색해주세요."></S.Searchbox>
<S.SearchDay placeholder="YYY.MM.DD ~ YYYY.MM.DD"></S.SearchDay>
<S.SearchButton>검색하기</S.SearchButton>
</S.SearchWrapper>
<S.listWrapper>
    <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
    {props.data?.fetchBoards.map(el=>(
        
        <S.Row key={el._id}>
            <S.ColumnBasic>
                {String(el._id).slice(-4).toUpperCase()}  {/* id의 맨 뒤의 4개만 잘라서 전부 대문자로 바꿔줌 */}
            </S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
    ))}
</S.listWrapper>

<S.Footer>

<S.Submitpage onClick={props.onClickMoveToBoardNew}> ✏️ 게시글 등록하기</S.Submitpage>



</S.Footer>


</S.Wrapper>




)


}