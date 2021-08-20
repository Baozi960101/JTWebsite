import React from "react";
import styled from "styled-components";
import recruitment01 from "../../images/recruitment1.gif";
import recruitment02 from "../../images/recruitment2.gif";
import recruitment03 from "../../images/recruitment3.png";

const RecruitmentBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function Recruitment() {
  return (
    <>
      <RecruitmentBox src={recruitment01} />
      <RecruitmentBox src={recruitment02} />
      <RecruitmentBox src={recruitment03} />
    </>
  );
}
