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
          v-bind:class="{classObjectA:index==0,classObjectB:index==1, classObjectC:index==2}"
          v-for="(todo, index) in todos"
          v-bind:key="index"
        >{{ todo.text}}</Div>
      </ol>
    </div>
    <button @click="button_2(circle++,todos)">点我旋转</button>
    <button @click="gotolink" class="btn btn-success">点击跳转页面</button>


  </body>
  <body>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  </body>
</div>
</template>

<script>
import {shuffle} from '../js/utils.js'

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
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" }
      ],
      circle: 0,
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    //
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  computed: {},
  methods: {
    button_1: function() {
      if (this.seeFlg) {
        this.seeFlg = false;
      } else {
        this.seeFlg = true;
      }
    },
    button_2: function() {
      this.todos = shuffle(this.todos);
    },
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    },
    gotolink(){
          //点击跳转至上次浏览页面
         // this.$router.go(-1)

          //指定跳转地址
          this.$router.replace('/mkmweb')
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
