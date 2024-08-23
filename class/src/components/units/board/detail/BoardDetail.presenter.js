import{
    Wrapper,
    Name,
    ProfileWrapper,
    Date,
    Profile,
    Title,
    Content,
    Body,
    Button,
    CardWrapper,
    ButtonWrapper,
    IconWrapper,
    GoodButtonWrapper,
    LikeWrapper,
    GoodButton,
    }from "./BoardDetail.styles"



export default function BoardsDetailUI(props){


return(
<Wrapper>
     <CardWrapper>   
    <ProfileWrapper>
        <props.FontAwesomeIcon icon={props.faCircleUser} size="3x"/>
        <Profile>
        <Name>{props.data?.fetchBoard?.writer}</Name>
        <Date>{props.data?.fetchBoard?.createdAt}</Date>
        </Profile>
        <IconWrapper>
        <props.FontAwesomeIcon icon={props.faLink} size="2x"/>
        <props.FontAwesomeIcon icon={props.faLocationDot} size="2x"/>

        </IconWrapper>
    </ProfileWrapper>
    <Body>    
        
        <Title>{props.data?.fetchBoard?.title}</Title>
        <Content>{props.data?.fetchBoard?.contents}</Content>
    
    </Body>

    <LikeWrapper>
    <GoodButtonWrapper>
    <props.FontAwesomeIcon icon={props.faThumbsUp} size="3x" onClick={props.OnclickLike}/>
    <GoodButton>{props.like}</GoodButton>
    </GoodButtonWrapper>

    <GoodButtonWrapper>
    <props.FontAwesomeIcon icon={props.faThumbsDown} size="3x" onClick={props.OnclickDisLike}/>
    <GoodButton>{props.Dislike}</GoodButton>
    </GoodButtonWrapper>
    </LikeWrapper>

    
    </CardWrapper>
     
     <ButtonWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
    </ButtonWrapper>

    </Wrapper>
    
    


)

}