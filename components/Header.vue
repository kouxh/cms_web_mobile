<template>
  <div class="header">
    <nuxt-link to="/">
    <img class="logo" src="../static/images/logo.png" alt="" />
    </nuxt-link>
    <div class="search-box">
      <van-search
        v-model="searchValue"
        placeholder="输入搜索的内容"
        shape="round"
        @search="onSearch"
        left-icon=""
      >
        <!-- <div slot="right-icon" @click="onSearch"> -->
        <!-- <van-icon name="search" size="20" /> -->
        <!-- <i class="iconfont icon-icon-sousuo"></i> -->
        <!-- </div> -->
      </van-search>
      <i class="iconfont icon-icon-sousuo" @click="onSearch"></i>
    </div>
    <!-- <img class="photo" src="" alt="" /> -->
    <span class="login">登录</span>
    <i class="iconfont icon-icon-liebiao" @click="showPopup"></i>
    <!-- 首页列表 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%' }">
      <div class="popup-index">
        <div class="header">
          <img class="logo" src="../static/images/logo.png" alt="" />
          <div class="search-box">
            <van-search
              v-model="searchValue"
              placeholder="输入搜索的内容"
              shape="round"
              @search="onSearch"
              left-icon=""
            >
              <!-- <div slot="right-icon" @click="onSearch"> -->
              <!-- <van-icon name="search" size="20" /> -->
              <!-- <i class="iconfont icon-icon-sousuo"></i> -->
              <!-- </div> -->
            </van-search>
            <i class="iconfont icon-icon-sousuo" @click="onSearch"></i>
          </div>
          <img class="photo" src="" alt="" />
          <i
            class="iconfont icon-icon-liebiaozhankai"
            @click="show = !show"
          ></i>
        </div>
        <div class="channel-module">
          <div class="title">热门频道</div>
          <div class="content">
            <dl class="item">
              <dt>
                <img src="../static/images/qyfw.png" alt="" />
              </dt>
              <dd>企业服务</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/dy.png" alt="" />
              </dt>
              <dd>订阅</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/ktyj.png" alt="" />
              </dt>
              <dd>课题研究</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/hyfw.png" alt="" />
              </dt>
              <dd>会员服务</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/tzfw.png" alt="" />
              </dt>
              <dd>作者服务</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/hd.png" alt="" />
              </dt>
              <dd>活动</dd>
            </dl>
          </div>
        </div>
        <div class="channel-module two">
          <div class="title">热门频道</div>
          <div class="content">
            <dl class="item">
              <dt>
                <img src="../static/images/tkt.png" alt="" />
              </dt>
              <dd>听课程</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/xal.png" alt="" />
              </dt>
              <dd>学案例</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/zff.png" alt="" />
              </dt>
              <dd>找方法</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/jdk.png" alt="" />
              </dt>
              <dd>见大咖</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/dzz.png" alt="" />
              </dt>
              <dd>读杂志</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/tzx.png" alt="" />
              </dt>
              <dd>淘资讯</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/gsd.png" alt="" />
              </dt>
              <dd>逛书店</dd>
            </dl>
            <dl class="item">
              <dt>
                <img src="../static/images/kzt.png" alt="" />
              </dt>
              <dd>看专题</dd>
            </dl>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
const meanList = [
  {
    url: "index",
    title: "首页",
  },
  {
    url: "qyfw",
    title: "企业服务",
  },
  {
    url: "dy",
    title: "订阅",
  },
  {
    url: "ktyj",
    title: "课题研究",
  },
  {
    url: "activity",
    title: "活动",
  },
  {
    url: "hyfw",
    title: "会员服务",
  },
  {
    url: "zzfw",
    title: "作者服务",
  },
];
export default {
  data() {
    return {
      searchValue: "",
      show: false, //是否展示首页列表弹框
    };
  },
  created() {},
  mounted() {},

  methods: {
    //点击搜索
    onSearch() {
      console.log(this.searchValue);
    },
    //首页列表弹框
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 44px;
  padding: 0px 10px 0px 15px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 52px;
    height: 21px;
    padding-right: 20px;
  }
  .search-box {
    width: 177px;
    height: 34px;
    background: #f0f2f9;
    border-radius: 18px;
    position: relative;
    .van-search {
      padding: 0px;
    }
    .icon-icon-sousuo {
      font-size: 24px;
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
    /deep/.van-field__control {
      width: 74% !important;
    }
  }

  .photo {
    width: 24px;
    height: 24px;
    border: 1px solid #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 12, 73, 0.08);
    margin: 0px 20px;
  }
  .login{
    margin: 0px 16px ;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #db6b3a;
    line-height: 22px;
  }

  .icon-icon-liebiao {
    font-size: 36px;
  }

  .icon-icon-liebiaozhankai {
    font-size: 36px;
  }
}
.popup-index {
  width: 100vw;
  .channel-module {
    padding-top: 24px;
    .title {
      padding-left: 16px;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #212223;
      line-height: 22px;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 16px 0px 12px;
      width: 100%;
      .item {
        padding-bottom: 20px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 25%;
        dt {
          width: 38px;
          height: 38px;
        }
        dd {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #666666;
          line-height: 14px;
          padding-top: 8px;
        }
      }
    }
  }

  .two {
    padding-top: 0px;

    dl {
      dt {
        width: 32px !important;
        height: 32px !important;
      }

      dd {
        padding-top: 6px !important;
      }
    }
  }
}
</style>

