const BaseButton = (props) => {
  return (
    <button onClick={props.onClick} type="submit" className="form-control btn btn-primary submit px-3">
      {props.children}
    </button>
  );
};

export default BaseButton;