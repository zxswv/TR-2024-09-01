export const ATK10 = (emonoHp, setEmonoHp) => {
  if (emonoHp - 10 < 0) {
    setEmonoHp(0);
  } else {
    setEmonoHp(emonoHp - 10);
  }
};

export default ATK10;
