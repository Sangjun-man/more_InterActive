/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { StoryPlayingData } from "../../model/scene";
import { sceneInit } from "../../settings/setComponent";

const Scene = ({
  sceneId,
  children,
  sceneInteraction,
  firstScene = false,
  lastScene = false,
}: {
  sceneId: string;
  children: React.ReactNode;
  sceneInteraction: { [key: string]: StoryPlayingData };
  firstScene?: boolean;
  lastScene?: boolean;
}) => {
  sceneInit({ sceneId, sceneInteraction });

  return (
    <div id={sceneId} css={sceneStyle(firstScene, lastScene)}>
      {children}
    </div>
  );
};

export default Scene;

const sceneStyle = (firstScene: boolean, lastScene: boolean) => css`
  visibility: ${firstScene ? "visible" : "hidden"};
  position: ${lastScene ? "relative" : "fixed"};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
