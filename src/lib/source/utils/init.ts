import { Action } from "../interface";

export const initStoryBoard = ({
  playId,
  startPoint,
  playLength,
  actionList,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  actionList: Array<Action>;
}) => ({
  startPoint: startPoint,
  playLength: playLength,
  startScrollValue: 0,
  endScrollValue: 0,
  DOM: null,
  playId: playId,
  actionList: actionList,
});
