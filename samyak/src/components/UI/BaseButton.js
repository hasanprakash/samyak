const BaseButton = (props) => {
  return (
    <button onClick={props.onClick} type="submit" class="form-control btn btn-primary submit px-3">
      {props.children}
    </button>
  );
};

export default BaseButton;
