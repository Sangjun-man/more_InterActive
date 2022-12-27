import playData from "../model/playData";
import playAction from "./playAction";
import { ACC, MAX_MOVELENGTH_VALUE } from "../const/loop";
export const loop = () => {
  const { momentum, scrollData } = playData;

  const absY = momentum.abs("y");
  const signY = momentum.sign("y");

  if (absY < 1) {
    cancelAnimationFrame(playData.rafId);
    momentum.setValue(0, "y");
    playAction();
    return;
  }

  const nextMoveLength =
    absY * ACC > MAX_MOVELENGTH_VALUE
      ? signY * MAX_MOVELENGTH_VALUE
      : momentum.y * ACC;

  scrollData.addCurrentScroll(nextMoveLength);
  momentum.add(-nextMoveLength, "y");
  window.scrollTo({ top: scrollData.currentScroll });
  playAction();
  playData.rafId = requestAnimationFrame(loop);
};
