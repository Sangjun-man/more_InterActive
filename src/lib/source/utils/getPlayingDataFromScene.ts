import playData from "../model/playData";

export const getPlayingDataFromScene = (id: string) => {
  const [sceneId, playId] = id.split("_");
  const scene = playData.scene[sceneId];
  const { start, length } = scene[playId];
  return { startPoint: start, playLength: length };
};
