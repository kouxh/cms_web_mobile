<template>
  <div class="page-home">
    <Header />
    <div class="home-advert">
      <img :src="indexData.bannel[0].mas_banner_img" alt="" />
    </div>
    <div class="home-column">
      <div class="home-column-main">
        <div class="column-box">
          <dl
            class="item-column"
            v-for="(item, index) in tabList"
            :key="index"
            @click="oNitem(item)"
          >
            <dt>
              <img
                v-if="item.mas_menu_name == '找方法'"
                src="../static/images/icon-way.png"
                alt=""
              />
              <img
                v-else-if="item.mas_menu_name == '大咖说'"
                src="../static/images/icon-kt.png"
                alt=""
              />
              <img
                v-else-if="item.mas_menu_name == '读杂志'"
                src="../static/images/icon-zz.png"
                alt=""
              />
              <img
                v-else-if="item.mas_menu_name == '逛书店'"
                src="../static/images/icon-sd.png"
                alt=""
              />
              <img
                v-else-if="item.mas_menu_name == '见大咖'"
                src="../static/images/icon-dk.png"
                alt=""
              />
              <img
                v-else-if="item.mas_menu_name == '学案例'"
                src="../static/images/icon-al.png"
                alt=""
              />
              <img
                v-else-if="item.mas_menu_name == '淘资讯'"
                src="../static/images/icon-tzx.png"
                alt=""
              />
              <img v-else src="../static/images/icon-zt.png" alt="" />
            </dt>
            <dd>{{ item.mas_menu_name }}</dd>
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
          <div class="more" @click="oNitem(indexData.master.masterList.menu)">
            <span>查看更多</span>
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <ul class="module-list">
          <li
            v-for="(item, index) in indexData.master.masterTheory.masterlist.slice(0,3)"
            :key="index"
            @click="
              goDetails(
                indexData.master.masterTheory.menu.mas_menu_url,
                item.mas_article_id
              )
            "
          >
            <div class="li-l">
              <h5 class="twoline">
                <span class="hot" v-if="index == 0">热门</span
                >{{ item.mas_article_title }}
              </h5>
              <div class="base">
                {{ item.mas_article_author }}
                <span>{{ item.commont_num }}条评论</span>
                1天前
              </div>
            </div>
            <div class="li-r">
              <img :src="item.mas_article_img" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="column-module">
      <div class="module-main">
        <div class="title-box">
          <h2>荐读</h2>
          <!-- <div class="more">
            <span>查看更多</span>
            <i class="iconfont icon-juxing"></i>
          </div> -->
        </div>
        <div class="recommend">
          <dl
            @click="
              goDetails(
                indexData.recommend[0].mas_article_type_url,
                indexData.recommend[0].mas_article_id
              )
            "
          >
            <dt>
              <div class="left">
                <h5 class="twoline">
                  {{ indexData.recommend[0].mas_article_title }}
                </h5>
                <div class="base">
                  <img src="@/static/images/time.png" class="time" alt="" />
                  <span>{{ indexData.recommend[0].mas_article_addtime }}</span>
                  <img src="@/static/images/chat.png" class="chat" alt="" />
                  <span>{{ indexData.recommend[0].commont_num }}</span>
                </div>
              </div>
              <div class="right">
                <img src="@/static/images/big-yh.png" alt="" />
              </div>
            </dt>
            <dd class="twoline">
              {{ indexData.recommend[0].mas_article_introduce }}
            </dd>
          </dl>
        </div>
      </div>
      <div class="details">
        <div class="datails-main">
          <div
            class="datails-main-l"
            @click="
              goDetails(
                indexData.recommend[0].mas_article_type_url,
                indexData.recommend[0].mas_article_id
              )
            "
          >
            <span>阅读详情</span>
            <img src="@/static/images/arrows-left.png" alt="" />
          </div>
          <div class="datails-main-r">
            <img src="@/static/images/small-yh.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="column-module">
      <div class="module-main">
        <div class="title-box">
          <h2>逛书店</h2>
          <div class="more" @click="oNitem(indexData.bookstoreList.menu)">
            <span>查看更多</span>
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <div class="magazine-list">
          <dl
            v-for="(bookIt, bookId) in indexData.bookstoreList.books"
            :key="bookId"
            @click="
              goDetails(
                indexData.bookstoreList.menu.mas_menu_url,
                bookIt.mas_book_id
              )
            "
          >
            <dt>
              <img :src="bookIt.mas_book_img" alt="" />
              <span class="title twoline" style="height:38px;">{{ bookIt.mas_book_name }}</span>
            </dt>
            <dd>
              <div class="dd-l">
                <span class="price">¥{{bookIt.mas_book_price}}</span>
                <span class="original">¥{{bookIt.mas_book_price}}</span>
              </div>
              <div class="dd-r">
                <i class="iconfont icon-xingzhuang"></i>
              </div>
            </dd>
          </dl>
          <!-- <dl @click="details(2)">
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
          </dl> -->
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
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // middleware:'auth', //局部中间件
  layout: "not",
  data() {
    return {
      indexData: "", //首页接口获取数据
      tabList: [], //菜单列表
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
  // computed: {
  //   // ...mapState(['userName'])
  //   ...mapState({
  //     password: (state) => state.user.password,
  //   }),
  // },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let [resA, resB] = await Promise.all([
      $axios.notNeedlogin({
        className: "HomeController",
        classMethod: "home",
      }),
      $axios.notNeedlogin({
        className: "NavigationController",
        classMethod: "getLeftNavigation",
      }),
    ]);
    return { indexData: resA.data, tabList: resB.data };
  },
  created() {},
  mounted() {},
  methods: {
    // ...mapMutations({
    //   changePassword: "user/changePassword",
    // }),

    //点击每一个栏目
    oNitem(item) {
      document.body.scrollTop = 0;
      this.$store.commit("setSubTabId", item.mas_menu_url);
      this.$router.push({
        name: item.mas_menu_url,
        query: {
          menuId: item.mas_menu_id,
        },
      });
    },
    //点击到详情
    goDetails(url, id) {
      this.$store.commit("setSubTabId", url);
      this.$router.push({
        path: `/${url}/${id}`,
      });
    },

  },
};
</script>

<style lang="less" scoped>
@import "../static/css/page-css/home.less";
</style>
