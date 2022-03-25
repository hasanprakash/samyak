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
  background: url(../img/decor_events.png) no-repeat center;
  background-size: contain;
`;

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
  width: 400px;
  line-height: 25px;
  font-size: 16px;
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In et quaerat
          beatae pariatur quas repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic, dolorum!
        </StallsWrapperP>
        <StallsWrapperImage src={shop} alt="shop" />
      </StallsWrapper>
    </StallContainer>
  );
};

export default HomeStalls;
