import { CssUpdateProp, StoryBoard } from "../interface";
import { calProgressRatio } from "../utils/calculate";
import { valBlur, valOpacity, valMatrix, valBackgroundColor } from "../view";
import playData from "../model/playData";
import { InteractionTypes } from "../interface/interactionTypes";

export const concealInteraction = (story: StoryBoard) => {
  const { DOM } = story!;
  if (DOM) {
    DOM.style.zIndex = "-1";
    DOM.style.visibility = "hidden";
  }
};

export const runInteractionByType = (story: StoryBoard) => {
  const { currentScroll } = playData.scrollData;
  const { startScrollValue, endScrollValue, actionList, DOM } = story;
  const progressRatio = calProgressRatio({
    start: startScrollValue,
    end: endScrollValue,
    progress: currentScroll,
  });

  // 현재 실행해야 하는 모든 액션에 대해 실행
  for (const action of actionList) {
    const { interActionProps, type } = action;

    // 액션 안의 모든 인터랙션 실행
    for (const interActionProp of interActionProps) {
      const { startRatio, endRatio } = interActionProp;

      if (!DOM) {
        throw new Error("업데이트해줄 DOM이 지정되어있지 않습니다");
      }

      if (startRatio > progressRatio || progressRatio > endRatio) {
        return;
      }

      DOM.style.visibility = "visible";
      DOM.style.zIndex = "0";

      const cssUpdateProps: CssUpdateProp = {
        DOM,
        interActionProp,
        progressRatio,
      };

      reduceInteraction(type, cssUpdateProps);
    }
  }
};

const reduceInteraction = (
  type: InteractionTypes,
  cssUpdateProps: CssUpdateProp
) => {
  switch (type) {
    case InteractionTypes.blur: {
      valBlur(cssUpdateProps);
      return;
    }
    case InteractionTypes.opacity: {
      valOpacity(cssUpdateProps);
      return;
    }
    case InteractionTypes.matrix: {
      valMatrix(cssUpdateProps);
      return;
    }
    case InteractionTypes.backgroundColor: {
      valBackgroundColor(cssUpdateProps);
      return;
    }
    default: {
      return;
    }
  }
};
