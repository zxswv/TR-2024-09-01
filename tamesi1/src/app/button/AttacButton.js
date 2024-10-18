"use client";
import React, { useState, useRef } from "react";
import { emonoHp, emonoHpList } from "../emono/emonoHpjs";

//単体処理
// export const ATK10Button = () => {
//   const [currentHp, setCurrentHp] = useState(emonoHp.hp); // emonoHp から HP を取得

//   const handleAttack = () => {
//     if (currentHp > 0) {
//       setCurrentHp(currentHp - 10);
//     }
//   };
//   return (
//     <div>
//       <p>HP: {currentHp}</p>
//       <button onClick={handleAttack}>10ダメージ</button>
//     </div>
//   );
// };


  export const handleAttack = (domage, currentHp, setCurrentHp, timeRemaining, buttonDisabled, setButtonDisabled) => {



  
    if (currentHp > 0) {
      setCurrentHp(currentHp - domage);
    } //0より低くしない
  

  };



    // const handleClick = () => {
    //   // ボタンが押されたときの処理

    //   <ATK10 />;
    // };
    //   // 時間切れになったらボタンを無効化
    //   return () => {
    //     if (intervalRef.current) {
    //       clearInterval(intervalRef.current);
    //     }
    //   };
    // }, []);
  
    // useEffect(() => {
    //   // 時間切れになったらボタンを無効化
    //   if (timeRemaining <= 0) {
    //     setButtonDisabled(true);
    //   }
    // }, [timeRemaining]);
  
    // const handleClick = () => {
    //   // ボタンが押されたときの処理
    //   console.log("ボタンが押されました！");
    //   <ATK10 />;
    // };    




// export default

//複数体処理
// const enemyIndex = 1;
// export const ATK11severalButton = () => {
//   // const [currentHp, setCurrentHp] = useState(emonoHpList[enemyIndex].hp);
//   const [currentHp, setCurrentHp] = useState(emonoHp.hp);

//   const handleAttack = () => {
//     if (currentHp > 0) {
//       emonoHpList[enemyIndex].hp = currentHp - 11;
//       setCurrentHp(currentHp - 11);
//     }
//   };
//   return (
//     <div>
//       <p>HP: {currentHp}</p>
//       <button onClick={handleAttack}>11ダメージ</button>
//     </div>
//   );
// };



// 攻撃の処理をまとめた「ATKファイル」いろんな攻撃パタンを作りたいからその処理を書くためのファイル最初はHpを-10する処理を書いてほしい。
// そしてゲームとして攻撃をする動作をボタンで作りたいからボタンのコンポーネントを作ってほしい。
// この時にボタンに「時間制限を設けて20秒」経ったらクリックできないようにしてほしい。
