import { InteractionTypes } from "./interactionTypes";

export interface StoryBoard {
  playId: string;
  DOM: HTMLElement | HTMLDivElement | null;
  startPoint: number;
  playLength: number;
  startScrollValue: number;
  endScrollValue: number;
  actionList: Array<Action>;
}

export interface Action {
  type: InteractionTypes;
  interActionProps: Array<InterActionProp>;
}

export interface InterActionProp {
  startRatio: number;
  endRatio: number;
  value: any;
}
export interface SectionElem {
  startPoint: number;
  endPoint: number;
  idList: Array<string>;
}

export interface CssUpdateProp {
  DOM: any;
  progressRatio: number;
  interActionProp: InterActionProp;
}
