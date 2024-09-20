"use client";
import { setConfig } from "next/config";
import Image from "next/image";
import { useState } from "react";
import { clearInterval } from "timers";
import AnotherButton from "./button/TimeLimited[Button]"; // ファイルパスは適切に修正してください
import ATK10 from "./ATK/ATKj";
import EmonoHp from "./emono/emonoHpjs";
import ATK10Button from "./button/AttacButton";

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
  // const [emonoHp, setCountemono] = useState(100);
  // const [turnEnd, turnCounte] = useState(15);

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
  // }

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
        <ATK10Button />
        <ATK11
      </div>
    </div>
  );
}
