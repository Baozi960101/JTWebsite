import React from "react";
import styled from "styled-components";
import resultsSharing01 from "../../images/resultsSharing1.png";
import resultsSharing02 from "../../images/resultsSharing2.png";
import resultsSharing03 from "../../images/resultsSharing3.png";
import resultsSharing04 from "../../images/resultsSharing4.png";
import resultsSharing05 from "../../images/resultsSharing5.png";
import resultsSharing06 from "../../images/resultsSharing6.png";

const ResultsSharingBox = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
`;

export default function ResultsSharing() {
  return (
    <>
      <ResultsSharingBox src={resultsSharing01} />
      <ResultsSharingBox src={resultsSharing02} />
      <ResultsSharingBox src={resultsSharing03} />
      <ResultsSharingBox src={resultsSharing04} />
      <ResultsSharingBox src={resultsSharing05} />
      <ResultsSharingBox src={resultsSharing06} />
    </>
  );
}
