import styled from "styled-components";
import BaseProfileDropdown from "../UI/BaseProfileDropdown";
import BaseProfileInput from "../UI/BaseProfileInput";

const Value = styled.div`
  font-size: 1.6rem;
`;

const H6 = styled.h6`
  font-size: 1.9rem;
  color: black;
  font-weight: bold;
  margin-left: 60px;
`;

const DetailsObject = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-5">
          <H6 className="mb-0">{props.heading}</H6>
        </div>
        {props.isUpdating && props.type === "dropdown" ? (
          <BaseProfileDropdown
            name={props.heading}
            value={props.value}
            data={props.data}
            dataToUpdate={props.dataToUpdate}
            toggleCollegeType={props.toggleCollegeType}
          />
        ) : props.isUpdating && props.type === "input" ? (
          <BaseProfileInput
            name={props.heading}
            value={props.value}
            dataToUpdate={props.dataToUpdate}
          />
        ) : (
          <Value className="col-sm-7 text-secondary">
            {props.value}{" "}
            {props.tag ? (
              <img alt="tag" src={props.tag} width="25" height="25" />
            ) : null}{" "}
          </Value>
        )}
      </div>
      <br></br>
    </div>
  );
};

export default DetailsObject;
