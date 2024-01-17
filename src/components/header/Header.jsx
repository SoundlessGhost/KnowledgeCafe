import "./Header.css";
import profile from "../../images/shahed.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSignOut,
  faGear,
  faQuestion,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  // imgPopUp_Function
  const [condition, setCondition] = useState(false);
  const popupClickHandler = () => {
    setCondition(!condition);
  };
  // AppearancePopUp_Function
  const [mode, setMode] = useState(false);
  const toggleId = mode ? "dark" : "light";
  return (
    <div>
      <div className="headerContainer">
        <div className="headerTittle">
          <img onClick={popupClickHandler} src={profile} alt="" />
          <h3>Knowledge World</h3>
        </div>
        <div className="headerSubTittle">
          <a href="#">Main</a>
          <a href="#">Learn</a>
          <a href="#">Blogs</a>
          <a href="#">Login</a>
        </div>
      </div>
      <div className="Container">
        {condition ? (
          <div className="popupContainer">
            <p>
              <FontAwesomeIcon icon={faSignOut} /> Sign Out
            </p>
            <p>
              <FontAwesomeIcon icon={faGear} /> Settings
            </p>
            <p>
              <FontAwesomeIcon icon={faQuestion} /> Help
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Send Feedback
            </p>
            <p
              onClick={() => {
                setMode(!mode);
              }}
              id={toggleId}
            >
              <FontAwesomeIcon icon={faMoon} /> Appearance
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
