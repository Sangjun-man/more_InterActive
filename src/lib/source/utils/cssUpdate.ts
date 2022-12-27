import { css } from "@emotion/react";

const styleUpdate = (DOM: HTMLElement, cssProps: CSS) => {
  DOM.style.cssText = cssProps.toString();
};
export default styleUpdate;

const a = css`
  height: 1;
`;
