import { RefObject } from "react";
import playData from "../model/playData";
import { Action, StoryBoard } from "../interface";
import { calPlayLength, calStartPoint } from "../utils/calculate";
import { StoryPlayingData } from "../model/scene";

export const sceneInit = ({
  sceneId,
  sceneInteraction,
}: {
  sceneId: string;
  sceneInteraction: { [key: string]: StoryPlayingData };
}) => {
  console.log(sceneId, sceneInteraction);
  playData.scene[sceneId] = sceneInteraction;
};

export const componentInit = ({
  playId,
  startPoint,
  playLength,
  actionList,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  actionList: Array<Action>;
}) => {
  const story: StoryBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
    startPoint: startPoint,
    playLength: playLength,
    actionList: [...actionList],
  };
  //playData 인스턴스에 정보 등록
  if (playData.storyBoard[playId])
    throw new Error(`이미 등록된 playId입니다. playId:${playId}`);
  playData.storyBoard[playId] = story;
};

export const componentScrollValueSetting = ({
  playId,
  ref,
}: {
  playId: string;
  ref: RefObject<HTMLDivElement>;
}) => {
  // 해당 인터랙션 실제 재생 정보 세팅,
  // 시작 scrollPoint, 재생 길이, 끝 scrollPoint 등에 대한 설정 진행

  const { displayData } = playData;
  const thisStory = playData.storyBoard[playId];

  //storyBoard에 인터랙션 등록
  if (ref && ref.current && thisStory) {
    thisStory.DOM = ref.current;
    thisStory.startScrollValue = calStartPoint(
      displayData.innerHeight,
      thisStory.startPoint
    );
    thisStory.playLength = calPlayLength(
      displayData.innerHeight,
      thisStory.playLength
    );
    thisStory.endScrollValue =
      thisStory.startScrollValue + thisStory.playLength;
  }
};
