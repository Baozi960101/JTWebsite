import React, { useState } from "react";
import styled from "styled-components";
import HomeBackground from "../../images/homeBackground.png";
import LogoBackground from "../../images/logoBackground.png";
import Venus from "../../images/venus.png";
import Argus from "../../images/argus.png";
import Mars from "../../images/mars.png";
import Zmax from "../../images/zmax.png";
import Finger from "../../images/finger.png";
import WhiteDotRight from "../../images/whiteDotRight.png";
import WhiteDotLeft from "../../images/whiteDotLeft.png";
import Cover02 from "../../images/cover02.png";
import Cover03 from "../../images/cover03.png";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";
import jianTongLogo from "../../images/jianTongLogo.png";

const HomeMainBackground = styled.div`
  width: 100%;
  height: 2200px;
  background-image: url(${HomeBackground});
  z-index: 1;

  @media screen and (max-width: 1050px) {
    height: auto;
  }
`;

const FirstBackground = styled.img`
  max-width: 100%;
  height: 740px;
`;

const VenusLogo = {
  maxWidth: "100%",
  height: "auto",
  position: "absolute",
  marginRight: "450px",
  marginTop: "80px",
  zIndex: "1",
  cursor: "pointer",
};

const ArgusLogo = {
  maxWidth: "100%",
  height: "auto",
  position: "absolute",
  marginLeft: "360px",
  marginTop: "90px",
  boxSizing: "border-box",
  transition: "all .5s",
  zIndex: "2",
  cursor: "pointer",
};

const MarsLogo = {
  maxWidth: "100%",
  height: "auto",
  position: "absolute",
  marginRight: "760px",
  marginTop: "290px",
  boxSizing: "border-box",
  transition: "all .5s",
  zIndex: "2",
  cursor: "pointer",
};

const FingerLogo = {
  maxWidth: "100%",
  height: "auto",
  position: "absolute",
  marginRight: "350px",
  marginTop: "455px",
  boxSizing: "border-box",
  transition: "all .5s",
  zIndex: "1",
  cursor: "pointer",
};

const ZmaxLogo = {
  maxWidth: "100%",
  height: "auto",
  position: "absolute",
  marginLeft: "750px",
  marginTop: "240px",
  boxSizing: "border-box",
  transition: "all .5s",
  zIndex: "1",
  cursor: "pointer",
};

const LogoBackgroundBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 70px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const LogoBackgroundBoxRwd = styled.div`
  width: 100%;
  display: none;
  position: relative;

  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

const LogoBackgroundBoxRwdBackground = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e6f2;
  z-index: 1;
  position: absolute;
  right: 25%;
  top: 35%;
  border: 1px solid white;
`;

const JTLogo = styled.img`
  width: 50px;
  height: 45px;

  @media screen and (min-width: 501px) and (max-width: 1050px) {
    width: 80px;
    height: 75px;
  }
`;

const LogoBackgroundBoxRwdRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 500px;

  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;

const ArgusImg = styled.img`
  margin-top: 50px;
  width: 200px;
  height: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
`;

const LogoBackgroundBoxRwdLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  height: 500px;

  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;

const RightBox = styled.div`
  width: 40%;
  position: absolute;
  z-index: 1;
  right: 0;
  margin-top: 300px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const DotRight = styled.img`
  max-width: 100%;
`;

const DotRightBox = () => {
  return (
    <RightBox>
      <DotRight src={WhiteDotRight} />
    </RightBox>
  );
};

const LeftBox = styled.div`
  width: 40%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const DotLeft = styled.img`
  max-width: 100%;
`;

const DotLeftBox = () => {
  return (
    <LeftBox>
      <DotLeft src={WhiteDotLeft} />
    </LeftBox>
  );
};

const Cover02Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  @media screen and (max-width: 1050px) {
    padding-top: 50px;
  }
`;

const Cover03Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const CoverBackground = styled.img`
  max-width: 100%;
  height: auto;
`;

const Cover02Background = () => {
  return (
    <Cover02Box>
      <CoverBackground src={Cover02} />
    </Cover02Box>
  );
};

const Cover03Background = () => {
  return (
    <Cover03Box>
      <CoverBackground src={Cover03} />
    </Cover03Box>
  );
};

const ImgLink = styled(Link)``;

export default function Home() {
  const Item = ({ toLink, imgSrc, style }) => {
    const transitionStyles = {
      entering: { transform: "scale(1)", transition: "transform .5s" },
      entered: { transform: "scale(1.12)", transition: "transform .5s" },
      exiting: { transform: "scale(1.12)", transition: "transform .5s" },
      exited: { transform: "scale(1)", transition: "transform .5s" },
    };

    const [NewMove, setNewMove] = useState(false);

    function addmask() {
      setNewMove(true);
    }

    function addmaskOut() {
      setNewMove(false);
    }

    return (
      <ImgLink
        to={toLink}
        style={style}
        onMouseOver={addmask}
        onMouseOut={addmaskOut}
      >
        <Transition in={NewMove}>
          {(state) => (
            <img style={transitionStyles[state]} src={imgSrc} alt="" />
          )}
        </Transition>
      </ImgLink>
    );
  };

  return (
    <>
      <HomeMainBackground>
        <DotRightBox />
        <DotLeftBox />
        <LogoBackgroundBox>
          <Item toLink="/venus" style={VenusLogo} imgSrc={Venus} />
          <Item toLink="/argus" style={ArgusLogo} imgSrc={Argus} />
          <Item toLink="/z-max" style={ZmaxLogo} imgSrc={Zmax} />
          <Item toLink="/mars" style={MarsLogo} imgSrc={Mars} />
          <Item toLink="/" style={FingerLogo} imgSrc={Finger} />
          <FirstBackground src={LogoBackground} />
        </LogoBackgroundBox>
        <LogoBackgroundBoxRwd>
          <LogoBackgroundBoxRwdBackground>
            <JTLogo src={jianTongLogo} />
          </LogoBackgroundBoxRwdBackground>
          <LogoBackgroundBoxRwdLeft>
            <Link style={{ zIndex: "2" }} to="/venus">
              <ArgusImg src={Venus} />
            </Link>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link style={{ zIndex: "2" }} to="/mars">
                <ArgusImg src={Mars} />
              </Link>
            </div>
          </LogoBackgroundBoxRwdLeft>
          <LogoBackgroundBoxRwdRight>
            <Link style={{ zIndex: "2" }} to="/argus">
              <ArgusImg src={Argus} />
            </Link>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link style={{ zIndex: "2" }} to="/z-max">
                <ArgusImg src={Zmax} />
              </Link>
            </div>
          </LogoBackgroundBoxRwdRight>
        </LogoBackgroundBoxRwd>
        <Cover02Background />
        <Cover03Background />
      </HomeMainBackground>
    </>
  );
}
