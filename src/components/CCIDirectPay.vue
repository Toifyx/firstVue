<template>
<html>
  <head>
    <title>信用卡分期付款：CCIDirectPay</title>
    <link href="css/sdk.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  </head>

  <body>
    <form name="form1" @submit.prevent="submit">
      <div>
        <input type="hidden" name="type" value="CCIDirectPay" />
        <input type="hidden" name="characterSet" value="00" />
        <input type="hidden" name="merchantId" value="888009942150035" />
        <input type="hidden" name="requestId" v-model="orderId" />
        <input type="hidden" name="callbackUrl" value="http://10.9.10.15:17011/uatipsdemo02/callback201.jsp" />
        <input type="hidden" name="notifyUrl" value="http://10.240.192.188:17011/uatipsdemo02/notify_url201.jsp" />
        <input type="hidden" name="ipAddress" value="58.20.43.175" />
        <input type="hidden" name="signType" value="MD5" />
        <input type="hidden" name="merAcDate" value="20191219" />

        
        <input
          type="hidden"
          name="reqSignFileds"
          value="characterSet|callbackUrl|notifyUrl|ipAddress|merchantId|requestId|signType|type|version|amount|bankAbbr|installmentNum|currency|orderDate|orderId|merAcDate|period|periodUnit|merchantAbbr|productDesc|productId|productName|productNum|reserved1|reserved2|userToken|showUrl|couponsFlag|mercFeeType|"
        />
        <input
          type="hidden"
          name="signKey"
          value="XySTO40mWspytEELUmU4mGPM1aMmDpxyf02pHFnWXcUO85jd07HjepYlNjAMLg3p"
        />
      </div>
      <br />
      <center>
        <font size="2" color="black" face="Verdana">
          <b>信用卡分期付款(CCIDirectPay)</b>
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
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">版本号</td>
            <td>
              <select name="version">
                <option value="2.0.0">2.0.0</option>
                <option value="2.0.1">2.0.1</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">行用卡分期期数</td>
            <td>
              <input type="text" name="installmentNum" value="1" />
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
              <input type="text" name="orderDate" v-model="orderDate"/>
              <font color="red">*商户发起请求的时间; 年年年年月月日日</font>
            </td>
          </tr>
          <tr>
            <td class="field">商户订单号</td>
            <td>
              <input type="text" name="orderId" v-model="orderId"/>
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
                <option value="02" selected="selected">02-日</option>
                <option value="03">03-月</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">商户展示名称</td>
            <td>
              <input type="text" name="merchantAbbr" value="zhanshi" />
            </td>
          </tr>
          <tr>
            <td class="field">商品描述</td>
            <td>
              <input type="text" name="productDesc" value="miaoshu" />
            </td>
          </tr>
          <tr>
            <td class="field">商品编号</td>
            <td>
              <input type="text" name="productId" value="bianhao" />
            </td>
          </tr>
          <tr>
            <td class="field">商品名称</td>
            <td>
              <input type="text" name="productName" value="mingcheng" />
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
              <input type="text" name="reserved1" value="baoliu1" />
            </td>
          </tr>
          <tr>
            <td class="field">保留字段2</td>
            <td>
              <input type="text" name="reserved2" value="baoliu2" />
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
            <td class="field">分期费率类型</td>
            <td>
              <input type="text" name="mercFeeType" value />
            </td>
          </tr>
          <tr>
            <td class="field"></td>
            <td>
              <input type="Submit" value="提交" id="Submit" name="submit" />
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
import { getNowFormatDate } from "../utils/dateUtils";

export default {
  data() {
    return {
      orderDate: getNowFormatDate(),
      orderId: Date.parse(new Date())
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
    }
  }
};
</script>
