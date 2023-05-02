import { CssUpdateProp } from "../interface";
import { calCssValue } from "../utils/calculate";

export default function valOpacity({
  DOM,
  interActionProp,
  progressRatio,
}: CssUpdateProp) {
  const { startRatio, endRatio, value } = interActionProp;
  const opacityCssValue = calCssValue({
    startRatio,
    endRatio,
    progressRatio,
    value,
  });
  if (DOM)
    DOM.style.setProperty("opacity", `${opacityCssValue && opacityCssValue}`);
}
