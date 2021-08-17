import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BottomBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 30px 90px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #7b7b7b;
`;

export default function Bottom() {
  return (
    <>
      <BottomBox>建通股份有限公司</BottomBox>
    </>
  );
}
