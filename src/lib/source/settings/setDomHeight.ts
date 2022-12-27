//스크롤 관련 세팅 코드는 여기에

import playData from "../model/playData";

export const setDomHeight = (rootDomId: string) => {
  const rootDOM: HTMLElement = document.getElementById(rootDomId)!;

  if (!rootDOM) {
    throw new Error(`#${rootDomId}로 만들어진 노드가 없습니다`);
  }

  const { displayData } = playData;
  const { innerHeight } = displayData;
  const { wholeScroll } = playData.scrollData;

  rootDOM.style.height = `${innerHeight + wholeScroll}px`;
};
