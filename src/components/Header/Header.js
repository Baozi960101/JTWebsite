import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as downArrow } from "../../images/downArrow.svg";
import jianTongLogo from "../../images/jianTongLogo.png";
import upArrow from "../../images/upArrow.svg";
import { Link } from "react-router-dom";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 120px 20px 150px;
  width: 100%;
  height: 100px;

  font-weight: 600;
  box-sizing: border-box;
  background-color: white;
`;

const HeaderMainBox = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const HeaderLogo = styled.img`
  width: 55px;
  height: 50px;
`;

const HeaderMainTitleBox = styled.div`
  width: 175px;
  height: 100%;
`;

const HeaderMainTitle = styled.div`
  display: flex;
  align-items: center;
  height: 60%;
  padding-left: 13px;
  font-size: 20px;
`;

const HeaderMainSubTitle = styled.div`
  height: 40%;
  padding-left: 13px;
  font-size: 14px;
  color: gray;
`;

const HeaderSubBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 100%;
  font-size: 20px;
  font-weight: 600;
`;
const HeaderSubTitle = styled(Link)`
  position: relative;
  cursor: pointer;
  color: black;
  text-decoration: none;

  :hover {
    color: red;
    fill: red;
  }
`;

const HeaderDown = styled.div`
  width: 100%;
  height: auto;
  max-height: 0px;
  overflow: hidden;
  position: absolute;
  transition: max-height 0.3s ease-in-out;
  z-index: 1;

  ${(props) => props.$move && `max-height:400px`}
`;

const HeaderDownTitleDiv = styled.div`
  padding-left: 5px;
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  background-color: white;
  padding-top: 10px;
`;

const HeaderDownTitle = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    color: red;
  }
`;

const TopBottom = styled.img`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 4;
`;

const HeaderDownTitleBox = ({ to, text }) => {
  return (
    <HeaderDownTitleDiv>
      <HeaderDownTitle to={to}>{text}</HeaderDownTitle>
    </HeaderDownTitleDiv>
  );
};

const HeaderDownArrow = styled(downArrow)`
  margin-left: 8px;
  padding-top: 3px;
  width: 23px;
  height: 23px;
`;

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [topBottomArise, setTopBottomArise] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      ScrollFunction();
    };
  }, []);

  function ScrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setTopBottomArise(true);
    } else {
      setTopBottomArise(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function dropDownOn() {
    setDropDown(true);
  }

  function dropDownOff() {
    setDropDown(false);
  }

  return (
    <>
      <HeaderBox>
        <HeaderMainBox to="/">
          <HeaderLogo src={jianTongLogo} />
          <HeaderMainTitleBox>
            <HeaderMainTitle>整合數位媒體傳播</HeaderMainTitle>
            <HeaderMainSubTitle>建通股份有限公司</HeaderMainSubTitle>
          </HeaderMainTitleBox>
        </HeaderMainBox>
        <HeaderSubBox>
          <HeaderSubTitle onMouseOver={dropDownOn} onMouseOut={dropDownOff}>
            <div style={{ display: "flex" }}>
              產品介紹
              <HeaderDownArrow src={downArrow} />
            </div>
            <HeaderDown $move={dropDown}>
              <HeaderDownTitleBox to="/argus" text="Argus" />
              <HeaderDownTitleBox to="/venus" text="Venus" />
              <HeaderDownTitleBox to="/mars" text="Mars" />
              <HeaderDownTitleBox to="/z-max" text="Z-Max" />
            </HeaderDown>
          </HeaderSubTitle>
          <HeaderSubTitle to="/resultssharing">成果分享</HeaderSubTitle>
          <HeaderSubTitle to="/partners">合作廠商</HeaderSubTitle>
          <HeaderSubTitle to="/recruitment">人才招聘</HeaderSubTitle>
          <HeaderSubTitle to="/Contact">聯絡我們</HeaderSubTitle>
        </HeaderSubBox>
      </HeaderBox>
      {topBottomArise && <TopBottom onClick={topFunction} src={upArrow} />}
    </>
  );
}
