import playData from "../model/playData";
import { eventControll } from "../controller/eventControll";

export const touchStartHandler = (e: TouchEvent) => {
  e.preventDefault();
  e.stopPropagation();
  const { touchData } = playData;
  const { timeStamp: time } = e;
  const { clientX: startX, clientY: startY } = e.targetTouches[0];
  touchData.setTouchdata({ startX, startY, time });
};
export const touchMoveHandler = (e: TouchEvent) => {
  e.preventDefault();
  e.stopPropagation();
  const { touchData } = playData;
  const { clientY } = e.targetTouches[0];
  const deltaY = clientY - touchData.startY;
  eventControll(deltaY);
};
export const touchEndHandler = (e: TouchEvent) => {
  e.preventDefault();
  e.stopPropagation();
};
