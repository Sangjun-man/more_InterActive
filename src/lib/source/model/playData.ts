import { StoryBoard } from "../interface";
import DisplayModel from "./display";
import MomentumModel from "./momentum";
import { StoryPlayingData } from "./scene";
import ScrollModel from "./scroll";
import TouchModel from "./touch";

interface IPlayData {
  displayData: DisplayModel;
  scrollData: ScrollModel;
  scene: { [sceneId: string]: { [key in string]: StoryPlayingData } };
  storyBoard: { [index: string]: StoryBoard };
  momentum: MomentumModel;
  touchData: TouchModel;
  rafId: number;
}

export class PlayData implements IPlayData {
  displayData;
  scrollData;
  scene: { [sceneId: string]: { [key in string]: StoryPlayingData } };
  storyBoard: { [index: string]: StoryBoard } = {};
  momentum;
  touchData;
  rafId;

  constructor() {
    this.displayData = new DisplayModel();
    this.scrollData = new ScrollModel();
    this.scene = {};
    this.storyBoard = {};
    this.momentum = new MomentumModel();
    this.touchData = new TouchModel();
    this.rafId = 0;
  }
}

// object import하면 읽기전용이라 값을 수정할수가 읎다
const playData: PlayData = new PlayData();
export default playData;
