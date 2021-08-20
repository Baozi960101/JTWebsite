import React from "react";
import styled from "styled-components";
import Contact1 from "../../images/contact1.png";

const ContactBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function Contact() {
  return (
    <>
      <ContactBox src={Contact1} />
    </>
  );
}
