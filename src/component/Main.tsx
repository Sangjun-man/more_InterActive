import { useEffect, useLayoutEffect, useState } from "react";
import {
  setDisplay,
  setEventHandlers,
  setDomHeight,
  setStorySection,
} from "../lib/source/settings";
import {
  PlayContactUs,
  PlayFloatAction,
  PlayOpacity,
} from "../lib/source/components";
import { PlayScene } from "../lib/source/components/common";
import InteractionContainer from "../lib/source/components/common/InteractionContainer";
import { css } from "@emotion/react";

type MainProps = {};

const rootID = "intro-root";

const Main = ({}: MainProps) => {
  useLayoutEffect(() => {
    setDisplay();
    setEventHandlers();
  }, []);
  useEffect(() => {
    setStorySection();
    setDomHeight(rootID);
  }, []);
  //씬별로 startPoint, length 설정할것 모아두기
  const scene1 = [
    { start: 0, length: 2 },
    { start: 2, length: 2 },
    { start: 4, length: 2 },
    { start: 6, length: 2 },
    { start: 8, length: 2 },
    { start: 10, length: 2 },
  ];
  const scene2 = { start: 12, length: 3 };
  return (
    <InteractionContainer id={rootID}>
      <PlayScene
        playId="scene-1"
        startPoint={scene1[0].start}
        playLength={scene1[0].length * 6}
        firstScene={true}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <PlayOpacity
            playId="scene-1-title-0"
            startPoint={scene1[0].start}
            playLength={scene1[0].length}
          >
            안녕하세요?
          </PlayOpacity>
          <PlayOpacity
            playId="scene-1-title-1"
            startPoint={scene1[1].start}
            playLength={scene1[1].length}
          >
            안녕하세요?
          </PlayOpacity>
          <PlayOpacity
            playId="scene-1-title-2"
            startPoint={scene1[2].start}
            playLength={scene1[2].length}
          >
            안녕하세요?
          </PlayOpacity>
          <PlayOpacity
            playId="scene-1-title-3"
            startPoint={scene1[3].start}
            playLength={scene1[3].length}
          >
            안녕하세요?
          </PlayOpacity>
          <PlayOpacity
            playId="scene-1-title-4"
            startPoint={scene1[4].start}
            playLength={scene1[4].length}
          >
            안녕하세요?
          </PlayOpacity>
          <PlayOpacity
            playId="scene-1-title-5"
            startPoint={scene1[5].start}
            playLength={scene1[5].length}
          >
            안녕하세요?
          </PlayOpacity>
        </div>
      </PlayScene>
      <PlayScene
        playId="scene-2"
        startPoint={scene2.start}
        playLength={scene2.length}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <PlayFloatAction
            playId="scene-2-float"
            startPoint={scene2.start}
            playLength={scene2.length}
            floatRatio={0.3}
          >
            <div>float</div>
          </PlayFloatAction>
          <PlayFloatAction
            playId="scene-2-float2"
            startPoint={scene2.start}
            playLength={scene2.length}
            floatRatio={0.2}
          >
            <div>float</div>
          </PlayFloatAction>
        </div>
      </PlayScene>
    </InteractionContainer>
  );
};
export default Main;
