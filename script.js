const vm = Vue.createApp({
  // data() {
  //   return {
  //     firstName: "sheyman",
  //     lastName: "olaniyan",
  //     middleName: "",
  //     url: "https://google.com",
  //     raw_url: `<a href="https://google.com">google link</a>`,
  //     age: 20,
  //   };
  // },
  // methods: {
  //   // fullName() {
  //   //   console.log("fullNmae was called");
  //   //   return `${this.lastName} ${
  //   //     this.middleName
  //   //   } ${this.firstName.toUpperCase()}`;
  //   // },
  //   increament() {
  //     this.age++;
  //   },
  //   updateLastName(msg, event) {
  //     // event.preventDefault();
  //     console.log(msg);
  //     this.lastName = event.target.value;
  //   },
  //   updateMiddleName(event) {
  //     this.middleName = event.target.value;
  //   },
  // },
  // computed: {
  //   fullName() {
  //     // this.age;
  //     console.log("fullName computed was called");
  //     return `${this.lastName} ${
  //       this.middleName
  //     } ${this.firstName.toUpperCase()}`;
  //   },
  // },
  // watch: {
  //   age(newVal, oldVal) {
  //     setTimeout(() => {
  //       this.age = 20;
  //     }, 2000);
  //   },
  // },
  // -----------binding classes exercise
  // data() {
  //   return {
  //     ispurple: false,
  //     selectedColor: "",
  //     size: 200,
  //   };
  // },
  // computed: {
  //   circleClasses() {
  //     return { purple: this.ispurple };
  //   },
  // },
  // -----------------exercise 3--------------------------
  data() {
    return {
      mode: 1,
    };
  },
  // ------------list rendering----------------------
  // data() {
  //   return {
  //     birds: ["pigeons", "eagles", "doves", "parrots"],
  //     people: [
  //       { name: "john", age: 20 },
  //       { name: "rick", age: 18 },
  //       { name: "amy", age: 33 },
  //     ],
  //   };
  // },
  // -----------------Another lecture-----------------------------
  data() {
    return {
      people: [
        {
          name: "john",
          message: "hello world",
        },
        {
          name: "rick",
          message: "i like pie",
        },
        {
          name: "amy",
          message: "skydiving is fun!",
        },
      ],
    };
  },
  methods: {
    move() {
      const first = this.people.shift();
      this.people.push(first);
    },
  },
  // -------------mounting the vue instance and some other lectures--------------
});

vm.component("hello", {
  template: `<h1>{{message}}</h1>`,
  data() {
    return {
      message: "hello word!",
    };
  },
});

vm.mount(".app");

// setTimeout(() => {
//   vm.mount(".app");
// }, 3000);

// setTimeout(function () {
//   //   vm.$data.firstName = "sheyi";
//   vm.firstName = "sheyi";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "babawale",
//       lastName: "oladele",
//     };
//   },
// }).mount(".app-2");
