import React, { useState, useEffect, useRef } from "react";

const TimeLimitedButton = () => {
  const [timeRemaining, setTimeRemaining] = useState(10); // 時間制限 (秒)
  const [buttonDisabled, setButtonDisabled] = useState(false); // ボタンの初期状態は有効
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // ここで初期値をnullに設定

  useEffect(() => {
    // 時間制限タイマーを開始
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // 時間切れになったらボタンを無効化
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // 時間切れになったらボタンを無効化
    if (timeRemaining <= 0) {
      setButtonDisabled(true);
    }
  }, [timeRemaining]);

  const handleClick = () => {
    // ボタンが押されたときの処理
    console.log("ボタンが押されました！");
  };

  return (
    <div>
      <p>残り時間: {timeRemaining} 秒</p>
      <button disabled={buttonDisabled} onClick={handleClick}>
        クリック！
      </button>
    </div>
  );
};

export default TimeLimitedButton; // 正しいスペル
