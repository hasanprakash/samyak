const BaseButton = (props) => {
  return (
    <button type="submit" class="form-control btn btn-primary submit px-3">
      {props.children}
    </button>
  );
};

export default BaseButton;
