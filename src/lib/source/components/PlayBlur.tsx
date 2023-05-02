/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";
import { initStoryBoard } from "../utils/init";
import { PlayInterAction } from "./common";
import { getPlayingDataFromScene } from "../utils/getPlayingDataFromScene";

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

  children,
}: {
  playId: string;

  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { startPoint, playLength } = getPlayingDataFromScene(playId);

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
