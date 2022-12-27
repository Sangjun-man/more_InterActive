import { checkBoundary } from "../utils/checkBoundary";
import playData from "../model/playData";
import playAction from "./playAction";
import { loop } from "./loop";
import { MAX_ABS_VALUE, MAX_ADD_VALUE } from "../const/momentum";

export const eventControll = (deltaY: number) => {
  const { momentum } = playData;
  //현재 관성 절대값
  const absY = momentum.abs("y");
  //현재 관성 방향(-1 Or 1)
  const signY = momentum.sign("y");

  //경계에 닿았을 경우 취소
  if (!checkBoundary()) {
    playAction();
    return cancelAnimationFrame(playData.rafId);
  }

  //최대 관성 값 지정
  if (absY >= MAX_ABS_VALUE) {
    momentum.setValue(signY * MAX_ABS_VALUE, "y");
  }
  // 아예 멈춰있는 경우에만 애니메이션 실행, 이후에는 관성값만 조절해서 애니메이션 진행
  if (!absY) {
    playData.rafId = requestAnimationFrame(loop);
  }

  //반대방향 스크롤 시 애니메이션 중단 및 관성 해제
  if (momentum.y !== 0 && signY !== Math.sign(deltaY)) {
    momentum.setValue(0, "y");
    cancelAnimationFrame(playData.rafId);
    return;
  }

  //관성 값 추가, 300 이상 추가 제한
  const maxAddValue =
    Math.abs(deltaY) > MAX_ADD_VALUE
      ? Math.sign(deltaY) * MAX_ADD_VALUE
      : deltaY;

  momentum.add(maxAddValue, "y");
};
