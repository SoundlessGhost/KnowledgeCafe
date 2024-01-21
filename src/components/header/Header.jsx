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
import { Link } from "react-router-dom";
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
          <Link to="/home">Knowledge World</Link>
        </div>
        <div className="headerSubTittle">
          <Link to="/main">Main</Link>
          <Link to="#">Learn</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="Container duration-1000">
        {condition ? (
          <div className="popupContainer pl-5">
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
