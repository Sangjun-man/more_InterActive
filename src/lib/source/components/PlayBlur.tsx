/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";
import { initStoryBoard } from "../utils/init";
import { PlayInterAction } from "./common";

const actionList = [
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: InteractionTypes.blur,
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0,
        endRatio: 1,
        value: [0, 40],
      },
    ],
  },
];

const PlayTitle = ({
  playId,
  startPoint,
  playLength,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

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

export default PlayTitle;
