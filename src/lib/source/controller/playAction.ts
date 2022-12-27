import playData from "../model/playData";
import { StoryBoard } from "../interface";
import { concealInteraction, runInteractionByType } from "./valueControll";
import getIdListFromSection from "../utils/getIdListFromSection";

//이벤트 발생때 마다 이 함수를 실행.
const playAction = () => {
  const storyBoard = playData.storyBoard;
  const section = playData.scrollData.section!;

  //섹션 탐색해서, 현재 실행해야할 id리스트 가져오기
  const idList = getIdListFromSection(section);

  if (idList) {
    for (let i in storyBoard) {
      const { playId } = storyBoard[i];
      const currentStory: StoryBoard = playData.storyBoard[playId];
      //idList 안에 있는 액션들은 실행
      if (idList.some((id) => id === playId)) {
        // 인터랙션 type별로 구분해서 함수실행,
        runInteractionByType(currentStory);
      }
      //없으면 DOM 숨겨주기
      else {
        concealInteraction(currentStory);
      }
    }
  }
};

export default playAction;
