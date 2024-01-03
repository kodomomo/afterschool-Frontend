import styled from "styled-components";

const AfterSchoolCourseRegistrationList = () => {
  const RegistrationList = [
    {
      category: "7, 8교시",
      subject: "배구반",
      teacher: "김현태 선생님",
      personnel: "(0/20)",
      explain: "- 방과후학교 프로그램",
    },
    {
      category: "7, 8교시",
      subject: "배구반",
      teacher: "김현태 선생님",
      personnel: "(0/20)",
      explain: "- 방과후학교 프로그램",
    },
    {
      category: "7, 8교시",
      subject: "배구반",
      teacher: "김현태 선생님",
      personnel: "(0/20)",
      explain: "- 방과후학교 프로그램",
    },
    {
      category: "7, 8교시",
      subject: "배구반",
      teacher: "김현태 선생님",
      personnel: "(0/20)",
      explain: "- 방과후학교 프로그램",
    },
    {
      category: "7, 8교시",
      subject: "배구반",
      teacher: "김현태 선생님",
      personnel: "(0/20)",
      explain: "- 방과후학교 프로그램",
    },
  ];

  return(
    <>
      <ListSection>
        {RegistrationList.map(
            ({ category, subject, teacher, personnel, explain}) => (
              <List>
                <p>{category}</p>
                <p>{subject}</p>
                <p>{teacher}</p>
                <p>{personnel}</p>
                <p>{explain}</p>
              </List>
            )
          )}
      </ListSection>
    </>
  );
};

const ListSection = styled.div`
  
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 0 200px;
  align-items: center;
  height: 97px;
  p {
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
  }
`;

export default AfterSchoolCourseRegistrationList;