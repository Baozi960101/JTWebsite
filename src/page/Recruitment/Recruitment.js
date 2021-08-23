import React from "react";
import styled from "styled-components";
import recruitment01 from "../../images/recruitment1.gif";
import recruitment02 from "../../images/recruitment2.jpg";
import tap from "../../images/tap.svg";

const RecruitmentBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

const RecruitmentText = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fbf8f3;
  position: relative;
`;

const RecruitmentTextImg = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 40%;
  bottom: 20%;

  @media screen and (max-width: 500px) {
    right: 10%;
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    right: 30%;
  }
`;

const RecruitmentTextTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-top: 60px;
  box-sizing: border-box;

  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;
const RecruitmentTextTitleHref = styled.a`
  text-decoration: none;
  margin: 20px auto 0 auto;
  font-size: 30px;
  color: blue;
`;

export default function Recruitment() {
  return (
    <>
      <RecruitmentBox src={recruitment01} />
      <RecruitmentBox src={recruitment02} />
      <RecruitmentText>
        <RecruitmentTextImg src={tap} />
        <RecruitmentTextTitle>請前往以下投遞履歷</RecruitmentTextTitle>
        <div style={{ width: "100%", display: "flex" }}>
          <RecruitmentTextTitleHref
            target="_blank"
            href="https://www.1111.com.tw/corp/73215988/"
          >
            1111
          </RecruitmentTextTitleHref>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <RecruitmentTextTitleHref
            target="_blank"
            href="https://www.518.com.tw/company-2JDA6w.html"
          >
            518
          </RecruitmentTextTitleHref>
        </div>
      </RecruitmentText>
    </>
  );
}
