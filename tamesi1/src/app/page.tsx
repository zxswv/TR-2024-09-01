'use client'
import { setConfig } from "next/config";
import Image from "next/image";
import { useState } from "react";

var tannEnd = 0

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

  const attackToEmono = () => {
    if (emonoHp - 10 < 0) {
      setCountemono(0)
    }else { 
      setCountemono(emonoHp - 10);
    }
  }
  
  return (
  <div>
    <div>
    {/* hello  */}
    {/* <p>{tannEnd}</p> */}
    
      <button onClick={() => attackToEmono()}>10タメージ</button>
    </div>
    <div>{emonoHp}</div>
  </div>
  );
}
