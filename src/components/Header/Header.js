import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as downArrow } from "../../images/downArrow.svg";
import jianTongLogo from "../../images/jianTongLogo.png";
import upArrow from "../../images/upArrow.svg";
import menu from "../../images/menu.svg";
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

  @media screen and (max-width: 599px) {
    align-items: center;
    padding: 0 30px 0 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    padding: 20px 30px;
  }
`;

const HeaderRwdMenuBottom = styled.img`
  display: none;
  width: 40px;
  height: 40px;

  @media screen and (max-width: 599px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuBox = styled.div`
  display: flex;
  width: 0;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
  z-index: 6;

  ${(props) => props.$move && `width:100%`}
`;

const MenuLeft = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
`;

const MenuLeftTopHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

const MenuLeftMainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 30px;
`;

const MenuLeftSubTitle = styled(Link)`
  width: 80%;
  height: 50px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight: 600;
`;

const MenuLeftSubTitleProduct = styled(Link)`
  width: 80%;
  height: 40px;
  text-decoration: none;
  font-size: 16px;
  color: black;
  font-weight: 500;
  padding-left: 30px;
`;

const MenuRight = styled.div`
  width: 20%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
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

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    font-size: 18px;
  }
`;

const HeaderMainSubTitle = styled.div`
  height: 40%;
  padding-left: 13px;
  font-size: 14px;
  color: gray;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    font-size: 12px;
  }
`;

const HeaderSubBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 100%;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;
const HeaderSubTitle = styled.div`
  position: relative;
  cursor: pointer;
  color: black;
  text-decoration: none;

  :hover {
    color: red;
    fill: red;
  }

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    font-size: 18px;
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
  box-sizing: border-box;

  ${(props) => props.$move && `max-height:400px`}
`;

const HeaderDownTitleLink = styled(Link)`
  text-decoration: none;
`;

const HeaderDownTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  background-color: white;
  padding-top: 10px;
  color: black;

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
    <HeaderDownTitleLink to={to}>
      <HeaderDownTitle>{text}</HeaderDownTitle>
    </HeaderDownTitleLink>
  );
};

const HeaderDownArrow = styled(downArrow)`
  margin-left: 8px;
  padding-top: 3px;
  width: 23px;
  height: 23px;

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    width: 18px;
    height: 18px;
  }
`;

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [topBottomArise, setTopBottomArise] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

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

  function HandleMenu() {
    if (menuOn) {
      setMenuOn(false);
    } else {
      setMenuOn(true);
    }
  }

  return (
    <>
      <MenuBox $move={menuOn}>
        <MenuLeft>
          <MenuLeftTopHeader />
          <MenuLeftMainBox>
            <MenuLeftSubTitle>產品介紹</MenuLeftSubTitle>
            <MenuLeftSubTitleProduct to="/argus" onClick={HandleMenu}>
              Argus
            </MenuLeftSubTitleProduct>
            <MenuLeftSubTitleProduct to="/venus" onClick={HandleMenu}>
              Venus
            </MenuLeftSubTitleProduct>
            <MenuLeftSubTitleProduct to="/mars" onClick={HandleMenu}>
              Mars
            </MenuLeftSubTitleProduct>
            <MenuLeftSubTitleProduct to="/z-max" onClick={HandleMenu}>
              Z-Max
            </MenuLeftSubTitleProduct>
            <MenuLeftSubTitle to="/resultssharing" onClick={HandleMenu}>
              成果分享
            </MenuLeftSubTitle>
            <MenuLeftSubTitle to="/partners" onClick={HandleMenu}>
              合作廠商
            </MenuLeftSubTitle>
            <MenuLeftSubTitle to="/recruitment" onClick={HandleMenu}>
              人才招聘
            </MenuLeftSubTitle>
            <MenuLeftSubTitle to="/contact" onClick={HandleMenu}>
              聯絡我們
            </MenuLeftSubTitle>
          </MenuLeftMainBox>
        </MenuLeft>
        <MenuRight onClick={HandleMenu}></MenuRight>
      </MenuBox>
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
            <div
              style={{
                width: "150px",
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "15px",
              }}
            >
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
          <HeaderSubTitle to="/contact">聯絡我們</HeaderSubTitle>
        </HeaderSubBox>
        <HeaderRwdMenuBottom onClick={HandleMenu} src={menu} />
      </HeaderBox>
      {topBottomArise && <TopBottom onClick={topFunction} src={upArrow} />}
    </>
  );
}
