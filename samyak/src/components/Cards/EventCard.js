import './EventCard.css';
import bg from "./bg.png";

const EventCards = (props) => {
  return (
    <div className="event_page">
      <img className="event__bgimg" src={bg} alt="bg" />
      <div className="event__content event__box1">
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default EventCards;
