import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './EventCard.css';
import bg from "./bg.png";

import BaseButton from '../../components/UI/BaseButton';
import axiosInstance from '../../axios';

const EventCards = (props) => {
  const navigate = useNavigate();
  var heading = props.event.name;
  var description = props.event.description;
  var imgUrl = props.event.event_image;
  let isRegistered = props.isRegistered
  const [registerText, setRegisterText] = useState(true);
  const eventRegisterHandler = () => {
    
    console.log("Registering for event", heading, description);
    let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const isAuthenticated = storage ? storage.user[1].details.isAuth : false;
    if(isAuthenticated) {
      axiosInstance
        .post('registerevent/', {
          event_name: props.event.name,
          reg_id: storage.user[1].details.user_id,
        })
        .then((response) => {
          console.log("Response: ", response.data);
        })
        .catch((e) => console.log(e));
    }
    else {
      localStorage.setItem('user', null);
      navigate('/join');
    }
    setRegisterText(false);
  }

  return (
    <div className="event_page">
      <img className="event__bgimg" src={imgUrl ? imgUrl : bg} alt="bg" />
      <div className="event__content event__box1">
        <h3>{heading}</h3>
        <p>{description}</p>
        {!isRegistered ?
          <BaseButton onClick={eventRegisterHandler}>
            {registerText ? "Register" : "Registered"}
          </BaseButton> :
          <BaseButton>REGISTERED</BaseButton>
        }
      </div>
    </div>
  );
};

export default EventCards;
