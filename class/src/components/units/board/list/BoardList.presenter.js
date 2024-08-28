import *as S from "./BoardList.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function BoardsListUI(){


return (
<S.Wrapper>
   
<S.BestWrapper>
    <S.BestTitle>베스트 게시글</S.BestTitle>

<S.BestBoardsWrapper>
    sda
</S.BestBoardsWrapper>
<S.BestBoardsWrapper>
adas
</S.BestBoardsWrapper>
<S.BestBoardsWrapper>
ada
</S.BestBoardsWrapper>
<S.BestBoardsWrapper>
dada
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
    {}



</S.listWrapper>

<S.Footer>

  
<S.Submitpage> ✏️ 게시글 등록하기</S.Submitpage>



</S.Footer>


</S.Wrapper>




)


}