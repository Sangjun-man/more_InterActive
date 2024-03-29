import React, { useRef } from "react";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";
import { initStoryBoard } from "../utils/init";
import { PlayInterAction } from "./common";
import { getPlayingDataFromScene } from "../utils/getPlayingDataFromScene";

const actionListValue = (up: boolean, opacityRatio: number) => [
  {
    type: InteractionTypes.opacity,
    interActionProps: [
      //시작비율, 끝비율, (0~1) 실제값,
      { startRatio: 0, endRatio: opacityRatio, value: up ? [0, 1] : [1, 0] },
      { startRatio: opacityRatio, endRatio: 1, value: up ? [1, 1] : [0, 1] },
    ],
  },
];

const PlayOpacity = ({
  playId,
  opacityRatio = 1,
  up = false,
  children,
}: {
  playId: string;
  opacityRatio?: number;
  up?: boolean;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { startPoint, playLength } = getPlayingDataFromScene(playId);
  const actionList = actionListValue(up, opacityRatio);
  const value = initStoryBoard({
    playId,
    startPoint,
    playLength,
    actionList,
  });

  return (
    <PlayInterAction initStoryBoard={value} refProp={ref}>
      {children}
    </PlayInterAction>
  );
};

export default PlayOpacity;
