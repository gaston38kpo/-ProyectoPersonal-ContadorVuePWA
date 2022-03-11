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
      this.count--;
    },
    addCount() {
      this.count++;          
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
