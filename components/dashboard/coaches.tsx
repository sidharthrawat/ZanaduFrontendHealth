import React from "react";
import Styles from "../../styles/coaches.module.css";
import TopCoaches from "../../utility/TopCoaches.json";

const Coaches = () => {
  return (
    <>
      <div className={`container ${Styles.coachesmain}`}>
        <p className={`container ${Styles.coachesmainhead}`}>
          Top Rated Coaches
        </p>
        <div className={`container ${Styles.coachesscroll}`}>
          {TopCoaches.TopCoaches.map((item, idx) => {
            return (
              <div className={`container ${Styles.coachesscrollitem}`}>
                <img src={item.image} alt="" />
                <p className={`container ${Styles.Uppercoach}`}>{item.name}</p>
                <p className={`container ${Styles.Lowercoach}`}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`container ${Styles.linkedOne}`}></div>
    </>
  );
};

export default Coaches;
