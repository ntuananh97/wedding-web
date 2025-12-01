"use client";

import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Ngày 21 tháng 12 năm 2025, 10:00 AM
      const targetDate = new Date("2025-12-21T10:00:00");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Tính toán ngay lập tức
    calculateTimeLeft();

    // Cập nhật mỗi giây
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const targetTimestamp = new Date("2025-12-21T10:00:00").getTime();

  return (
    <div id="GROUP29" className="ladi-element">
      <div className="ladi-group">
        <div
          id="COUNTDOWN1"
          className="ladi-element"
          data-type="endtime"
          data-endtime={targetTimestamp}
          data-date-start={0}
          data-date-end={targetTimestamp}
          data-end="true"
        >
          <div className="ladi-countdown">
            <div
              id="COUNTDOWN_ITEM1"
              className="ladi-element"
              data-item-type="day"
            >
              <div className="ladi-countdown-background ladi-lazyload" />
              <div className="ladi-countdown-text">
                <span>{formatNumber(timeLeft.days)}</span>
              </div>
            </div>
            <div
              id="COUNTDOWN_ITEM2"
              className="ladi-element"
              data-item-type="hour"
            >
              <div className="ladi-countdown-background ladi-lazyload" />
              <div className="ladi-countdown-text">
                <span>{formatNumber(timeLeft.hours)}</span>
              </div>
            </div>
            <div
              id="COUNTDOWN_ITEM3"
              className="ladi-element"
              data-item-type="minute"
            >
              <div className="ladi-countdown-background ladi-lazyload" />
              <div className="ladi-countdown-text">
                <span>{formatNumber(timeLeft.minutes)}</span>
              </div>
            </div>
            <div
              id="COUNTDOWN_ITEM4"
              className="ladi-element"
              data-item-type="seconds"
            >
              <div className="ladi-countdown-background ladi-lazyload" />
              <div className="ladi-countdown-text">
                <span>{formatNumber(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="HEADLINE108" className="ladi-element">
          <h3 className="ladi-headline ladi-transition ladi-lazyload">
            :<br />
          </h3>
        </div>
        <div id="HEADLINE109" className="ladi-element">
          <h3 className="ladi-headline ladi-transition ladi-lazyload">
            :<br />
          </h3>
        </div>
        <div id="HEADLINE110" className="ladi-element">
          <h3 className="ladi-headline ladi-transition ladi-lazyload">
            :<br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
