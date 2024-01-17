/* eslint-disable react/prop-types */
// import React from 'react';
import "./ShowItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const ShowItem = ({ item, clickHandler }) => {
  const { picture, name, about, time, tag, release, site, user } = item;
  return (
    <div>
      <div className="itemContainer">
        <img src={picture} alt="" />
        <div className="userContainer">
          <img src={user} alt="" />
          <p className="userName">
            {name} <br /> {release}
          </p>
          <div>
            <button
              onClick={() => {
                clickHandler(item);
              }}
              className="userButton"
            >
              {time} <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <p className="userAbout">{about}</p>
        <p className="tag">{tag}</p>
        <a className="tag1" target="blank" href={site}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default ShowItem;
