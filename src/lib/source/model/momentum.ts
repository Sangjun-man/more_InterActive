interface IMomentumModel {
  x: number;
  y: number;
}

type Axis = "x" | "y";

class MomentumModel implements IMomentumModel {
  x;
  y;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  setValue(value: number, axis: Axis) {
    return (this[axis] = value);
  }

  add(value: number, axis: Axis) {
    return (this[axis] += value);
  }

  sign(axis: Axis) {
    return Math.sign(this[axis]);
  }

  abs(axis: Axis) {
    return Math.abs(this[axis]);
  }
}

export default MomentumModel;
