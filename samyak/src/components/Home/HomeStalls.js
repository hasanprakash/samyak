import styled from "styled-components";

import lantern from "./img/Hanging-Chinese-Lantern-PNG.png";
import shop from "./img/shop.svg";

const StallContainer = styled.div`
  height: 90vh;
  width: 100vw;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  background-size: contain;
`;
// background: url(../img/decor_events.png) no-repeat center;

const LanternDecorator = styled.img`
  position: absolute;
  top: -50px;
  left: -100px;
  height: 200px;
  width: 800px;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
`;

const StallsWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  width: 75vw;
`;

const StallsWrapperP = styled.p`
  width: 480px;
  line-height: 28px;
  font-size: 22px;
  font-weight: 400;
`;

const StallsWrapperImage = styled.img`
  height: 600px;
  width: 600px;
  -o-object-fit: contain;
  object-fit: contain;
`;

const HomeStalls = () => {
  return (
    <StallContainer className="stalls-cont">
      <LanternDecorator className="lantern-decor" src={lantern} alt="lantern" />
      <StallsWrapper className="stalls-wrapper">
        <StallsWrapperP>
          SURABHI 2022 is the national-level cultural fest conducted by KL
          University, every iteration with the aim of bringing to life an
          indelible delight that artistic zealots emit with their spell-binding
          mastery. The entire varsity revels in the brightest shine brought by
          the indomitable enthusiasm of countless individuals looking for a
          massive platform to exhibit the invaluable treasure held inside them.
        </StallsWrapperP>
        <StallsWrapperImage src={shop} alt="shop" />
      </StallsWrapper>
    </StallContainer>
  );
};

export default HomeStalls;
