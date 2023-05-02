export type ScenePlayingData<T> = { [key in keyof T]: StoryPlayingData };
// | StoryPlayingData[];

export type StoryPlayingData = { start: number; length: number };

interface ISceneModel {
  length: number;
  sceneId: string;
  interaction: { [key: string]: StoryPlayingData };
  playIds: { [key: string]: string };
}
class SceneModel<T extends { [key: string]: StoryPlayingData }>
  implements ISceneModel
{
  length: number;

  sceneId: string;

  interaction: T;

  playIds: { [key in keyof T]: string };

  constructor(sceneId: string, interAction: T) {
    this.interaction = interAction;
    this.sceneId = this.sceneIdValidateAndTransform(sceneId);
    this.length = this.getSceneLength();
    this.playIds = this.getPlayIdOfThisScene();
  }

  /**
   * sceneId에 _가 들어온 경우 -로 바꿔서 리턴
   */
  private sceneIdValidateAndTransform(sceneId: string) {
    if (!sceneId)
      throw new Error(`sceneId가 없습니다. 확인해주세요, sceneId:${sceneId}`);
    return sceneId.replace(/_/g, "-");
  }
  private getSceneLength(): number {
    const interactionList = Object.values(this.interaction);
    const max = Math.max(
      ...interactionList.map((item) => item.start + item.length)
    );
    return max;
  }
  /**
   * sceneId와 PlayId는 "_"로 구분
   *
   */
  private getPlayIdOfThisScene() {
    const playIds: { [key in keyof T]: string } = {} as {
      [key in keyof T]: string;
    };
    const keys = Object.keys(this.interaction) as (keyof T)[];
    keys.forEach((key) => {
      if (/_/g.test(key as string))
        throw new Error(
          `playId에 "_"가 들어갈수 없습니다, 확인해주세요, key:${String(key)}`
        );

      playIds[key] = `${this.sceneId}_${String(key)}`;
    });

    return playIds;
  }
}

export default SceneModel;
