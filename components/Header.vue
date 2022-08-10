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
      <svg @click="onSearch" t="1660024471536" class="icon icon-icon-sousuo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6067" width="24" height="24"><path d="M495.537231 763.273846a267.736615 267.736615 0 1 0 0-535.473231 267.736615 267.736615 0 0 0 0 535.512616z m0-48.64a219.057231 219.057231 0 1 1 0-438.153846 219.057231 219.057231 0 0 1 0 438.153846z" fill="#999999" p-id="6068"></path><path d="M645.789538 670.129231a24.339692 24.339692 0 0 1 34.422154 0l103.266462 103.266461a24.339692 24.339692 0 1 1-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 1 0-34.422154z m34.422154 34.422154a24.339692 24.339692 0 0 0 0-34.422154l103.266462 103.266461a24.339692 24.339692 0 1 0-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 0 34.422154 0z" fill="#999999" p-id="6069"></path></svg>
    </div>
    <img class="photo" src="@/static/images/user-photo.png" alt="" />
    <!-- <span class="login">登录</span> -->
    <svg t="1660024181940" class="icon"  @click="showPopup" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5563" width="36" height="36"><path d="M284.444444 483.555556h455.111112a28.444444 28.444444 0 0 1 0 56.888888H284.444444a28.444444 28.444444 0 0 1 0-56.888888z m0 170.666666h455.111112a28.444444 28.444444 0 0 1 0 56.888889H284.444444a28.444444 28.444444 0 0 1 0-56.888889z m0-341.333333h455.111112a28.444444 28.444444 0 0 1 0 56.888889H284.444444a28.444444 28.444444 0 0 1 0-56.888889z" fill="#333333" p-id="5564"></path></svg>
    <!-- 首页列表 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%' }">
      <div class="popup-index">
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
             <svg @click="onSearch" t="1660024471536" class="icon icon-icon-sousuo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6067" width="24" height="24"><path d="M495.537231 763.273846a267.736615 267.736615 0 1 0 0-535.473231 267.736615 267.736615 0 0 0 0 535.512616z m0-48.64a219.057231 219.057231 0 1 1 0-438.153846 219.057231 219.057231 0 0 1 0 438.153846z" fill="#999999" p-id="6068"></path><path d="M645.789538 670.129231a24.339692 24.339692 0 0 1 34.422154 0l103.266462 103.266461a24.339692 24.339692 0 1 1-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 1 0-34.422154z m34.422154 34.422154a24.339692 24.339692 0 0 0 0-34.422154l103.266462 103.266461a24.339692 24.339692 0 1 0-34.422154 34.422154l-103.266462-103.266461a24.339692 24.339692 0 0 0 34.422154 0z" fill="#999999" p-id="6069"></path></svg>
          </div>
          <img class="photo" src="" alt="" />
          <svg @click="show = !show" t="1660024260031" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5731" width="36" height="36"><path d="M361.443556 321.223111l160.910222 160.881778 160.910222-160.881778a28.444444 28.444444 0 0 1 37.546667-2.360889l2.673777 2.360889a28.444444 28.444444 0 0 1 0 40.220445l-160.881777 160.910222 160.881777 160.910222a28.444444 28.444444 0 1 1-40.220444 40.220444l-160.910222-160.881777-160.910222 160.881777a28.444444 28.444444 0 0 1-37.546667 2.360889l-2.673778-2.360889a28.444444 28.444444 0 0 1 0-40.220444l160.881778-160.910222-160.881778-160.910222a28.444444 28.444444 0 0 1 40.220445-40.220445z" fill="#333333" p-id="5732"></path></svg>
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
            <dl
              class="item"
              v-for="(item, index) in tabList"
              :key="index"
              @click="oNitem(index, item)"
            >
              <dt>
                <img
                  v-if="item.mas_menu_name == '找方法'"
                  src="../static/images/zff.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '大咖说'"
                  src="../static/images/kzt.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '读杂志'"
                  src="../static/images/dzz.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '逛书店'"
                  src="../static/images/gsd.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '见大咖'"
                  src="../static/images/jdk.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '学案例'"
                  src="../static/images/xal.png"
                  alt=""
                />
                <img
                  v-else-if="item.mas_menu_name == '淘资讯'"
                  src="../static/images/tzx.png"
                  alt=""
                />
                <img
                  v-else
                  src="../static/images/kzt.png"
                  alt=""
                />
              </dt>
              <dd>{{ item.mas_menu_name }}</dd>
            </dl>
            <!-- <dl class="item">
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
            </dl> -->
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
      show: false, //是否展示首页列表弹框
      tabList: [], //导航栏列表
    };
  },
  async fetch() {
    let res = await this.$axios.notNeedlogin({
      className: "NavigationController",
      classMethod: "getLeftNavigation",
    });
    if (res.bol) {
      this.tabList = res.data;
    }
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
    //点击每一个栏目
    oNitem(index, item) {
      this.show=false;
      document.body.scrollTop = 0;
      this.$store.commit("setSubTabId", item.mas_menu_url);
      this.$router.push({
        name: item.mas_menu_url,
        query: {
          menuId: item.mas_menu_id,
        },
      });
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
    border-radius: 50%;
    border: 1px solid #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 12, 73, 0.08);
    margin: 0px 20px;
  }
  .login {
    margin: 0px 16px;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #db6b3a;
    line-height: 22px;
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

