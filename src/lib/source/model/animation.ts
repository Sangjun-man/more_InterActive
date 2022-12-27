import { SectionElem } from "../interface";

interface IScroll {
  wholeScroll: number;
  currentScroll: number;
  section: Array<SectionElem> | null;
  rafId: any;
}

export class Scroll implements IScroll {
  wholeScroll;
  currentScroll;
  section;
  rafId;
  constructor() {
    this.wholeScroll = 0;
    this.currentScroll = 0;
    this.section = [] as Array<SectionElem>;
    this.rafId = 0;
  }
}

export default Scroll;
