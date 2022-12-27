import React, {
  ReactChild,
  useEffect,
  RefObject,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { componentInit, componentSetting } from "../../settings";
import { StoryBoard } from "../../interface";

const ChildrenAction = ({
  refProp,
  initStoryBoard,
  children,
}: {
  refProp: RefObject<HTMLDivElement>;
  initStoryBoard: StoryBoard;
  children: React.ReactNode;
}) => {
  const { playId, startPoint, playLength, actionList } = initStoryBoard;

  useEffect(() => {
    componentInit({ playId, startPoint, playLength, actionList });
    componentSetting({ playId, ref: refProp });
  });

  function isChild(
    arg: any
  ): arg is ReactElement<any, string | JSXElementConstructor<any>> {
    return typeof arg !== "string" || arg! == "number";
  }

  const child = React.Children.map(children, (child) => {
    if (isChild(child))
      return React.cloneElement(child, {
        ref: refProp,
      });
  });
  return <div> {child}</div>;
};

export default ChildrenAction;
