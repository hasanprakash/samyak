import styled from "styled-components";
import { Link } from "react-router-dom";
import "./SamyakFooter.css";

import logoImg from "./SAMYAK_FaceLogo_white.png";


const SamyakNavBar = () => {
  return (
    <div class="footer">
            <div class="footer-cont">
                <div class="links">
                    <div class="footer-logo">
                        <img
                            src="../img/SAMYAK_LOGOS/SAMYAK_FaceLogo_white.png"
                            alt=""
                        />
                        <p>SAMYAK 2022</p>
                    </div>
                    <div class="quickLinks">
                        <p>Quick Links</p>
                        <ul>
                            <li><a href="./home.html">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Team</a></li>
                            {/* <li><a href="./home.html">Home</a></li> */}
                        </ul>
                    </div>

                    <div class="contactUs">
                        <p>Email Us</p>
                        <ul>
                            <li><a href="">samyak@kluniversity.in</a></li>
                            <li>
                                <a href="">Info.samyak@kluniversity.in</a>
                            </li>
                        </ul>
                    </div>

                    <div class="social">
                        <ul class="social-links">
                            <li>
                                <a href="#"
                                    ><i
                                        class="fab fa-twitter fa"
                                        id="SocialIcon"
                                    ></i
                                ></a>
                            </li>
                            <li>
                                <a href="#"
                                    ><i
                                        class="fab fa-facebook-f fa"
                                        id="SocialIcon"
                                    ></i
                                ></a>
                            </li>
                            <li>
                                <a href="#"
                                    ><i
                                        class="fab fa-instagram fa"
                                        id="SocialIcon"
                                    ></i
                                ></a>
                            </li>
                            <li>
                                <a href=""
                                    ><i
                                        class="fab fa-instagram fa"
                                        id="SocialIcon"
                                    ></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>@Copyrights reserved Samyak2022</p>
                </div>
            </div>
        </div>
  );
};

export default SamyakNavBar;
