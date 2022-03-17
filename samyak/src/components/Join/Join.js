import { useState } from 'react';

// bootstrap.min.css
// jquery.min.css
// join_main.js
import './Join.css';

import bg from '../Bootstrap/img/join_background.jpg';
import DisplayForm from './DisplayForm';

const Join = () => {
    const [toBeDisplayed, setToBeDisplayed] = useState("LoginForm");
    const toggleForm = () => {
        if(toBeDisplayed === "LoginForm") 
            setToBeDisplayed("RegisterForm");
        else
            setToBeDisplayed("LoginForm");
    }
  return (
    <div className="img js-fullheight join__container" style={{backgroundImage: `url(${bg})`}}>
      <section class="ftco-section" style={{padding: '2em 0'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">LOGIN</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="login-wrap p-0">
                <DisplayForm toBeDisplayed={toBeDisplayed}/>
                <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                <div className="social d-flex text-center">
                  <a href="#" className="px-2 py-2 mr-md-1 rounded">
                    <span className="ion-logo-facebook mr-2"></span> Facebook
                  </a>
                  <a href="#" onClick={toggleForm} className="px-2 py-2 ml-md-1 rounded">
                    <span className="ion-logo-twitter mr-2"></span> Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
