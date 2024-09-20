import React, { useState, useEffect, useRef } from "react";
// const [timeRemaining, setTimeRemaining] = useState(10); // 時間制限 (秒)
// const [buttonDisabled, setButtonDisabled] = useState(false); // ボタンの初期状態は有効
// const intervalRef = (useRef < NodeJS.Timeout) | (null > null); // ここで初期値をnullに設定

const TimeLimited = ({ children, duration = 20, onTimeUp }) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isEnabled, setIsEnabled] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setIsEnabled(false);
      if (onTimeUp) {
        onTimeUp();
      }
    }
  }, [timeRemaining]);

  return <div>{isEnabled && children}</div>;
};

export default TimeLimited;
