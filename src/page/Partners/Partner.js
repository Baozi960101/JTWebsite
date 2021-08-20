import React from "react";
import styled from "styled-components";
import partner01 from "../../images/partner1.png";
import partner02 from "../../images/partner2.png";
import partner03 from "../../images/partner3.png";

const PartnerBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function Partner() {
  return (
    <>
      <PartnerBox src={partner01} />
      <PartnerBox src={partner02} />
      <PartnerBox src={partner03} />
    </>
  );
}
