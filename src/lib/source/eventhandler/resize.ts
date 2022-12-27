import { setDisplay, setStorySection } from "../settings";

const resizeHandler = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  setDisplay();
  setStorySection();
};

export default resizeHandler;
