import { CssUpdateProp } from "../interface";
import { calCssValue } from "../utils/calculate";

export default function valMatrix({
  DOM,
  interActionProp,
  progressRatio,
}: CssUpdateProp) {
  const { startRatio, endRatio, value } = interActionProp;

  const matrixValue = [];
  if (value[0].length !== 6 || value[1].length !== 6) {
    throw new Error("matrix 값 설정 오류 체크좀요");
  }

  for (let i = 0; i < value[0].length; i++) {
    if (value[0][i] === value[1][i]) {
      matrixValue[i] = value[0][i];
    } else {
      let valuePair: [number, number] = [value[0][i], value[1][i]];
      matrixValue[i] = calCssValue({
        startRatio,
        endRatio,
        progressRatio,
        value: valuePair,
      }).toFixed(3);
    }
  }

  if (DOM) {
    DOM.style.setProperty("transform", `matrix(${matrixValue})`);
    DOM.style.setProperty("webkitTransform", `matrix(${matrixValue})`);
  }
}
