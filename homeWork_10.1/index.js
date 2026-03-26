let ladder = {
  step: 0,

  up: function () {
    this.step += 1;
    return this;
  },
  down: function () {
    this.step -= 1;
    return this;
  },
  showStep: function () {
    return this.step;
  },
}

console.log(ladder.up().up().down().showStep())

