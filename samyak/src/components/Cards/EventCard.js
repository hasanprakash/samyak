import './EventCard.css';
import bg from "./bg.png";

import BaseButton from '../../components/UI/BaseButton';

const EventCards = (props) => {
  var heading = props.event.heading;
  var description = props.event.description;
  var imgUrl = props.event.imgUrl;
  console.log(heading, description, imgUrl);
  return (
    <div className="event_page">
      <img className="event__bgimg" src={imgUrl ? imgUrl : bg} alt="bg" />
      <div className="event__content event__box1">
        <h3>{heading}</h3>
        <p>{description}</p>
        <BaseButton onClick={props.onClick}>REGISTER</BaseButton>
      </div>
    </div>
  );
};

export default EventCards;
