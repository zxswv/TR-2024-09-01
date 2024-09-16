"use client";
import { setConfig } from "next/config";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { clearInterval } from "timers";
import TimeLimitedButton from "./TimeLimitedButton"; // ファイルパスは適切に修正してください

// const TimeLimitedButton = () => {
//   const [timeRemaining, setTimeRemaining] = useState(10); //時間制限(秒)
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     //時間制限タイマーを開始
//     intervalRef.current = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     //時間切れ：ボタン無効
//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   //時間切れ：ボタン無効
//   useEffect(() => {
//     if (timeRemaining <= 0) {
//       setButtonDisabled(true);
//     }
//   }, [timeRemaining]);

//   const handleClick = () => {
//     // ボタンが押された時の処理
//     console.log("ボタンが押された！");
//   };

//   return (
//     <div>
//       <p>残り時間：{timeRemaining} 秒</p>
//       <button disabled={buttonDisabled} onClick={handleClick}>
//         クリック！
//       </button>
//     </div>
//   );
// };

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
  const [emonoHp, setCountemono] = useState(100);
  const [turnEnd, turnCounte] = useState(15);

  const ATK10 = () => {
    if (emonoHp - 10 < 0) {
      setCountemono(0);
    } else {
      setCountemono(emonoHp - 10);
    }
  };

  // const turn = () => {
  //   for (turnEnd - 1 < 0) {

  //   }
  // }

  return (
    <div>
      <div>
        {/* hello  */}

        <button onClick={() => ATK10()}>10タメージ</button>
        <TimeLimitedButton />
      </div>
      {/* 獲物のHP表示 */}
      <div>{emonoHp}</div>
    </div>
  );
}
