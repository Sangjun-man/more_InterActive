import React, { useRef } from "react";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";
import { initStoryBoard } from "../utils/init";
import { PlayChildInterAction } from "./common";

const actionListValue = (floatRatio: number) => [
  {
    type: InteractionTypes.opacity,
    interActionProps: [
      //시작비율, 끝비율, (0~1) 실제값,
      { startRatio: 0, endRatio: floatRatio, value: [0, 1] },
    ],
  },
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: InteractionTypes.matrix,
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0,
        endRatio: floatRatio,
        value: [
          [1, 0, 0, 1, 0, 10],
          [1, 0, 0, 1, 0, 0],
        ],
      },
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: floatRatio,
        endRatio: 1,
        value: [
          [1, 0, 0, 1, 0, 0],
          [1, 0, 0, 1, 0, 0],
        ],
      },
    ],
  },
];

const PlayFloatAction = ({
  playId,
  startPoint,
  playLength,
  floatRatio,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  floatRatio: number;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = actionListValue(floatRatio);
  const value = initStoryBoard({
    playId,
    startPoint,
    playLength,
    actionList,
  });

  return (
    <PlayChildInterAction initStoryBoard={value} refProp={ref}>
      {children}
    </PlayChildInterAction>
  );
};

export default PlayFloatAction;
