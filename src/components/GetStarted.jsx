import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-cyan-400 p-[2px] cursor-pointer text-cyan-400 hover:bg-cyan-600 hover:text-cyan-600 duration-300`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="">Get</span>
          </p>
            <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain hover:opacity-50"  />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="">Started</span>
          </p>
      </div>
    </div>
  );
};

export default GetStarted;
