const BaseInput = (props) => {
  return (
    <div className="input__container">
      <input type="text" className="form-control" placeholder={props.placeholder} required />
    </div>
  );
};

export default BaseInput;
