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
  <body id="body-app-3">
    <div id="seeBody">
      <p v-if="seeFlg" id="textSee">{{seeText}}</p>
      <p v-if="!seeFlg" id="textSee"></p>
    </div>
    <button @click="button_1()">使劲点我</button>
  </body>
  <body id="body-app-4">
    <div id="app-4">
      <ol>
        <Div
          v-bind:class="{classObjectA:todo.index==0,classObjectB:todo.index==1, classObjectC:todo.index==2}"
          v-for="(todo) in todos"
          v-bind:key="todo"
        >{{ todo.text}}</Div>
      </ol>
    </div>
    <button @click="button_2(circle++,todos)">点我旋转</button>
  </body>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  seeFlg: true,
  circle: 0,
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      message_app2: new Date().toLocaleString(),
      message: "Hello Vue!",
      seeText: "现在你看到我了",
      seeFlg: true,
      todos: [
        { text: "学习 JavaScript", index: 0 },
        { text: "学习 Vue", index: 1 },
        { text: "整个牛项目", index: 2 }
      ],
      circle: 0
    };
  },
  created: function () {
    // 
    console.log('a is: ' + this.name)
  },
  computed: {},
  methods: {
    button_1: function() {
      if (this.seeFlg) {
        this.seeFlg = false
      } else {
        this.seeFlg = true
      }
    },
    button_2: function(circle, todos) {
      var tmp = circle % 3
      document.getElementsByClassName('classObjectA')[0].innerHTML =
        todos[tmp++ % 3].text
      document.getElementsByClassName('classObjectB')[0].innerHTML =
        todos[tmp++ % 3].text
      document.getElementsByClassName('classObjectC')[0].innerHTML =
        todos[tmp++ % 3].text
      console.log(document.getElementsByClassName("classObjectA"))
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
  height: 40px;
}
#body-app-3 {
  height: 60px;
}
.classObjectA {
  color: #d810d8;
}
.classObjectB {
  color: #df7818;
}
.classObjectC {
  color: #18df8c;
}
</style>
