const app = Vue.createApp({
  data() {
    return {
      title: "Contador App - Vue",
      count: 0,
    };
  },
  methods: {
    disCount() {
      // console.log("click");
      this.count--;
    },
    addCount() {
      this.count++;
    },
    modCount(instruction = "add", limit = 1) {
      if (instruction === "add") {
        this.count += limit;
      } else if (instruction === "sub") {
        this.count -= limit;
      }
    },
  },
});
