import styled from "styled-components";
import { Link } from "react-router-dom";
import "./SamyakFooter.css";

import logoImg from "./SAMYAK_FaceLogo_white.png";

const Footer = styled.div`
  background-color: #007b5e;
  height: 300px;
  width: 100vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const FooterContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  height: 85%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  @media (max-width: 450px) {
    width: 100%;
    height: 90%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
`;

const Links = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 60%;
  @media (max-width: 450px) {
    height: 95%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

const QuickLinks = styled.div`
  width: 20%;
  @media (max-width: 450px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }
`;

const QuickLinksP = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const QuickLinksUL = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 50%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @media (max-width: 450px) {
    height: 85%;
  }
`;

// const ReDirections = styled.a`
//   color: #fff;
//   font-size: 18px;
//   font-weight: 500;
// `;

const FooterLogo = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 25%;
  height: 70%;
`;

const FooterLogoImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
`;

const FooterLogoP = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;

const ContactUsP = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ContactUsLI = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const ContactUsLIA = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;


const SocialUL = styled.ul`
  height: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

const SocialLIA = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

const CopyRight = styled.div`
  margin-bottom: -50px;
  height: 40px;
  width: 100vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #00644d;
  @media (max-width: 450px) {
    margin-top: -20px;
  }
`;

const CopyRightP = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

const SamyakNavBar = () => {
  return (
    <Footer className="footer">
      <FooterContainer className="footer-cont">
        <Links className="links">
          <FooterLogo className="footer-logo">
            <FooterLogoImg src={logoImg} alt="logo" />
            <FooterLogoP>SAMYAK 2022</FooterLogoP>
          </FooterLogo>
          <QuickLinks className="quickLinks">
            <QuickLinksP>Quick Links</QuickLinksP>
            <QuickLinksUL>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to={`/team`}>Team</Link>
              </li>
            </QuickLinksUL>
          </QuickLinks>

          <div className="contactUs" style={{ width: "20%" }}>
            <ContactUsP>Email Us</ContactUsP>
            <QuickLinksUL>
              <ContactUsLI>
                {" "}
                <ContactUsLIA href="">samyak@kluniversity.in</ContactUsLIA>
              </ContactUsLI>
              <ContactUsLI>
                <ContactUsLIA href="">Info.samyak@kluniversity.in</ContactUsLIA>
              </ContactUsLI>
            </QuickLinksUL>
          </div>

          <div className="social" style={{ width: "20%" }}>
            <SocialUL className="social-links">
              <li style={{ margin: "5px 0px" }}>
                <SocialLIA href="#">
                  <i className="fab fa-twitter fa" id="SocialIcon"></i>
                </SocialLIA>
              </li>
              <li style={{ margin: "5px 0px" }}>
                <SocialLIA href="#">
                  <i className="fab fa-facebook-f fa" id="SocialIcon"></i>
                </SocialLIA>
              </li>
              <li style={{ margin: "5px 0px" }}>
                <SocialLIA href="#">
                  <i className="fab fa-instagram fa" id="SocialIcon"></i>
                </SocialLIA>
              </li>
            </SocialUL>
          </div>

        </Links>
        <CopyRight className="copyright">
          <CopyRightP>&#169; Copyrights Reserved Samyak_2022</CopyRightP>
        </CopyRight>
      </FooterContainer>
    </Footer>
  );
};

export default SamyakNavBar;
