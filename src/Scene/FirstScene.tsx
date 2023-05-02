import { css } from "@emotion/react";
import React from "react";
import TestImage from "src/component/TestImage";
import { PlayOpacity } from "src/lib/source/components";
import { PlayScene } from "src/lib/source/components/common";
import SceneModel from "src/lib/source/model/scene";

function FirstScene() {
  //씬별로 startPoint, length 설정할것 모아두기
  const { sceneId, interaction, playIds } = new SceneModel("scene1", {
    a: { start: 0, length: 2 },
    b: { start: 2, length: 2 },
    c: { start: 4, length: 2 },
    d: { start: 6, length: 2 },
  });

  return (
    <PlayScene
      sceneId={sceneId}
      sceneInteraction={interaction}
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
        <PlayOpacity playId={playIds.a}>
          안녕하세요?
          <TestImage />
        </PlayOpacity>
        <PlayOpacity playId={playIds.b}>반갑습니다?</PlayOpacity>
        <PlayOpacity playId={playIds.c}>반가워요??</PlayOpacity>
        <PlayOpacity playId={playIds.d}>안녕하십니까??</PlayOpacity>
      </div>
    </PlayScene>
  );
}

export default FirstScene;
