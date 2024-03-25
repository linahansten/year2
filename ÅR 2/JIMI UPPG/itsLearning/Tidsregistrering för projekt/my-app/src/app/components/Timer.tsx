"use client"
import { useState } from "react";
import { startTimer, stopTimer } from "@/utils/handleDatabase";

export const Timer = ({ projectId, time }) => {
  const [seconds, setSeconds] = useState(time);
  const [intervalId, setIntervalId] = useState(null);
  const [startTime, setStartTime] = useState("");

  const handleStart = async (event) => {
    event.preventDefault();
    if (!intervalId) {
      setStartTime(new Date().toISOString());
      await startTimer(projectId, new Date());
      projectId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(projectId);
      console.log(`Start timer for project ID: ${projectId}`);
    }
  };
  

  const handleStop = async (event) => {
    event.preventDefault(); 
    setIntervalId(null);
    clearInterval(intervalId)
    const endTime = new Date()
    const stopedTime = Math.round((endTime.getTime() - new Date(startTime).getTime()) / 1000);
    await stopTimer(projectId,new Date() , stopedTime);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div>
      <p>{formatTime(seconds)}</p>
      <form onSubmit={handleStart}>
        <button type="submit" className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 focus:outline-none">Start</button>
      </form>
      <form onSubmit={handleStop}>
        <button type="submit" className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 focus:outline-none">Stop</button>
      </form>
    </div>
  );
};