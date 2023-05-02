import { css } from "@emotion/react";
import React from "react";
import { PlayFloatAction } from "src/lib/source/components";
import { PlayScene } from "src/lib/source/components/common";
import SceneModel from "src/lib/source/model/scene";

function SecondScene() {
  const {
    sceneId: sceneId2,
    interaction: interaction2,
    playIds: playIds2,
  } = new SceneModel("scene2", {
    float1: { start: 8, length: 2 },
    float2: { start: 8, length: 2 },
  });
  return (
    <PlayScene sceneId={sceneId2} sceneInteraction={interaction2}>
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <PlayFloatAction playId={playIds2.float1} floatRatio={0.3}>
          <div>제작중</div>
        </PlayFloatAction>
        <PlayFloatAction playId={playIds2.float2} floatRatio={0.2}>
          <div>제작중</div>
        </PlayFloatAction>
      </div>
    </PlayScene>
  );
}

export default SecondScene;
