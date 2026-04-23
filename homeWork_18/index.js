class Timer {
  #time = 360;
  #isRunning = false;
  #intervalId;

  constructor(element, time) {
    this.element = document.querySelector(element);
    this.time = time;
  }

  startTimer() {
    if (!this.#isRunning) {
      this.updateTimer();
      this.#isRunning = true;
      this.#intervalId = setInterval(() => this.updateTimer(), 1000);
    }
  }

  updateTimer() {
    if (this.#time > 0) {
      this.#time--;
      const minutes = Math.floor(this.#time / 60);
      const seconds = this.#time % 60;

      const mm = String(minutes).padStart(2, "0");
      const ss = String(seconds).padStart(2, "0");

      this.element.textContent = `${mm}:${ss}`;
    } else {
      clearInterval(this.#intervalId);
    }
  }
}

const newTimer = new Timer("#timer");

document.querySelector("button").addEventListener("click", () => {
  newTimer.startTimer();
});
