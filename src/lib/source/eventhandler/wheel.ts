import { eventControll } from "../controller/eventControll";

const wheelHandler = (e: WheelEvent) => {
  e.preventDefault();
  e.stopPropagation();
  eventControll(e.deltaY);
};

export default wheelHandler;
