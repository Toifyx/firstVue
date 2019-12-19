<template>
<html>
  <head>
    <title>发红包管理-发红包接口(BnsSndHongbao)</title>
    <link href="css/sdk.css" rel="stylesheet" type="text/css" />
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  </head>

  <body>
    <form name="form1" method="post" @submit.prevent="submit">
      <div>
        <input type="hidden" name="type" value="BnsSndHongbao" />
        <input type="hidden" name="requestId" v-model="requestId" />
        <input type="hidden" name="signType" value="MD5" />
        <input type="hidden" name="url" value="http://172.16.49.68:31051/ips/cmpayService" />
        <input type="hidden" name="merchantId" value="888009941120001" />
        <input type="hidden" name="version" value="1.0.0" />
        <input
          type="hidden"
          name="reqSignFileds"
          value="merchantId|requestId|signType|type|version|mblNo|bnsTyp|bnsNum|bnsAmt|sndCnl|payRtnUrl|"
        />
        <input
          type="hidden"
          name="signKey"
          value="zjnbRTyrsJdrNSyskLhdrqx5PFveokynyUBo8ttar1R83Nx0QbCb050HmQjSfjg1"
        />
      </div>
      <br />
      <center>
        <font size="2" color="black" face="Verdana">
          <b>发红包管理-发红包接口(BnsSndHongbao)</b>
        </font>
        <br />
        <br />
        <table class="api">
          <tr>
            <td class="field">发红包手机号</td>
            <td>
              <input type="text" name="mblNo" maxlength="12" value="18229806979" />
            </td>
          </tr>
          <tr>
            <td class="field">红包类型</td>
            <td>
              <select name="bnsTyp">
                <option value="0">随机红包</option>
                <option value="1">等额红包</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">红包个数</td>
            <td>
              <input type="text" name="bnsNum" maxlength="11" value="1" />
            </td>
          </tr>
          <tr>
            <td class="field">红包金额</td>
            <td>
              <input type="text" name="bnsAmt" maxlength="64" value="1" />
            </td>
          </tr>
          <tr>
            <td class="field">发放渠道</td>
            <td>
              <select name="sndCnl">
                <option value="12">群红包</option>
                <option value="11">点对点红包</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="field">领取人字符串</td>
            <td>
              <input type="text" name="recMblStr" maxlength="64" value />
            </td>
          </tr>
          <tr>
            <td class="field">后台通知地址</td>
            <td>
              <input
                type="text"
                name="payRtnUrl"
                maxlength="64"
                value="https://117.107.139.34:8443/rbhb/hbCashBagCallBack"
              />
            </td>
          </tr>
          <tr>
            <td class="field">红包备注</td>
            <td>
              <input type="text" name="bnsWish" maxlength="64" value="接口红包，发财发财" />
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
      requestId: Date.parse(new Date())
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
