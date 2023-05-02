import React, { ReactChild, RefObject, useEffect } from "react";
import { componentInit, componentScrollValueSetting } from "../../settings";
import { StoryBoard } from "../../interface";
const InterAction = ({
  refProp,
  initStoryBoard,
  children,
}: {
  refProp: RefObject<HTMLDivElement>;
  initStoryBoard: StoryBoard;
  children: React.ReactNode;
}) => {
  const { playId, startPoint, playLength, actionList } = initStoryBoard;

  componentInit({ playId, startPoint, playLength, actionList });

  useEffect(() => {
    componentScrollValueSetting({ playId, ref: refProp });
  });
  return <div ref={refProp}>{children}</div>;
};

export default InterAction;
