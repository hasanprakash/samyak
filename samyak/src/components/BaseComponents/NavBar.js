import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import "./NavBar.css";

import styled from "styled-components";

import logoImg from "./SAMYAK_FaceLogo_white.png";

const Logout = styled.a`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50px;
  height: 60px;
  margin-top: -1px;
  margin-left: -5px;
`;

const NavBar = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("user");
    enqueueSnackbar("Logged Out Successfully", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
    props.setIsAuth(false);
    navigate("/join");
  };
  return (
    <div className="App__navbar">
      <nav>
        <div className="logo">
          <Link to="/">
            <Logo src={logoImg} alt="SAMYAK" />
          </Link>
        </div>
        <div className="menu-icon">
          <span></span>
        </div>
      </nav>
      <section className="overlay-menu">
        <div className="container" >
          <div className="row" style={{ display: "block" }}>
            <div className="main-menu">
              <ul style={{ marginTop: '30px'}}>
                <li className="nav-element">
                  <Link to={`/home`}>HOME</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/aboutus`}>ABOUT US</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/events`}>EVENTS</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/gallery`}>GALLERY</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/oursponsors`}>OUR SPONSORS</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/team`}>TEAM</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/profile`}>PROFILE</Link>
                </li>
                {props.isAuth ? (
                  <li className="nav-element">
                    <Logout onClick={userLogout}>LOGOUT</Logout>
                  </li>
                ) : (
                  <li className="nav-element">
                    <Link to={`/join`}>JOIN</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
