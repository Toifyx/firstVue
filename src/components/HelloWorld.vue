<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <ul>
    <li>
      <a href="https://vuejs.org" target="_blank">Core Docs</a>
    </li>
  </ul>
  <body>
    <li id="sayhello">{{message}}</li>
  </body>
  <body>
    <span id="app-2" v-bind:title="message_app2">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  </body>
  <body id = "seeBody">
    <p id="textSee">{{seeText}}</p>
  </body>
  <button v-on:click="button_1()">点我</button>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  seeFlg: true,
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      message_app2: new Date().toLocaleString(),
      message: "Hello Vue!",
      seeText: "现在你看到我了",
      seeFlg: true
    };
  },
  methods: {
    button_1: function() {
      console.log("1:", this.seeFlg);
      if (this.seeFlg) {
        (this.seeFlg = false), (this.seeText = " ");
      } else {
        (this.seeFlg = true), (this.seeText = "现在你看到我了");
      }
      console.log("1:", this.seeFlg);
      console.log("");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #184ddf;
}
#sayhello {
  color: #e79110;
}
#seeBody {
  height: 22px;
}
</style>
