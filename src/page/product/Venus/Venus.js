import React from "react";
import styled from "styled-components";
import Venus01 from "../../../images/Venus1.gif";
import Venus02 from "../../../images/Venus2.gif";
import Venus03 from "../../../images/Venus3.gif";
import Venus04 from "../../../images/Venus4.gif";
import Venus05 from "../../../images/Venus5.gif";
import Venus06 from "../../../images/Venus6.png";

const VenusBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function Venus() {
  return (
    <>
      <VenusBox src={Venus01} />
      <VenusBox src={Venus02} />
      <VenusBox src={Venus03} />
      <VenusBox src={Venus04} />
      <VenusBox src={Venus05} />
      <VenusBox src={Venus06} />
    </>
  );
}
