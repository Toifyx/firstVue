<template>
<html>
  <H1>
    <title>直接支付(普通)：DirectPay</title>
  </H1>

  <body>
    <form name="form1" @submit.prevent="submit">
      <br />
      <center>
        <font size="2" color="black" face="Verdana">
          <b>直接支付(普通)：DirectPay</b>
        </font>
        <br />
        <br />
        <table class="api">
          <tr>
            <td class="field">订单金额</td>
            <td>
              <input type="text" name="amount" maxlength="20" value="1000" />
              <font color="red">*订单金额，以分为单位</font>
            </td>
          </tr>
          <tr>
            <td class="field">银行代码</td>
            <td>
              <select name="bankAbbr">
                <option value="ICBC">工商银行</option>
                <option value="CMB">招商银行</option>
                <option value="CCB">建设银行</option>
                <option value="ABC">农业银行</option>
                <option value="BOC">中国银行</option>
                <option value="SPDB">上海浦东发展银行</option>
                <option value="BCOM">交通银行</option>
                <option value="CMBC">民生银行</option>
                <option value="SDB">深圳发展银行</option>
                <option value="GDB">广东发展银行</option>
                <option value="CITIC">中信银行</option>
                <option value="HXB">华夏银行</option>
                <option value="FIB">兴业银行</option>
                <option value="PSBC">中国邮政储蓄</option>
                <option value="CSCB">长沙银行</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">币种</td>
            <td>
              <select name="currency">
                <option value="00">CNY-可提现</option>
                <option value="01">CMY-不可提现</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">订单日期</td>
            <td>
              <input name="orderDate" v-model="orderDate" v-bind="orderDae" type="text" />
              <font color="red">*商户发起请求的时间; 年年年年月月日日</font>
            </td>
          </tr>
          <tr>
            <td class="field">商户订单号</td>
            <td>
              <input type="text" name="orderId" v-model="orderId" v-bind="orderId" />
              <font color="red">*</font>
            </td>
          </tr>
          <tr>
            <td class="field">有效期数量</td>
            <td>
              <input type="text" name="period" value="1" />
              <font color="red">*数字</font>
            </td>
          </tr>
          <tr>
            <td class="field">有效期单位</td>
            <td>
              <select name="periodUnit">
                <option value="00">00-分</option>
                <option value="01">01-小时</option>
                <option value="02">02-日</option>
                <option value="03">03-月</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">商户展示名称</td>
            <td>
              <input type="text" name="merchantAbbr" value="商户展示名称1" />
            </td>
          </tr>
          <tr>
            <td class="field">商品描述</td>
            <td>
              <input type="text" name="productDesc" value="商品描述01" />
            </td>
          </tr>
          <tr>
            <td class="field">商品编号</td>
            <td>
              <input type="text" name="productId" value="商品编号01" />
            </td>
          </tr>
          <tr>
            <td class="field">商品名称</td>
            <td>
              <input type="text" name="productName" value="测试商品01" />
              <font color="red">*</font>
            </td>
          </tr>
          <tr>
            <td class="field">商品数量</td>
            <td>
              <input type="text" name="productNum" value="1" />
            </td>
          </tr>
          <tr>
            <td class="field">保留字段1</td>
            <td>
              <input type="text" name="reserved1" value="保留数据1" />
            </td>
          </tr>
          <tr>
            <td class="field">保留字段2</td>
            <td>
              <input type="text" name="reserved2" value="保留数据2" />
            </td>
          </tr>
          <tr>
            <td class="field">用户标识</td>
            <td>
              <input type="text" name="userToken" value="13548649407" />
              <font color="red">*</font>
            </td>
          </tr>
          <tr>
            <td class="field">商品展示地址</td>
            <td>
              <input type="text" name="showUrl" value />
            </td>
          </tr>
          <tr>
            <td class="field">营销工具使用控制</td>
            <td>
              <input type="text" name="couponsFlag" value />
            </td>
          </tr>
          <tr>
            <td class="field"></td>
            <td>
              <!-- <input type="Submit" value="提交" id="Submit" name="submit"/> -->
              <button formType="submit">提交表单</button>
            </td>
          </tr>
        </table>
      </center>
      <a id="HomeLink" class="home" href="/">首页</a>
    </form>
  </body>
</html>
</template>
<script>
import { getFormData } from "../utils/formUtils";

export default {
  data() {
    return {
      orderDate: this.getNowFormatDate(),
      orderId: Date.parse(new Date()),
      message: "test_!"
    };
  },
  methods: {
    submit(e) {
      const data = getFormData(e.target);

      console.log(data);
      this.$http({
        url: this.$http.adornUrl("/simulator"),
        method: "post",
        data: this.$http.adornData(data)
      }).then(({ data }) => {
        if (data && data.msgCd === "OPR00000") {
          alert(data.body);
        } else {
          this.$message.error(data.msgInfo);
        }
      });
    },
    getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + "" + month + "" + strDate;
    return currentdate;
  }
  }
};
</script>