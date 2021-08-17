import React from "react";
import styled from "styled-components";
import Argus01 from "../../../images/Argus1.png";
import Argus02 from "../../../images/Argus2.png";
import Argus03 from "../../../images/Argus3.png";
import Argus04 from "../../../images/Argus4.png";
import Argus05 from "../../../images/Argus5.png";

const ArgusBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function Argus() {
  return (
    <>
      <ArgusBox src={Argus01} />
      <ArgusBox src={Argus02} />
      <ArgusBox src={Argus03} />
      <ArgusBox src={Argus04} />
      <ArgusBox src={Argus05} />
    </>
  );
}
