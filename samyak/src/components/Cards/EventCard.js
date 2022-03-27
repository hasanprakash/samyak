import './EventCard.css';
import bg from "./bg.png";

import BaseButton from '../../components/UI/BaseButton';

const EventCards = (props) => {
  return (
    <div className="event_page">
      <img className="event__bgimg" src={props.imgUrl ? props.imgUrl : bg} alt="bg" />
      <div className="event__content event__box1">
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <BaseButton onClick={props.onClick}>REGISTER</BaseButton>
      </div>
    </div>
  );
};

export default EventCards;
