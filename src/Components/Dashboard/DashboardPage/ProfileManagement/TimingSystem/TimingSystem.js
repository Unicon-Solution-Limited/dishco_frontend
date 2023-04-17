import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";

const TimingSystem = () => {
  const [sevenDaysTokenData, setSevenDaysTokenData] = useState([]);
  const { currentUser } = useAuth();
  const [remainingTime, setRemainingTime] = useState(null);

  //getting 7 days(temporary)  token data according to the email
  useEffect(() => {
    const fetchTokenData = async () => {
      if (currentUser.email) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getTemporaryTokenData?email=${currentUser.email}`
          );
          setSevenDaysTokenData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTokenData();
  }, [currentUser.email]);

  //timing calculation
  useEffect(() => {
    const submittedTime = sevenDaysTokenData[0]?.submitTime;
    const expirationTime = new Date(submittedTime);
    expirationTime.setTime(expirationTime.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days in milliseconds

    const intervalId = setInterval(() => {
      const timeDifference = expirationTime - new Date();
      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setRemainingTime(null);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);
        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [sevenDaysTokenData]);

  if (!remainingTime) {
    return <div>Token Expired , You need to generate it again</div>;
  }

  return (
    <div>
      <span style={{ color: remainingTime.days > 0 ? "green" : "red" }}>
        {remainingTime.days} days{" "}
      </span>
      <span style={{ color: remainingTime.hours > 0 ? "green" : "red" }}>
        {remainingTime.hours} hours{" "}
      </span>
      <span style={{ color: remainingTime.minutes > 0 ? "green" : "red" }}>
        {remainingTime.minutes} minutes{" "}
      </span>
      <span style={{ color: remainingTime.seconds > 0 ? "green" : "red" }}>
        {remainingTime.seconds} seconds
      </span>
    </div>
  );
};

export default TimingSystem;
