import styled from "styled-components";
import Header from "../header";
import { ListImg } from "../../assets";
import AfterSchoolCourseRegistrationList from "./AfterSchoolCourseRegistrationList";

const AfterSchoolCourseRegistration = () => {
  return(
    <>
    <Header />
      <Container>
        <TitleSection>
          <img src={ListImg} alt="listImg" />
          <Title>방과후 수강 신청하기</Title>
        </TitleSection>
        <TimerSection>
          <State>신청중</State>
          <div>
            <Timer>05 : 01 : 23</Timer>
          </div>
          <Subject>진로체험활동</Subject>
          <Time>11-20 09:00 ~ 12-03 23:59</Time>
        </TimerSection>
        <ButtonSection>
          <Button>신청하기</Button>
        </ButtonSection>
        <div>
          <ListTitle>
            <p>구분</p>
            <p>월요일</p>
          </ListTitle>
          <AfterSchoolCourseRegistrationList />
          <ListTitle>
            <p>구분</p>
            <p>수요일</p>
          </ListTitle>
          <AfterSchoolCourseRegistrationList />
        </div>
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
  margin-bottom: 25px;
`;

const Title = styled.div`
  color: White;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  margin-left: 10px;
`;

const TimerSection = styled.div`
  padding: 70px;
  margin-bottom: 31px;
  div {
    display: flex;
    justify-content: center;
  }
`;

const State = styled.div`
  display: flex;
  justify-content: center;
  color: #0029B8;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 100px;
  border-radius: 30px;
  border: 2px solid #002DCC;
  background: #FFF;
  color: #002DCC;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 110px;
`;

const Subject = styled.div` 
  display: flex;
  justify-content: center;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  color: #777;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: #0D0D0D;
  padding: 11px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ListTitle = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 3fr;
  align-items: center;
  height: 56px;
  background: #0D0D0D;
  padding: 0 200px;
  p {
    color: #FFF;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }
`;

export default AfterSchoolCourseRegistration;