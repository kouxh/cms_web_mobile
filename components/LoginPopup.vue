<template>
  <div class="login-pupup">
    <van-popup
      round
      closeable
      v-model="loginShow"
      :style="{ width: '280px', height: '278px' }"
    >
      <div class="login-box">
        <div class="title">手机号登录</div>
        <div class="form-box">
          <div class="form-item">
            <div class="top" :class="this.telLine ? 'err-line' : ''">
              <img src="@/static/images/login/mobile_1.png" alt="" />
              <input
                @blur="telBlur()"
                type="text"
                placeholder="请输入手机号"
                maxlength="11"
                v-model="tel"
              />
            </div>
            <div class="tip-message" id="telId">{{ telErr }}</div>
          </div>
          <div class="form-item">
            <div class="top" :class="this.codeLine ? 'err-line' : ''">
              <img src="@/static/images/login/mail_1.png" alt="" />
              <input
                type="text"
                maxlength="6"
                placeholder="请输入验证码"
                v-model="code"
                @blur="codeBlur()"
              />
              <div
                v-show="sendState == 0"
                class="get-code"
                @click="loginGetCode()"
              >
                获取验证码
              </div>
              <div v-show="sendState == 1" class="get-code">发送中…</div>
              <div v-show="sendState == 2" class="get-code">
                重新获取{{ this.countDown.count }}
              </div>
              <div
                v-show="sendState == 3"
                class="get-code"
                @click="loginGetCode()"
              >
                重新获取
              </div>
            </div>
            <div class="tip-message">{{ codeErr }}</div>
          </div>
        </div>
        <div class="account-protocol">
          <van-checkbox
            v-model="checked"
            shape="square"
            class="checkbox-icon"
          ></van-checkbox>
          <div class="protocol">
            我同意并愿意遵守<a>《MAS用户条款》</a>、 <a>《隐私协议》</a>
          </div>
        </div>
        <div class="loginFn" @click="loginCode()">登录</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import config from "@/config/index";
export default {
  data() {
    return {
      loginShow: true, //手机号登录弹出框
      checked: false, //隐私协议
      tel: "", //手机号
      telErr: "", //手机号错误提示
      telLine: false, //是否添加错误提示线
      code: "", //验证码
      codeErr: "", //验证码错误提示
      codeLine: false, //是否添加错误提示线
      countDown: {
        show: true,
        count: "",
        timer: null,
      }, //倒计时
      sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
    };
  },
  mounted() {},
  methods: {
    //手机号验证
    telBlur() {
      let regtel =
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (this.tel == "") {
        this.telLine = true;
        this.telErr = "请输入手机号";
        return false;
      } else if (regtel.test(this.tel) == false) {
        this.telLine = true;
        this.telErr = "请输入正确手机号";
        return false;
      } else {
        this.telErr = "";
        this.telLine = false;
        return true;
      }
    },
    //验证手机号
    codeBlur() {
      if (this.code == "") {
        this.codeLine = true;
        this.codeErr = "请输入验证码";
        return false;
      } else if (/^\d{6}$/.test(this.code) == false) {
        this.codeLine = true;
        this.codeErr = "请输入正确的验证码";
        return false;
      } else {
        this.codeLine = false;
        this.codeErr = "";
        return true;
      }
    },
    //验证码登录验证码接口
    loginGetCode() {
      let _this = this;
      if (_this.telBlur()) {
        _this.CaptchaAppId();
      }
    },
    //获取图形验证码CaptchaAppId
    CaptchaAppId() {
      let _this = this;
      _this.$axios
        .notNeedlogin({
          className: "SendCode",
          classMethod: "getCaptchaAppId",
        })
        .then((res) => {
          if (res.bol) {
            _this.verificationCode(res.data);
          } else {
            return Toast({ duration: 1000, message: res.msg });
          }
        });
    },
    //手机号注册腾讯滑块验证
    verificationCode(val) {
      console.log(val, "getCaptchaAppId");
      let _this = this;
      // let langtion = 'zh-hk';
      let captchaId = val.toString(); //腾讯滑块验证码appid
      //生成一个滑块验证码对象
      var captcha = new TencentCaptcha(captchaId, function (res) {
        console.log(res, "2033330915");
        if (res.ret === 0) {
          // 记得把验证成功的票据和随机字符带到自己接口中去腾讯验证票据的真实性
          _this.getCommonCode(res.ticket, res.randstr);
        } else {
          return false;
        }
      });
      //  滑块多语言调用
      // captcha.initOpts.forceLang = langtion;
      captcha.langFun();
      // 滑块显示
      captcha.show();
    },
    //获取验证码
    getCommonCode(ticket, randstr) {
      let _this = this;
      _this.sendState = 1;
      _this.$axios
        .notNeedlogin({
          data: {
            phone: _this.tel,
            Ticket: ticket,
            Randstr: randstr,
          },
          className: "SendCode",
          classMethod: "sendCode",
        })
        .then((res) => {
          if (res.bol) {
            _this.sendState = 2;
            _this.countDownFn();
          } else {
            _this.sendState = 3;
            Toast({ duration: 1000, message: res.msg });
          }
        });
    },
    // 倒计时
    countDownFn() {
      let _this = this;
      const TIME_COUNT = 60;
      _this.countDown.count = TIME_COUNT;
      _this.countDown.show = false;
      _this.countDown.timer = setInterval(() => {
        if (_this.countDown.count > 0 && _this.countDown.count <= TIME_COUNT) {
          _this.countDown.count--;
        } else {
          _this.countDown.show = true;
          clearInterval(_this.countDown.timer);
          this.sendState = 3;
          _this.countDown.timer = null;
        }
      }, 1000);
    },
    //验证码登录
    loginCode() {
      let _this = this;
      if (_this.telBlur() && _this.codeBlur()) {
        if (!_this.checked) {
          return Toast({ duration: 1000, message: "请阅读并同意服务协议" });
        }
        _this.$axios
          .notNeedlogin({
            data: {
              phone: _this.tel,
              type: "",
              code: _this.code,
              loginType: "mobileClient",
            },
            className: "UserController",
            classMethod: "login",
          })
          .then((res) => {
            if (res.bol) {
              // _this.setToken(res.data.token);
              _this.$cookies.set("token", res.data.token, config.cookieConfig);
              // _this.setUserInfo(res.data);
              _this.$cookies.set("userInfo", res.data, config.cookieConfig);
              return Toast({ duration: 1000, message: res.msg });
              // _this.$message.success(res.msg);
              //fullPath为登录前的地址，登录成功后跳转到登录前的浏览地址
              //fullPath可以从nuxt的asyncData的from参数中获取
              //  let path = _self.fullPath || '/';
              //  _self.$router.push({ path: path.indexOf('/verify') === 0 ? '/' : path });
              // if (_this.isClose) {
              //   _this.$emit("getCloseData", false);
              // } else {
              //   let path = _this.$route.query.path || "/";
              //   _this.$router.push({
              //     path: _this.$route.query.path ? path : "/",
              //   });
              // }
            } else {
              return Toast({ duration: 1000, message: res.msg });
            }
          });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.login-pupup {
  .login-box {
    .title {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: #212223;
      line-height: 16px;
      margin-top: 24px;
    }
    .form-box {
      padding: 8px 20px 0px;
      .form-item {
        height: 55px;
        .top {
          display: flex;
          align-items: center;
          height: 42px;
          border-bottom: 1px solid #f3f3f3;
          img {
            width: 18px;
            height: 18px;
            margin-right: 8px;
          }
          input {
            border: none;
          }
          .get-code {
            width: 90px;
            height: 30px;
            border: 0.5px solid #ed6d38;
            border-radius: 4px;

            font-size: 13px;
            font-weight: 400;
            text-align: center;
            color: #ed6d38;
            line-height: 30px;
          }
        }
        .err-line {
          border-bottom: 1px solid #ed6d38;
        }
        .tip-message {
          font-size: 12px;
          transform: scale(0.9);
          color: #ed6d38;
          margin-top: 2px;
          margin-left: -10px;
        }
      }
    }
    .account-protocol {
      padding: 20px 20px 12px 20px;
      display: flex;
      align-items: flex-start;
      .checkbox-icon {
        min-width: 16px;
        height: 16px;
        background: #e5e5e5;
        border-radius: 4px;
        margin-top: 2px;
      }
      .van-checkbox__icon {
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        background: #ed6d38;
      }
      /deep/.van-checkbox__icon--checked .van-icon {
        background: #ed6d38;
      }
      /deep/.van-checkbox__icon .van-icon {
        border: none;
      }
      /deep/.van-icon-success:before {
        font-size: 12px;
        margin-left: -2px;
      }
      .protocol {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        color: #999999;
        line-height: 18px;
        a {
          color: #ff8556;
        }
      }
    }
    .loginFn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 232px;
      height: 36px;
      background: #ed6d38;
      border-radius: 18px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 16px;
    }
  }
}
</style>
