import playData from "../model/playData";
export const checkBoundary = () => {
  const { momentum, scrollData } = playData;

  const { currentScroll, wholeScroll } = scrollData;

  if (currentScroll > wholeScroll) {
    scrollData.setCurrentScroll(wholeScroll);
    momentum.setValue(wholeScroll, "y");
    return false;
  }
  if (currentScroll < 0) {
    scrollData.setCurrentScroll(0);
    momentum.setValue(0, "y");
    return false;
  }

  return true;
};
