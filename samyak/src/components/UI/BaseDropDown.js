const BaseDropDown = (props) => {
    return (
        <div className="dropdown__container">
            <select name={props.name} className="form-control" required>
                {props.options.map((option) => (<option key={option} value={option}>{option}</option>))}     
            </select>
        </div>
    );
}

export default BaseDropDown;