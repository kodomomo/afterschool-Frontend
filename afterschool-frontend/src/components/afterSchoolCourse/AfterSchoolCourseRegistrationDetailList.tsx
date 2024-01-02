import { styled } from "styled-components";

const AfterSchoolCourseRegistrationDetailList = () => {
  const RegistrationDetailList = [
    {
      num: 1,
      title: "진로체험활동",
      date: "11-20 09:00 ~ 12-03 23:59",
      target: "1~3학년",
      classNumber: "18개",
      time: "23-12-27 8:33",
    },
    {
      num: 2,
      title: "진로체험활동",
      date: "11-20 09:00 ~ 12-03 23:59",
      target: "1~3학년",
      classNumber: "18개",
      time: "23-12-27 8:33",
    },
    {
      num: 3,
      title: "진로체험활동",
      date: "11-20 09:00 ~ 12-03 23:59",
      target: "1~3학년",
      classNumber: "18개",
      time: "23-12-27 8:33",
    },
  ];

  return (
    <>
      <RegistrationList>
        {RegistrationDetailList.map(
          ({ num, title, date, target, classNumber, time }) => (
            <List>
              <p>{num}</p>
              <p>{title}</p>
              <p>{date}</p>
              <p>{target}</p>
              <p>{classNumber}</p>
              <p>{time}</p>
            </List>
          )
        )}
      </RegistrationList>
    </>
  );
};

const RegistrationList = styled.div``;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr; /* justify-content: space- */
  align-items: center;
  height: 69px;
  border-bottom: 1px solid #d2d2d2;
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-left: 40px;
  }
`;

export default AfterSchoolCourseRegistrationDetailList;
