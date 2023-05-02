/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";
import { initStoryBoard } from "../utils/init";
import { PlayChildInterAction } from "./common";

const actionListValue = (color: [string, string]) => [
  {
    type: InteractionTypes.backgroundColor,
    interActionProps: [
      //시작비율, 끝비율, (0~1) 실제값,
      { startRatio: 0, endRatio: 1, value: [color[0], color[1]] },
    ],
  },
];

const PlayBackgroundColor = ({
  playId,
  startPoint,
  playLength,
  color,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  color: [string, string];
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = actionListValue(color);
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

export default PlayBackgroundColor;
