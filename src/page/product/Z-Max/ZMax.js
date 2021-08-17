import React from "react";
import styled from "styled-components";
import ZMax01 from "../../../images/ZMax1.gif";
import ZMax02 from "../../../images/ZMax2.gif";
import ZMax03 from "../../../images/ZMax3.png";

const ZmaxBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function ZMax() {
  return (
    <>
      <ZmaxBox src={ZMax01} />
      <ZmaxBox src={ZMax02} />
      <ZmaxBox src={ZMax03} />
    </>
  );
}
