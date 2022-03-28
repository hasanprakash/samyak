import styled from "styled-components";
import "./UserProfile.css";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import DetailsObject from "./DetailsObject";
import ProfileButton from "../UI/ProfileButton";
import EventRecord from "./EventRecord";

import samyakLogo from "./samyak_logo.png";

const EditProfile = styled.div`
  float: right;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfile = (props) => {
  let paidStatus = props.user?props.user.payment?(props.user.payment.payment_status).toString():"false":"false";
  // typecast boolean to string

  return (
    <div>
      <div
        className="container"
        style={{ width: "100%", margin: "auto", padding: "auto" }}
      >
        <NavBarSpace />
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={samyakLogo}
                      alt="Admin"
                      className="rounded-circle"
                      width="200"
                      height="200"
                      style={{backgroundColor: '#f5f5f5'}}
                    />
                    <div className="mt-3">
                      <h4>{props.user?props.user.username:'@samyak'}</h4>
                      <p className="text-secondary mb-1">
                        {props.user?props.user.first_name+' '+props.user.last_name:''}
                      </p>
                      <ProfileButton>Change Password</ProfileButton>
                      {paidStatus === "true" ?
                        <ProfileButton>PAID</ProfileButton> :
                      <ProfileButton onClick={props.handlePayment}>
                        <a
                          style={{color: '#007bff'}}
                          href="#0"
                        >
                          Pay now
                        </a>
                      </ProfileButton>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <EventRecord>EVENT NAMES</EventRecord>
                  <EventRecord>-</EventRecord>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <br></br>
                  <DetailsObject
                    heading="Name"
                    value={props.user.first_name?(props.user.first_name +' '+ props.user.last_name):''}
                  />
                  <DetailsObject heading="Email" value={props.user?props.user.email:'samyak@gmail.com'} />
                  <DetailsObject
                    heading="Phone"
                    value={
                      "+91" +
                      (props.user && props.user.profile
                        ? props.user.profile.phone
                        : "9876543210")
                    }
                  />
                  <DetailsObject heading={"Branch"} value={ props.user?props.user.profile?props.user.profile.branch:'RRR':'RRR' } />
                  <DetailsObject heading="Year" value={ props.user?props.user.profile?props.user.profile.year_of_study:'3rd':'3rd' } />
                  <DetailsObject heading="Username"
                    value={props.user.username}
                  />
                  <DetailsObject heading="College" value={props.user?props.user.profile?props.user.profile.college_name:'KLU':'KLU'} />
                  <DetailsObject heading="Gender" value={props.user?props.user.profile?props.user.profile.gender:'FEMALE':'FEMALE'} />
                  <DetailsObject heading="Payment Status" value={props.user?props.user.payment? props.user.payment.payment_status.toString():':tick':'false'} />
                  <div className="row">{}    
                    <EditProfile>
                      <ProfileButton>EDIT PROFILE</ProfileButton>
                    </EditProfile>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
