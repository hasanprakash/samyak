import styled from "styled-components";

const Value = styled.div`
    font-size: 1.6rem;
`;

const H6 = styled.h6`
  font-size: 1.9rem;
  color: black;
  font-weight: bold;
`;

const DetailsObject = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <H6 className="mb-0">{ props.heading }</H6>
        </div>
        <Value className="col-sm-7 text-secondary">{ props.value }</Value>
      </div>
    </div>
  );
};

export default DetailsObject;
