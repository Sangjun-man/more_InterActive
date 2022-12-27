interface ITouchModel {
  startX: number;
  startY: number;
  time: number;
  setTouchdata({
    startX,
    startY,
    time,
  }: {
    startX: number;
    startY: number;
    time: number;
  }): void;
}

class TouchModel implements ITouchModel {
  startX;
  startY;
  time;
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.time = 0;
    this.setTouchdata = this.setTouchdata.bind(this);
  }

  setTouchdata({
    startX,
    startY,
    time,
  }: {
    startX: number;
    startY: number;
    time: number;
  }) {
    this.startX = startX;
    this.startY = startY;
    this.time = time;
  }
}

export default TouchModel;
