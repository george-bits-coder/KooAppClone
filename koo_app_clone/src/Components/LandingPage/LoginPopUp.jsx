import React from "react";
import "./LoginPopup.css";

const LoginPopUp = (props) => {
  return props.trigger ? (
    <div id="unblurred" className="popup-login">
      <div className="popup-inner">
        <div className="popup-title">
          <span style={{marginLeft:"2%"}}>Enter your phone number</span>
          <button className="close-btn">
            <img
              src="https://www.kooapp.com/assets/15c66d2b.svg"
              alt="close"
              onClick={() => {
                props.settrigger(false);
              }}
            />
          </button>
          {/* {props.children}  */}
        </div>
        <hr />
        <div className="input-cont-popup">
          <div className="inpt-cont-inner">
            <div className="cont-code">
              🇮🇳
              <span>+91</span>
            </div>
          </div>
          <input
            class="phn-inpt"
            id="phone"
            type="integer"
            name="phone"
            limit="10"
            placeholder="Mobile number"
            value=""
          ></input>
        </div>
        <div className="email-verify">
            <span>- OR -</span>
            <a href="/">Sign in with email</a>
        </div>
        <div className="captcha-cont">

        </div>
        <br />
        <div className="btn-cont">
          <button className="otp-btn">Send OTP</button>
          <div class="cnfrm-inp-div">
            <span>You will recive otp on given number</span>
          </div>
        </div>
        <br />
      </div>
    </div>
  ) : (
    ""
  );
};

export default LoginPopUp;
