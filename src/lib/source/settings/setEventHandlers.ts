import resizeHandler from "../eventhandler/resize";
import {
  touchEndHandler,
  touchMoveHandler,
  touchStartHandler,
} from "../eventhandler/touch";
import wheelHandler from "../eventhandler/wheel";

export const setEventHandlers = () => {
  window.addEventListener("resize", resizeHandler);
  window.addEventListener("wheel", wheelHandler, { passive: false });
  window.addEventListener("touchstart", touchStartHandler, {
    passive: false,
  });
  window.addEventListener("touchmove", touchMoveHandler, {
    passive: false,
  });
  window.addEventListener("touchend", touchEndHandler, {
    passive: false,
  });
  window.addEventListener("touchcancel", touchEndHandler, {
    passive: false,
  });
};
