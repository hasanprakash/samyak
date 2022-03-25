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
                      width="150"
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
                          Paynow
                        </a>
                      </ProfileButton>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <EventRecord>EVENT NAME</EventRecord>
                  <EventRecord>-</EventRecord>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <DetailsObject
                    heading="Name"
                    value={props.user.first_name?(props.user.first_name +' '+ props.user.last_name):''}
                  />
                  <br></br>
                  <DetailsObject heading="Email" value={props.user?props.user.email:'samyak@gmail.com'} />
                  <br></br>
                  <DetailsObject
                    heading="Phone"
                    value={
                      "+91" +
                      (props.user && props.user.profile
                        ? props.user.profile.phone
                        : "9876543210")
                    }
                  />
                  <br></br>
                  <DetailsObject heading={"Branch"} value={ props.user?props.user.profile?props.user.profile.branch:'RRR':'RRR' } />
                  <br></br>
                  <DetailsObject heading="Year" value={ props.user?props.user.profile?props.user.profile.year_of_study:'3rd':'3rd' } />
                  <br></br>
                  <DetailsObject heading="Username"
                    value={props.user.username}
                  />
                  <br></br>
                  <DetailsObject heading="College" value={props.user?props.user.profile?props.user.profile.college_name:'KLU':'KLU'} />
                  <br></br>
                  <DetailsObject heading="Gender" value={props.user?props.user.profile?props.user.profile.gender:'FEMALE':'FEMALE'} />
                  <br></br>
                  <DetailsObject heading="Payment Status" value={props.user?props.user.payment? props.user.payment.payment_status.toString():'false':'false'} />
                  <br></br>
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
