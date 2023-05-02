import React, {
  ReactChild,
  useEffect,
  RefObject,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { componentInit, componentScrollValueSetting } from "../../settings";
import { StoryBoard } from "../../interface";

/**
 * 인터랙션이 일어난 컴포넌트가 랜더링 되기 전 컴포넌트의 재생 정보를 전역 스토리보드에 등록 및 재생 시작 구간, 끝나는 구간에 대해 저장
 *
 */
const ChildInterAction = ({
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
    componentScrollValueSetting({ playId, ref: refProp });
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

export default ChildInterAction;
