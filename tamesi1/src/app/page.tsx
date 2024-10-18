"use client";
import { setConfig } from "next/config";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { clearInterval } from "timers";
import AnotherButton from "./button/TimeLimited[Button]"; // ファイルパスは適切に修正してください
import ATK10 from "./ATK/ATKj";
// import EmonoHp from "./emono/emonoHpjs";
import { handleAttack } from "./button/AttacButton";
import { emonoHp, emonoHpList } from "./emono/emonoHpjs";



// export default TimeLimitedButton;

// const handleClick = () => {
//   // alert("出来た");
//   tannEnd = emonoHp+tenDbotan;
//   console.log(tannEnd)
//   setCount(count + 10)
//   // router.reload()
// }

// let aaaa:string = '100';

export default function Home() {
  const [currentHp, setCurrentHp] = useState(emonoHp.hp); // emonoHp から HP を取得
  const [buttonDisabled, setButtonDisabled] = useState(false); // ボタンの初期状態は有効
  const [timeRemaining, setTimeRemaining] = useState(10); // 時間制限 (秒)
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // ここで初期値をnullに設定
  // const [emonoHp, setCountemono] = useState(100);
  // const [turnEnd, turnCounte] = useState(15);

  useEffect(() => {
    // 時間制限タイマーを開始
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 0.5);
    }, 1000);

        // 時間切れになったらボタンを無効化
    // return () => {
    //   if (intervalRef.current) {
    //     clearInterval(intervalRef.current);
    //   }
    // };
  }, []);
  useEffect(() => {
    // 時間切れになったらボタンを無効化
    if (timeRemaining <= 0) {
      setButtonDisabled(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
  }
    console.log("ボタンが押されました！");
  }, [timeRemaining]);


  // const ATK10 = () => {
  //   if (emonoHp - 10 < 0) {
  //     setCountemono(0);
  //   } else {
  //     setCountemono(emonoHp - 10);
  //   }
  // };

  // const turn = () => {
  //   for (turnEnd - 1 < 0) {

  //   }

  return (
    <div>
      <div>
        {/* hello */}
        {/* <button onClick={() => ATK10()}>10タメージ</button> */}
        {/* <AnotherButton /> */}
      </div>
      獲物のHP表示
      <div>{/* <emono1 /> */}</div>
      <div>
        {/* { <ATK10Button /> }
        {<ATK11Button /> } */}
        {currentHp}
        <p>残り時間: {timeRemaining} 秒</p>
        <div>
        <button disabled={buttonDisabled} onClick={() => handleAttack(12, currentHp, setCurrentHp)}>12ダメージ</button>
      </div>
      <div>
        <button disabled={buttonDisabled} onClick={() => handleAttack(10, currentHp, setCurrentHp)}>10ダメージ</button>
      </div>
      </div>
    </div>
  );
}
