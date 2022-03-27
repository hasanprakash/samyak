import { useEffect, useState } from 'react';
import styled from "styled-components";
import EventCard from "../Cards/EventCard";

import axiosInstance from '../../axios';

// import sdp2 from './sdp2.jpg';
// import sdp4 from './sdp4.jpg';

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

  const [events, setEvents] = useState([]);
  useEffect(() => {
    axiosInstance.get('events/')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((e) => console.log(e));
  }, setEvents);

  return (
    <EventWrapper>
      <Events>
        {events.map((event) => (
            <EventCard event={event}/>
        ))}
      </Events>
    </EventWrapper>
  );
};

export default EventContainer;
