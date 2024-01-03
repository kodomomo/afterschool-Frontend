import { styled } from "styled-components";
import AfterSchoolCourseRegistrationDetailList from "./AfterSchoolCourseRegistrationDetailList";
import Header from "../header";
import { ListImg } from "../../assets";

const AfterSchoolCourseRegistrationDetail = () => {
  return(
    <>
      <Header/>
      <Container>
        <TitleSection>
          <img src={ListImg} alt="listImg" />
          <Title>방과후 수강 신청 내역</Title>
        </TitleSection>
        <>
          <ListHeader>
            <p>순번</p> 
            <p>과정</p>
            <p>운영기간</p>
            <p>신청대상</p>
            <p>강좌수</p>
            <p>신청시간</p>
          </ListHeader>
          <AfterSchoolCourseRegistrationDetailList />
        </>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0 7%;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #0D0D0D;
  height: 60px;
  padding: 0 0 0 40px;

`;

const Title = styled.div`
  color: White;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  margin-left: 10px;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  align-items: center;
  background: #F1F1F1;
  height: 66px;
  p {
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin-left: 35px;
  }
  margin-top: 25px;
`;

export default AfterSchoolCourseRegistrationDetail;