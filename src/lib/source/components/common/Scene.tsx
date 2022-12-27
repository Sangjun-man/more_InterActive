/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { componentInit, componentSetting } from "../../settings";
import { InteractionTypes } from "src/lib/source/interface/interactionTypes";

const Scene = ({
  playId,
  startPoint,
  playLength,
  children,
  firstScene = false,
  lastScene = false,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  firstScene?: boolean;
  lastScene?: boolean;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = [
    {
      type: InteractionTypes.null,
      interActionProps: [
        {
          startRatio: 0,
          endRatio: 1,
          value: [1, 1],
        },
      ],
    },
  ];

  useEffect(() => {
    componentInit({ playId, startPoint, playLength, actionList });
    componentSetting({ playId, ref });
  });

  return (
    <div ref={ref} id={playId} css={sceneStyle(firstScene, lastScene)}>
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
