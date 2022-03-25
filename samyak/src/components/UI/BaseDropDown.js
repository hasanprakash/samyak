import styled from "styled-components";

const DropDownOption = styled.option`
    color: black;
`;

const BaseDropDown = (props) => {
    return (
        <div className="dropdown__container">
            <select name={props.name} className="form-control" required>
                {props.options.map((option) => (<DropDownOption key={option} value={option}>{option}</DropDownOption>))}     
            </select>
        </div>
    );
}

export default BaseDropDown;