import React from "react";
import styled from "styled-components";
import Mars01 from "../../../images/Mars1.png";
import Mars02 from "../../../images/Mars2.png";
import Mars03 from "../../../images/Mars3.png";
import Mars04 from "../../../images/Mars4.png";
import Mars05 from "../../../images/Mars5.png";
import Mars06 from "../../../images/Mars6.png";

const MarsBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function Mars() {
  return (
    <>
      <MarsBox src={Mars01} />
      <MarsBox src={Mars02} />
      <MarsBox src={Mars03} />
      <MarsBox src={Mars04} />
      <MarsBox src={Mars05} />
      <MarsBox src={Mars06} />
    </>
  );
}
