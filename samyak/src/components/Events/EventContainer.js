import styled from "styled-components";
import EventCard from "../Cards/EventCard";

import sdp2 from './sdp2.jpg';
import sdp4 from './sdp4.jpg';

const EventContainer = () => {
  const EventWrapper = styled.div`
    margin-top: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  `;
  const Events = styled.div`
    width: 90%;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  `;
  const events = [
    {
      eventType: 'Technical',
      heading: "SDP2",
      description:
        "Y20 Relay Learnathon for skill development project-2",
      imgUrl: sdp2,
    },
    {
      eventType: 'Technical',
      heading: "SDP4",
      description:
        "Y20 Relay Learnathon for skill development project-4",
      imgUrl: sdp4
    },
  ];
  return (
    <EventWrapper>
      <Events>
        {events.map((event) => (
            <EventCard heading={event.heading} description={event.description} imgUrl={event.imgUrl}/>
        ))}
      </Events>
    </EventWrapper>
  );
};

export default EventContainer;
