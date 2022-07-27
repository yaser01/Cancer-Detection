import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
const Timer=({shown}) =>{

  const minuteSeconds = 45;
const hourSeconds = 3600;
const daySeconds = 86400;


  const timerProps = {
    isPlaying: true,
    size: 40,
    strokeWidth: 3
  };
  
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  const show=shown;
  return (
    <div hidden={!shown}>
<CountdownCircleTimer 
        {...timerProps}
        isPlaying={show}
        key={shown}
        colors="#218380"
        duration={45}
        initialRemainingTime={45}
        trailColor={"#d9d9d9"}
        onComplete={() => ({
          shouldRepeat: 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      </div>
      )
    } 
export default Timer
