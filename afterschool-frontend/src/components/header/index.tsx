import styled from "styled-components";
import { Logo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <img onClick={() => {navigate("/main")}}
        src={Logo}
        alt="logo"
      />
      <Div><Text onClick={() => {navigate("/afterSchoolCourseRegistraionDetail")}}>수강 신청 내역</Text>
      <Name>권하은 님</Name></Div>
      
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  height: 60px;
  width: 100%;
  display: flex;
  padding: 10px 7%;
  align-items: center;
  img {
    cursor: pointer;
  }
  margin-bottom: 40px;
`;

const Text = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-right: 88px;
  font-family: Pretendard;

`;

const Name = styled.div`
  color: #666;
  font-size: 18px;
  font-weight: 500;
  font-family: Pretendard;
`;

const Div=styled.div`
margin-left: auto;
display: flex;

`

export default Header;
