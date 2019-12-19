<template>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/form-making/dist/FormMaking.css" />
  </head>
  <body>
    <div id="app">
      <fm-generate-form :data="jsonData" :remote-option="dynamicData" ref="generateForm"></fm-generate-form>
      <el-button @click="handleSubmit()" type="primary">提交</el-button>
    </div>
  </body>
</html>
</template>
 <script src="https://unpkg.com/form-making/public/lib/ace/ace.js"></script>
<script>
export default {
  methods: {
    handleSubmit() {
      this.$refs.generateForm.getData().then(data => {
        console.log(data);
        this.$http({
          url: this.$http.adornUrl("/simulator"),
          method: "post",
          data: this.$http.adornData(data)
        }).then(({ data }) => {
          if (data && data.msgCd === "OPR00000") {
            alert(data.msgCd);
          } else {
            this.$message.error(data.msgInfo);
          }
        });
      });
    }
  },
  data() {
    return {
      jsonData: {
        list: [
          {
            type: "input",
            icon: "icon-input",
            options: {
              width: "50%",
              defaultValue: "默认值",
              required: false,
              dataType: "string",
              pattern: "",
              placeholder: "占位内容",
              disabled: false,
              remoteFunc: "func_1576481812000_15480"
            },
            name: "金额",
            key: "1576481812000_15480",
            model: "amount",
            rules: [
              {
                type: "string",
                message: "单行文本1格式不正确"
              }
            ]
          },
          {
            type: "input",
            icon: "icon-input",
            options: {
              width: "50%",
              defaultValue: "默认值",
              required: false,
              dataType: "string",
              pattern: "",
              placeholder: "占位内容",
              disabled: false,
              remoteFunc: "func_1576481819000_34852"
            },
            name: "描述",
            key: "1576481819000_34852",
            model: "desc",
            rules: [
              {
                type: "string",
                message: "单行文本2格式不正确"
              }
            ]
          },
          {
            type: "select",
            icon: "icon-select",
            options: {
              defaultValue: "Option 1",
              multiple: false,
              disabled: false,
              clearable: false,
              placeholder: "占位内容",
              required: false,
              showLabel: false,
              width: "50%",
              options: [
                {
                  value: "Option 1"
                },
                {
                  value: "Option 2"
                },
                {
                  value: "Option 3"
                }
              ],
              remote: false,
              filterable: false,
              remoteOptions: [],
              props: {
                value: "value",
                label: "label"
              },
              remoteFunc: "func_1576481840000_71779"
            },
            name: "下拉选择框",
            key: "1576481883000_88234",
            model: "select_1576481840000_71779",
            rules: []
          }
        ],
        config: {
          labelWidth: 100,
          labelPosition: "right",
          size: "small"
        }
      }
    };
  }
};
</script>