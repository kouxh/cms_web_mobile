<template>
  <div class="page-article-details">
    <div class="article-main">
      <div class="article-main-mian">
        <h2>{{ detailsData.article.mas_article_title }}</h2>
        <div class="author-info">
          <div class="left">
            <img src="@/static/images/user-photo.png" alt="" />
            <span>{{ detailsData.article.mas_article_author }}</span>
          </div>
          <div class="right">{{ detailsData.article.mas_article_addtime }}</div>
        </div>
        <div class="order-tip" style="display: none">
          您已订阅本文章所属栏目，可畅读栏目所有付费文章
        </div>
        <div
          class="article-content"
          v-for="(item, index) in detailsData.articleDetails.articleDetails"
          :key="index"
          v-html="item.mas_article_details_content"
        ></div>
      </div>
      <!-- "isPay": "Y",---O 不需要购买  Y 已购买  N 未购买 -->
      <div class="need-pay" v-if="detailsData.articleDetails.isPay == 'N'">
        <div class="pay-tip">本文为付费文章，更多精彩内容需付费查看！</div>
        <div class="pay-btn">
          ¥{{ detailsData.articleDetails.price }}阅读文章
        </div>
        <div class="integral" style="display: none">
          支付<span>10积分</span>即可阅读当前文章
        </div>
      </div>
      <div class="renew" style="display: none">
        <div class="renew-main">
          <div class="renew-tip">注：本文由《管理会计研究》杂志授权刊登</div>
          <div class="renew-btn">
            <div class="left">您的订阅剩余时长 100 天</div>
            <div class="right">
              去续费
              <svg
                t="1660016842123"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4358"
                width="14"
                height="14"
              >
                <path
                  d="M776.768 512l-314.304 302.72a46.336 46.336 0 0 0 0 67.328c19.264 18.56 50.56 18.56 69.824 0l349.248-336.384a46.336 46.336 0 0 0 0-67.328L532.288 141.952a50.752 50.752 0 0 0-69.824 0 46.336 46.336 0 0 0 0 67.264L776.768 512z"
                  fill="#300b00"
                  p-id="4359"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="open-vip" style="display: none">
      <div class="open-vip-main">
        <div class="tip">畅读学案例栏目所有内容！</div>
        <div class="btn">
          去开通<svg
            t="1660017357800"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4555"
            width="14"
            height="14"
          >
            <path
              d="M776.768 512l-314.304 302.72a46.336 46.336 0 0 0 0 67.328c19.264 18.56 50.56 18.56 69.824 0l349.248-336.384a46.336 46.336 0 0 0 0-67.328L532.288 141.952a50.752 50.752 0 0 0-69.824 0 46.336 46.336 0 0 0 0 67.264L776.768 512z"
              fill="#666666"
              p-id="4556"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="base-comment" v-if="!isClickComment">
      <div class="left">
        <input
          type="text"
          readonly
          @click="onInput"
          placeholder="写下你的评论…"
        />
      </div>
      <div class="right">
        <div class="item">
          <svg
            t="1658215251326"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7167"
            width="16"
            height="16"
          >
            <path
              d="M481.578667 968.832l-157.909334-158.293333H85.418667A85.290667 85.290667 0 0 1 0 725.12L0.426667 128.042667C0.426667 80.768 38.4 42.666667 85.845333 42.666667h852.778667c47.189333 0 85.418667 38.101333 85.376 85.418666l-0.426667 597.12c0 47.146667-38.229333 85.333333-85.376 85.333334h-237.781333l-158.549333 158.293333a42.624 42.624 0 0 1-60.288 0z m456.704-243.712L938.666667 128.042667s-852.906667-0.128-852.906667 0.042666c0 0-0.384 597.077333-0.298667 597.077334H341.333333c11.306667 0 22.186667 4.48 30.165334 12.501333l140.330666 140.629333 140.8-140.672a42.624 42.624 0 0 1 30.165334-12.458666h255.488zM277.333333 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
              fill="#3D3D3D"
              p-id="7168"
            ></path>
          </svg>
          <span>评论</span>
        </div>
        <div class="item">
          <svg
            t="1660015699731"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1823"
            width="20"
            height="20"
          >
            <path
              d="M538.410667 133.546667c16.682667 7.253333 29.866667 20.992 36.736 38.229333l69.248 173.696c1.621333 4.053333 5.12 6.698667 9.045333 7.04l179.712 15.018667c37.717333 3.157333 65.621333 37.333333 62.634667 76.16a71.68 71.68 0 0 1-23.466667 47.957333l-136.96 122.410667a12.330667 12.330667 0 0 0-3.626667 11.861333l41.813334 182.997333c8.704 37.845333-13.781333 75.989333-50.474667 85.12a66.304 66.304 0 0 1-51.797333-8.533333l-153.856-98.048a9.941333 9.941333 0 0 0-10.837334 0l-153.856 98.048c-32.341333 20.608-74.624 9.941333-94.250666-23.594667a72.96 72.96 0 0 1-8.064-53.034666l41.813333-182.954667a12.330667 12.330667 0 0 0-3.584-11.904l-136.96-122.368a72.533333 72.533333 0 0 1-7.381333-99.413333 67.584 67.584 0 0 1 46.506666-24.746667l179.754667-14.976a10.837333 10.837333 0 0 0 9.045333-7.04l69.248-173.653333c14.421333-36.224 54.528-53.504 89.557334-38.314667z m-25.472 58.666666c-1.109333-0.426667-2.474667-0.128-3.626667 1.365334l-1.024 1.92-69.248 173.653333a74.922667 74.922667 0 0 1-56.618667 46.250667l-6.528 0.853333-179.626666 15.018667c-0.853333 0.085333-1.706667 0.554667-2.56 1.536a8.874667 8.874667 0 0 0-0.768 9.301333l1.408 1.834667 137.557333 122.88c18.645333 17.152 27.434667 42.24 23.978667 66.688l-1.237334 6.656-41.813333 182.997333a8.96 8.96 0 0 0 0.853333 6.4c1.109333 1.834667 2.346667 2.56 3.498667 2.389333l1.152-0.426666 153.6-97.92a73.941333 73.941333 0 0 1 73.685333-3.712l6.186667 3.584 153.898667 98.090666c0.682667 0.426667 1.28 0.512 1.92 0.341334 1.834667-0.426667 3.669333-2.986667 3.84-6.229334l-0.256-2.517333-41.856-182.997333a76.373333 76.373333 0 0 1 18.432-68.992l4.949333-4.864 136.874667-122.325334a7.765333 7.765333 0 0 0 2.346666-5.205333c0.298667-3.456-1.237333-6.058667-2.901333-7.04l-1.237333-0.426667-179.669334-15.061333a74.666667 74.666667 0 0 1-60.586666-41.216l-2.602667-5.845333-69.290667-173.781334a6.4 6.4 0 0 0-1.706666-2.56l-1.024-0.64z"
              fill="#333333"
              p-id="1824"
            ></path>
          </svg>

          <span>收藏</span>
        </div>
        <div class="item">
          <svg
            t="1658215331316"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7306"
            width="20"
            height="17"
          >
            <path
              d="M171.712 571.648l0.352 0.32 287.904 252.8a64 64 0 0 0 82.912 1.344l296.832-244.544a215.584 215.584 0 1 0-301.824-300.576L512 316.672l-25.888-35.616a215.584 215.584 0 1 0-314.4 290.624zM32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512l-295.36 243.392a128 128 0 0 1-165.888-2.592L129.984 620.16A278.976 278.976 0 0 1 32 407.584z"
              p-id="7307"
            ></path>
          </svg>
          <span>点赞</span>
        </div>
      </div>
    </div>
    <!-- 输入评论框 v-show="isShowComment"-->
    <div id="comment-input" class="comment-input" v-show="isShowComment">
      <div class="comment-input-main">
        <textarea
          type="text"
          maxlength="1000"
          rows="1"
          ref="focusTextarea"
          v-model="commentVal"
          placeholder="写评论…"
          class="textarea"
          style="height: 20px"
          @blur="onBlur"
        ></textarea>
        <button class="sendBtn">发送</button>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="comment-box">
      <div class="top-title">
        <div class="top-title-l">
          <h2>用户评价</h2>
          <span>({{ commentList.length }})</span>
        </div>
      </div>
      <ul class="comment-list" v-if="commentList.length > 0">
        <li>
          <div class="li-l">
            <img src="@/static/images/user-photo.png" alt="" />
            <img class="vip-icon" src="@/static/images/vip-icon.png" alt="" />
          </div>
          <div class="li-r">
            <span class="name">谢莎莎</span>
            <p>
              书籍收到了，学习到很多管理会计类的知识，发货很快，商品和描述一致，很好很值得购买，会回购推荐的
            </p>
          </div>
        </li>
        <li>
          <div class="li-l">
            <img src="@/static/images/user-photo.png" alt="" />
            <img class="vip-icon" src="@/static/images/vip-icon.png" alt="" />
          </div>
          <div class="li-r">
            <span class="name">谢莎莎</span>
            <p>
              书籍收到了，学习到很多管理会计类的知识，发货很快，商品和描述一致，很好很值得购买，会回购推荐的
            </p>
          </div>
        </li>
      </ul>
      <div class="more" v-if="commentList.length > 3">
        <span>{{ commentMore == false ? "查看更多" : "收起" }}</span>
        <svg
          v-if="!commentMore"
          t="1660016230996"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3698"
          width="16"
          height="16"
        >
          <path
            d="M796.306286 350.354286a47.542857 47.542857 0 0 1 5.485714 60.708571l-5.485714 6.582857L527.36 686.592a47.542857 47.542857 0 0 1-60.708571 5.485714l-6.582858-5.485714L191.122286 417.645714a47.542857 47.542857 0 0 1 60.708571-72.777143l6.582857 5.485715L493.714286 585.728 729.014857 350.354286a47.542857 47.542857 0 0 1 60.708572-5.485715l6.582857 5.485715z"
            fill="#999999"
            p-id="3699"
          ></path>
        </svg>
        <svg
          v-else
          t="1660016254017"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3863"
          width="16"
          height="16"
        >
          <path
            d="M227.693714 673.645714a47.542857 47.542857 0 0 1-5.485714-60.708571l5.485714-6.582857L496.64 337.408a47.542857 47.542857 0 0 1 60.708571-5.485714l6.582858 5.485714 268.946285 268.946286a47.542857 47.542857 0 0 1-60.708571 72.777143l-6.582857-5.485715L530.285714 438.272 294.985143 673.645714a47.542857 47.542857 0 0 1-60.708572 5.485715l-6.582857-5.485715z"
            fill="#999999"
            p-id="3864"
          ></path>
        </svg>
      </div>
      <div class="no-data" v-if="commentList.length == 0">暂无评论</div>
    </div>
    <!-- 手机号登录 -->
    <LoginPopup v-if="loginPopupShow" />
    <!-- 文章购买弹框 -->
    <ArticleBuy v-if="articleBuyPopup" />
  </div>
</template>
<script>
export default {
  props: {
    detailsData: {
      type: Object,
    },
  },
  data() {
    return {
      commentList: [], //评论列表
      commentMore: false, //是否查看收藏更多
      loginPopupShow: false, //手机号登录弹框
      articleBuyPopup: false, //文章购买弹框
      commentVal: "", //评论内容
      isShowComment: false, //是否展示输入框
      isClickComment: false, //是否点击输入框
       inWechat: false, // 是否为微信环境
      repeatBool: true, // 防止重复操作
    };
  },
  created() {},
  mounted() {
    var textarea = document.querySelector("textarea");
    textarea.addEventListener("input", (e) => {
      //需要在每次设置scrollHeight之前，设置一次文本框的初始高度textarea.style.height = '20px';，这样在文本内容减少的时候，文本框的高度才会减少。
      textarea.style.height = "20px";
      textarea.style.height = e.target.scrollHeight - 12 + "px";
      if (textarea.style.height >= "60px") {
        textarea.style.height = "60px";
      }
    });
       // 判断运行环境
    let device = navigator.userAgent;
    this.inWechat = device.indexOf("MicroMessenger") > -1; // true 微信环境； false 浏览器；
  },
  methods: {
    //点击去输入
    onInput() {
      this.isClickComment = true;
      this.isShowComment = true;
      setTimeout(() => {
        this.$refs.focusTextarea.focus();
      }, 500);
    },
    //textarea失焦事件
    onBlur() {
      console.log("0000");
      this.isClickComment = false;
      this.isShowComment = false;
    },
    //唤起微信支付
    // 获得订单支付链接，并支付
    // async payUrlFn() {
    //   this.repeatBool = false;
    //   // 判断是否在微信运行环境下
    //   if (this.inWechat) {
    //     let checkPay = await this.checkAuth();
    //     if (!checkPay) return (this.repeatBool = true);
    //   }
    //   this.$axios
    //     .payment({
    //       order_id: this.orderid,
    //       order_no: this.orderNo,
    //       store_id: this.vuexInit.store.id,
    //       payment_type: this.payType[this.activePay].type,
    //       resource_type: this.inWechat ? 4 : 3
    //     })
    //     .then(res => {
    //       if (res.code == 200) {
    //         if (this.inWechat) {
    //           this.wxPayFn(res); // 处理'微信支付'
    //         } else {
    //           this.h5PayFn(res); // 处理'微信支付'
    //         }
    //       } else {
    //         this.repeatBool = true; // 防止重复操作
    //         Toast(res.msg);
    //       }
    //     });
    // },
    // 微信支付操作
    // async wxPayFn(res) {
    //   let _this = this;
    //   let id = res.response.id;
    //   if (this.payType[this.activePay].type == 1) {
    //     WeixinJSBridge.invoke(
    //       "getBrandWCPayRequest",
    //       {
    //         appId: res.response.result.appId, //公众号名称，由商户传入
    //         timeStamp: res.response.result.timeStamp, //时间戳，自1970年以来的秒数
    //         nonceStr: res.response.result.nonceStr, //随机串
    //         package: res.response.result.package,
    //         signType: res.response.result.signType, //微信签名方式：
    //         paySign: res.response.result.paySign //微信签名
    //       },
    //       function(res) {
    //         if (res.err_msg == "get_brand_wcpay_request:ok") {
    //           _this.$router.replace({
    //             name: "site-pay-success",
    //             params: { site: _this.vuexInit.store.short_url },
    //             query: { orderId: id, payMoney: _this.payMoney }
    //           });
    //         } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
    //           _this.repeatBool = true; // 防止重复操作
    //         } else if (res.err_msg == "get_brand_wcpay_request:fail") {
    //           _this.repeatBool = true; // 防止重复操作
    //           console.log(res, "支付失败 请重试");
    //           Toast("支付失败 请重试");
    //         }
    //       }
    //     );
    //   }
    //   if (this.payType[this.activePay].type == 5) {
    //     _this.$router.replace({
    //       name: "site-pay-success",
    //       params: { site: _this.vuexInit.store.short_url },
    //       query: { orderId: id, payMoney: _this.payMoney }
    //     });
    //   }
    // },

    // H5支付操作
    // h5PayFn(res) {
    //   let _this = this;
    //   _this.orderid = res.response.id;
    //   // 微信支付成功处理
    //   if (this.payType[this.activePay].type == 1) {
    //     //表单商品追加formId
    //     let formStr = _this.formId ? `&formId=${_this.formId}` : "";
    //     //  财经先生APP调用支付
    //     if (navigator.userAgent.indexOf("caijingxiansheng") > -1) {
    //       location.replace(
    //         res.response.result.mwebUrl +
    //           "&redirect_url='" +
    //           encodeURIComponent(
    //             `caijingcreators.xianshengstore.com://${window.location.protocol}//${window.location.host}/order/pay?orderNo=${_this.orderNo}&price=${_this.payMoney}&dyktd_id=${this.vuexInit.store.id}&orderid=${this.orderid}&orderType=2&callback=1${formStr}`
    //           )
    //       );
    //     } else {
    //       location.replace(
    //         res.response.result.mwebUrl +
    //           "&redirect_url=" +
    //           encodeURIComponent(
    //             `${window.location.protocol}//${window.location.host}/order/pay?orderNo=${_this.orderNo}&price=${_this.payMoney}&dyktd_id=${this.vuexInit.store.id}&orderid=${this.orderid}&orderType=2&callback=1${formStr}`
    //           )
    //       );
    //     }
    //   }
    //   // 余额支付成功处理
    //   if (this.payType[this.activePay].type == 5) {
    //     _this.$router.replace({
    //       name: "site-pay-success",
    //       params: { site: _this.vuexInit.store.short_url },
    //       query: { orderId: res.response.id, payMoney: _this.payMoney }
    //     });
    //   }
    // },
    goPay() {
      // payApi.wxPrepare({ orderSn: this.order.orderSn }).then((res) => {
      //   //唤起支付中间页地址  res.data.mwebUrl
      //   const url = escape(
      //     `${process.env.VUE_APP_WEB_URL}/#/applyText?orderSn=${this.order.orderSn}&totalPrice=${this.order.totalPrice}`
      //   );

      //   //url 相当于 https://www.baidu.com/#/applyText?orderSn=123456
      //   //escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。
      //   // 进行地址拼接
      //   window.location.href = res.data.mwebUrl + `&redirect_url=${url}`;
      // });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/articleDetails.less";
.more {
  margin-top: 8px;
}
</style>
