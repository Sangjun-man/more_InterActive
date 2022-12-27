import { SectionElem } from "../interface";

interface IScrollModel {
  currentScroll: number;
  section: Array<SectionElem> | null;
}

export class ScrollModel implements IScrollModel {
  currentScroll;
  section;
  constructor() {
    this.currentScroll = 0;
    this.section = [] as Array<SectionElem>;
    this.setCurrentScroll = this.setCurrentScroll.bind(this);
  }

  get wholeScroll() {
    return (
      this.section[this.section.length - 1] &&
      this.section[this.section.length - 1].endPoint
    );
  }

  setCurrentScroll(scroll: number) {
    this.currentScroll = scroll;
  }

  addCurrentScroll(scroll: number) {
    this.currentScroll += scroll;
  }
}

export default ScrollModel;
