import styled from "styled-components";
import "./UserProfile.css";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import DetailsObject from "./DetailsObject";
import ProfileButton from "../UI/ProfileButton";

const H6 = styled.h6`
  font-size: 2rem;
`;
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
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
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
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <H6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </H6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <H6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Github
                    </H6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <H6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter mr-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </H6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <H6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </H6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <H6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </H6>
                    <span className="text-secondary">bootdey</span>
                  </li>
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
