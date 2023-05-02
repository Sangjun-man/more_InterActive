import { CssUpdateProp } from "../interface";
import { calCssValue, sliceRGBA } from "../utils/calculate";

export default function valBackgroundColor({
  DOM,
  interActionProp,
  progressRatio,
}: CssUpdateProp) {
  const { startRatio, endRatio, value } = interActionProp;

  const prevRGBA = sliceRGBA(value[0]);
  const nextRGBA = sliceRGBA(value[1]);
  const color = [];
  for (let i = 0; i < 4; i++) {
    let RGBAvalue = calCssValue({
      startRatio,
      endRatio,
      progressRatio,
      value: [prevRGBA[i], nextRGBA[i]],
    });
    color[i] = RGBAvalue.toFixed(0);
  }
  if (DOM)
    DOM.style.setProperty(
      "backgroundColor",
      `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`
    );
}
