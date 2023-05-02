import React, { useRef } from "react";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";
import { initStoryBoard } from "../utils/init";
import { PlayInterAction } from "./common";
import { getPlayingDataFromScene } from "../utils/getPlayingDataFromScene";

const actionListValue = (scale: [number, number], scaleRatio: number) => [
  {
    type: InteractionTypes.matrix,
    interActionProps: [
      //시작비율, 끝비율, (0~1) 실제값,
      {
        startRatio: 0,
        endRatio: scaleRatio,
        value: [
          [scale[0], 0, 0, scale[0], 0, 0],
          [scale[1], 0, 0, scale[1], 0, 0],
        ],
      },
      {
        startRatio: scaleRatio,
        endRatio: 1,
        value: [
          [scale[1], 0, 0, scale[1], 0, 0],
          [scale[1], 0, 0, scale[1], 0, 0],
        ],
      },
    ],
  },
];

const PlayScale = ({
  playId,
  scale = [0, 1],
  scaleRatio = 1,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  scale?: [number, number];
  scaleRatio?: number;

  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { startPoint, playLength } = getPlayingDataFromScene(playId);
  const actionList = actionListValue(scale, scaleRatio);
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

export default PlayScale;
