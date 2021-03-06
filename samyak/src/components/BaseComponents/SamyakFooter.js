import { Link } from "react-router-dom";
import "./SamyakFooter.css";

import logoImg from "./SAMYAK_FaceLogo_white.png";

const SamyakNavBar = () => {
  return (
    <div class="footer">
      <div class="footer-cont">
        <div class="links">
          <div class="draft">
            <h1>SAMYAK 2022</h1>
            <p>
              “Live The Change” is what this epic edition of Samyak would
              profess as that is the sole way of reaching the zenith of talent
              and ardour.
            </p>
          </div>

          <div class="quickLinks">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/aboutus`}>About</Link>
              </li>
              <li>
                <Link to={`/gallery`}>Gallery</Link>
              </li>
              <li>
                <Link to={`/team`}>Team</Link>
              </li>
            </ul>
          </div>

          <div class="footer-logo">
            <img src={logoImg} alt="logoImg" />
            <p>SAMYAK 2022</p>
          </div>

          <div class="contactUs">
            <p>Email Us</p>
            <ul>
              <li>
                <a href="#0">samyak@kluniversity.in</a>
              </li>
              <li>
                <a href="#0">Info.samyak@kluniversity.in</a>
              </li>
            </ul>
          </div>

          <div class="social">
            <ul class="social-links">
              <li>
                <a href="#0">
                  <i class="fab fa-twitter fa" id="SocialIcon"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i class="fab fa-facebook-f fa" id="SocialIcon"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i class="fab fa-instagram fa" id="SocialIcon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&#169;Copyrights Reserved Samyak_2022</p>
        </div>
      </div>
    </div>
  );
};

export default SamyakNavBar;
