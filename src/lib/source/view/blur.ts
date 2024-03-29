import { CssUpdateProp } from "../interface";
import { calCssValue } from "../utils/calculate";

export default function valBlur({
  DOM,
  interActionProp,
  progressRatio,
}: CssUpdateProp) {
  const { startRatio, endRatio, value } = interActionProp;
  const blurCssValue = calCssValue({
    startRatio,
    endRatio,
    progressRatio,
    value,
  });
  if (DOM)
    if (!DOM.children[0] || DOM.children[0].id !== "blur-filter") {
      const filterElem = document.createElement("div");
      filterElem.id = "blur-filter";
      filterElem.style.width = "100%";
      filterElem.style.height = "100%";
      filterElem.style.position = "absolute";
      filterElem.style.top = "0px";
      filterElem.style.left = "0px";
      DOM.insertBefore(filterElem, DOM.firstChild);
    }

  if (DOM && DOM.firstElementChild) {
    const firstElementChild = DOM.firstElementChild as HTMLElement;
    firstElementChild.style.setProperty(
      "backdropFilter",
      `blur(${blurCssValue && blurCssValue.toFixed(2)}px)`
    );
    firstElementChild.style.setProperty(
      "webkitBackdropFilter",
      `blur(${blurCssValue && blurCssValue.toFixed(2)}px)`
    );
  }
}
