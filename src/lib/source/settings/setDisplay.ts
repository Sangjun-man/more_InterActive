//디스플레이 크기, 종류 관련 설정 여기에

import playData from "../model/playData";

export const setDisplay = () => {
  const { displayData } = playData;

  if (!window || !navigator) {
    throw new Error("window 객체가 없습니다.");
  }
  const userAgent = navigator.userAgent;

  const { innerWidth, innerHeight } = window;

  displayData.configure(userAgent, { innerWidth, innerHeight });
};
