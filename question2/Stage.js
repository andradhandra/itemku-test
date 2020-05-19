module.exports = class Stage {
  constructor(stage, failureRate) {
    this._stage = stage;
    this.failureRate = failureRate;
  }

  get stage() {
    return this._stage;
  }
};
