<template>
  <div class="page-home">
    <Header />
    <div class="home-advert">
      <img src="" alt="" />
    </div>
    <div class="home-column">
      <div class="home-column-main">
        <div class="column-box">
          <dl class="item-column">
            <dt>
              <img src="../static/images/icon-kt.png" alt="" />
            </dt>
            <dd>听课程</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(2)">
            <dt>
              <img src="../static/images/icon-al.png" alt="" />
            </dt>
            <dd>学案例</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(1)">
            <dt>
              <img src="../static/images/icon-way.png" alt="" />
            </dt>
            <dd>找方法</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(3)">
            <dt>
              <img src="../static/images/icon-dk.png" alt="" />
            </dt>
            <dd>见大咖</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(4)">
            <dt>
              <img src="../static/images/icon-zz.png" alt="" />
            </dt>
            <dd>读杂志</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(6)">
            <dt>
              <img src="../static/images/icon-tzx.png" alt="" />
            </dt>
            <dd>淘资讯</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(5)">
            <dt>
              <img src="../static/images/icon-sd.png" alt="" />
            </dt>
            <dd>逛书店</dd>
          </dl>
          <dl class="item-column" @click="tabsFn(7)">
            <dt>
              <img src="../static/images/icon-zt.png" alt="" />
            </dt>
            <dd>看专题</dd>
          </dl>
        </div>
        <div class="activity">
          <div class="title-box">
            <h2>活动内容</h2>
            <div class="more">
              <span>查看更多</span>
              <i class="iconfont icon-juxing"></i>
            </div>
          </div>
          <ul class="content">
            <li
              :style="{
                backgroundImage:
                  'url(' + require('../static/images/jx-bg1.png') + ')',
              }"
            >
              <img class="jx" src="../static/images/jx.png" alt="" />
              <div class="tip-box">
                <div class="title">精品课程免费送</div>
                <div class="tip-info">
                  <img src="../static/images/hw.png" alt="" />
                  <span>特价好物</span>
                </div>
                <div class="entry">
                  <span>GO</span>
                  <i class="iconfont icon-juxing"></i>
                </div>
              </div>
            </li>
            <li
              :style="{
                backgroundImage:
                  'url(' + require('../static/images/jx-bg3.png') + ')',
              }"
            >
              <div class="tg">作品投稿入口</div>
              <div class="tg-page">立即投稿</div>
            </li>
            <li
              :style="{
                backgroundImage:
                  'url(' + require('../static/images/jx-bg2.png') + ')',
              }"
            >
              <div class="tg">企业服务入口</div>
              <div class="tg-page">点击进入</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="clear"></div>
    <div class="column-module">
      <div class="module-main">
        <div class="title-box">
          <h2>见大咖</h2>
          <div class="more" @click="tabsFn(3)">
            <span>查看更多</span>
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <ul class="module-list">
          <li>
            <div class="li-l">
              <h5>
                <span class="hot">热门</span
                >财务共享中心的功能定位成美国的航空母舰？
              </h5>
              <div class="base">
                刘勤
                <span>76条评论</span>
                1天前
              </div>
            </div>
            <div class="li-r">
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div class="li-l">
              <h5>财务共享中心的功能定位成美国的航空母舰？</h5>
              <div class="base">
                刘勤
                <span>76条评论</span>
                1天前
              </div>
            </div>
            <div class="li-r">
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div class="li-l">
              <h5>财务共享中心的功能定位成美国的航空母舰？</h5>
              <div class="base">
                刘勤
                <span>76条评论</span>
                1天前
              </div>
            </div>
            <div class="li-r">
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="column-module">
      <div class="module-main">
        <div class="title-box">
          <h2>荐读</h2>
          <div class="more">
            <span>查看更多</span>
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <div class="recommend">
          <dl>
            <dt>
              <div class="left">
                <h5>中国石油刘跃珍： 业财融合新模式，财务人员新角色</h5>
                <div class="base">
                  <img src="../static/images/time.png" class="time" alt="" />
                  <span>2022-03-14</span>
                  <img src="../static/images/chat.png" class="chat" alt="" />
                  <span>3</span>
                </div>
              </div>
              <div class="right">
                <img src="../static/images/big-yh.png" alt="" />
              </div>
            </dt>
            <dd>
              企业财务人员不仅是企业的价值管理者，而且业财融合新模式正在赋予财务人员更多新角色财务人员不仅是……
            </dd>
          </dl>
        </div>
      </div>
      <div class="details">
        <div class="datails-main">
          <div class="datails-main-l">
            <span>阅读详情</span>
            <img src="../static/images/arrows-left.png" alt="" />
          </div>
          <div class="datails-main-r">
            <img src="../static/images/small-yh.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="column-module">
      <div class="module-main">
        <div class="title-box">
          <h2>逛书店</h2>
          <div class="more" @click="tabsFn(5)">
            <span>查看更多</span>
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <div class="magazine-list">
          <dl @click="details(1)">
            <dt>
              <img src="../static/images/book.png" alt="" />
              <span class="title">2022年第一期 总第第一期20期</span>
            </dt>
            <dd>
              <div class="dd-l">
                <span class="price">¥43.5</span>
                <span class="original">¥43.5</span>
              </div>
              <div class="dd-r">
                <i class="iconfont icon-xingzhuang"></i>
              </div>
            </dd>
          </dl>
          <dl @click="details(2)">
            <dt>
              <img src="../static/images/book.png" alt="" />
              <span class="title">2022年第一期 总第第一期20期</span>
            </dt>
            <dd>
              <div class="dd-l">
                <span class="price">¥43.5</span>
                <span class="original">¥43.5</span>
              </div>
              <div class="dd-r">
                <i class="iconfont icon-xingzhuang"></i>
              </div>
            </dd>
          </dl>
          <dl @click="details(3)">
            <dt>
              <img src="../static/images/book.png" alt="" />
              <span class="title">2022年第一期 总第第一期20期</span>
            </dt>
            <dd>
              <div class="dd-l">
                <span class="price">¥43.5</span>
                <span class="original">¥43.5</span>
              </div>
              <div class="dd-r">
                <i class="iconfont icon-xingzhuang"></i>
              </div>
            </dd>
          </dl>
          <dl @click="details(4)">
            <dt>
              <img src="../static/images/book.png" alt="" />
              <span class="title">2022年第一期 总第第一期20期</span>
            </dt>
            <dd>
              <div class="dd-l">
                <span class="price">¥43.5</span>
                <span class="original">¥43.5</span>
              </div>
              <div class="dd-r">
                <i class="iconfont icon-xingzhuang"></i>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="creation">
      <div class="advert">
        <img src="../static/images/gc.png" alt="" />
      </div>
      <ul class="creation-list">
        <li>
          <div class="creation-list-l">
            <span></span>
            <p>财务共享中心的功能定位、成功企业财功能…</p>
          </div>
          <div class="creation-list-r">刘勤</div>
        </li>
        <li>
          <div class="creation-list-l">
            <span></span>
            <p>财务共享中心的功能定位、成功企业财功能…</p>
          </div>
          <div class="creation-list-r">刘勤</div>
        </li>
        <li>
          <div class="creation-list-l">
            <span></span>
            <p>财务共享中心的功能定位、成功企业财功能…</p>
          </div>
          <div class="creation-list-r">刘勤</div>
        </li>
        <li>
          <div class="creation-list-l">
            <span></span>
            <p>财务共享中心的功能定位、成功企业财功能…</p>
          </div>
          <div class="creation-list-r">刘勤</div>
        </li>
        <li>
          <div class="creation-list-l">
            <span></span>
            <p>财务共享中心的功能定位、成功企业财功能…</p>
          </div>
          <div class="creation-list-r">刘勤</div>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // middleware:'auth', //局部中间件
  layout: "not",
  data() {
    return {
      // active: 2,
      // tabs: ["活动", "课程"],
      // current: 0,
      // show: false, //是否展示首页列表弹框
    };
  },
  head() {
    //优化seo 动态设置title、keywprds和description
    return {
      title: "首页",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "淘宝 西瓜视频、今日头条、微博",
        },
        {
          hid: "description",
          name: "description",
          content:
            "元年科技是一家为企业数字化转型提供专业技术和服务的公司，具备业务中台和数据中台建设能力的厂商。为企业打造包括数字化转型、智能管理和数据分析平台、",
        },
      ],
    };
  },
  computed: {
    // ...mapState(['userName'])
    ...mapState({
      password: (state) => state.user.password,
    }),
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    // let res = await getSliders($axios);
    //  let res =await $axios.get('https://v2.chinamas.cn/api/slider/getSliders');
    // console.log(res.data.list);
    // asyncData 中没有this
    // return { list: res.list };
    // let timestamp = Date.parse(new Date());
    // let sign = md5(timestamp + store.state.secretKey);
    // let res = await $axios.notNeedlogin({
    //   // sign: sign,
    //   // timespan: timestamp,
    //   className: "HomeController",
    //   classMethod: "home",
    // });
    // if (res.bol) {
    //   return { indexData: res.data };
    // }
  },
  created() {
  },
  mounted() {
    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations({
      changePassword: "user/changePassword",
    }),
    //点击tabs
    tabsFn(index) {
      this.$store.commit("setTabIndex", index);
      if (index == 0) {
        this.$router.push({
          name: "index",
        });
      } else if (index == 1) {
        this.$router.push({
          name: "zff",
        });
      } else if (index == 2) {
        this.$router.push({
          name: "xal",
        });
      } else if (index == 3) {
        this.$router.push({
          name: "jdk",
        });
      } else if (index == 4) {
        this.$router.push({
          name: "zz",
        });
      } else if (index == 5) {
        this.$router.push({
          name: "gsd",
        });
      } else if (index == 6) {
        this.$router.push({
          name: "tzx",
        });
      } else if (index == 7) {
        this.$router.push({
          name: "kzt",
        });
      }
    },
    //点击到详情
    details(id) {
      console.log(id, "==");
      this.$router.push({
        path: `/gsd/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../static/css/page-css/home.less";
</style>
