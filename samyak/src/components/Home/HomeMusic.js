import styled from "styled-components";

import purpleBackground from "./img/purpleBackground.jpg";
import concertImage from "./img/concertdj.png";

const MusicContainer = styled.section`
  position: relative;
  height: 180vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
`;

const MusicBackground = styled.img`
  position: absolute;
  z-index: -1;
`;

const MusicTitle = styled.h1`
  color: #fff;
  font-size: 45px;
  width: 400px;
  text-align: center;
  letter-spacing: 4px;
`;

const ConcertContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 80vw;
`;

const ConcertContainerP = styled.p`
  color: #fff;
  width: 480px;
  line-height: 28px;
  font-size: 22px;
`;

const ConcertContainerImage = styled.img`
  height: 600px;
  width: 600px;
  -o-object-fit: contain;
  object-fit: contain;
`;

const HomeMusic = () => {
  return (
    <div>
      <MusicContainer className="music-cont">
        <MusicBackground
          className="music-background back-1"
          src={purpleBackground}
          style={{ top: 0, left: 0 }}
          alt="back1"
        />
        <MusicBackground
          className="music-background back-2"
          src={purpleBackground}
          style={{ bottom: 0, transform: "rotate(180deg)" }}
          alt="back2"
        />
        <MusicTitle
          className="music-title Mtitle-1"
          style={{ marginTop: "80px" }}
        >
          TUNE IN TO VIBE WITH YOUR FRIENDS
        </MusicTitle>
        <ConcertContainer className="concert-cont">
          <ConcertContainerP>
            “Live The Change” is what this epic edition of Samyak would profess
            as that is the sole way of reaching the zenith of talent and ardour.
            Taking to the skies from this exhilarating theme, Samyak’ 22 is on
            the verge of turning into reality a unique vision, that
            distinguishes its brilliance from the rest and carries it to the
            crown.
          </ConcertContainerP>
          <ConcertContainerImage src={concertImage} alt="concert" />
        </ConcertContainer>
        <MusicTitle
          className="music-title Mtitle-2"
          style={{ marginButtom: "80px", width: "550px", zIndex: 2 }}
        >
          SURABHI 2022
        </MusicTitle>
      </MusicContainer>
    </div>
  );
};

export default HomeMusic;
