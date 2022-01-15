const app = Vue.createApp({
  data() {
    return {
      title: "Contador App - Vue",
      count: 0,
      interval: null,
      isStopInterval: false,
    };
  },
  methods: {
    disCount() {
      setTimeout(() => {
        this.isStopInterval = false;
        const refreshIntervalId = setInterval(() => {
          this.count--;
          if (this.isStopInterval) {
            clearInterval(refreshIntervalId);
          }
        }, 150);
      }, 500);
    },
    addCount() {
      setTimeout(() => {
        this.isStopInterval = false;
        const refreshIntervalId = setInterval(() => {
          this.count++;
          if (this.isStopInterval) {
            clearInterval(refreshIntervalId);
          }
        }, 150);
      }, 500);
    },
    stopCount() {
      this.isStopInterval = true;
    },
    modCount(instruction = "add", limit = 1) {
      clearInterval(this.interval);
      if (instruction === "add") {
        this.count += limit;
      } else if (instruction === "sub") {
        this.count -= limit;
      }
    },
  },
});
