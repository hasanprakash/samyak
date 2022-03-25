import styled from "styled-components";

// import eventsPoster from "./img/docor_events.png";
import eventsPoster from "./img/SAMYAK_LOGOS/SAMYAK_FaceLogo_white.png";

import event1 from "./img/technical.svg";
import event2 from "./img/nontechEvent.jpg";
import event3 from "./img/event3.svg";
import event4 from "./img/Abstract Dodgeball Player Background.svg";

const EventContainer = styled.section`
  color: #252525;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  z-index: 800;
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
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: ${eventsPoster} no-repeat center;
  background-size: contain;
`;

const Title = styled.h1`
  color: #44056c;
  font-size: 40px;
  width: 350px;
  text-align: center;
  letter-spacing: 4px;
`;

const Events = styled.div`
  margin-left: 5%;
  width: 85%;
  height: 90%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
`;

const Event = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 25%;
  height: 60%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const EventImageContainer = styled.div`
  height: 50%;
  width: 80%;
  position: relative;
`;

const EventImage = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;f
`;

const EventImageSpan = styled.span`
  position: absolute;
  bottom: 30px;
  left: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
  width: 60px;
  height: 60px;
  color: #fff;
  background-color: #44056c;
  border-radius: 100%;
`;

const EventTextContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 40%;
  width: 90%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const TextContainerH1 = styled.h1`
  color: #44056c;
  font-size: 30px;
`;

const TextContainerP = styled.p`
  color: #44056c;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
`;

const HomeEvents = () => {
  return (
    <div>
      <EventContainer className="events-cont">
        <Title className="title">SEE EVERYTHING WE HAVE TO OFFER</Title>
        <Events className="events">
          <Event className="event1 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event1} alt="event1" />
              <EventImageSpan>1</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Technical Events</TextContainerH1>
              <TextContainerP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae qui labore aliquam voluptas dolores sequi!
              </TextContainerP>
            </EventTextContainer>
          </Event>
          <Event className="event2 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event2} alt="event2" />
              <EventImageSpan>2</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Non Technical Events</TextContainerH1>
              <TextContainerP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae qui labore aliquam voluptas dolores sequi!
              </TextContainerP>
            </EventTextContainer>
          </Event>
          <Event className="event3 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event3} alt="event3" />
              <EventImageSpan>3</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Grand Events</TextContainerH1>
              <TextContainerP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae qui labore aliquam voluptas dolores sequi!
              </TextContainerP>
            </EventTextContainer>
          </Event>
          <Event className="event4 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event4} alt="event4" />
              <EventImageSpan>4</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Sports Events</TextContainerH1>
              <TextContainerP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae qui labore aliquam voluptas dolores sequi!
              </TextContainerP>
            </EventTextContainer>
          </Event>
        </Events>
      </EventContainer>
    </div>
  );
};

export default HomeEvents;
