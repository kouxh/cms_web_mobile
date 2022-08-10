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
              <svg
                t="1660023589319"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5059"
                width="16"
                height="16"
              >
                <path
                  d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z"
                  fill="#999999"
                  p-id="5060"
                ></path>
              </svg>
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
                  <svg
                    t="1660023589319"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5059"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z"
                      fill="#999999"
                      p-id="5060"
                    ></path>
                  </svg>
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
            <svg
              t="1660023589319"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5059"
              width="16"
              height="16"
            >
              <path
                d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z"
                fill="#999999"
                p-id="5060"
              ></path>
            </svg>
          </div>
        </div>
        <ul class="module-list">
          <li
            v-for="(
              item, index
            ) in indexData.master.masterTheory.masterlist.slice(0, 3)"
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
 <svg t="1660023589319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5059" width="16" height="16"><path d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z" fill="#999999" p-id="5060"></path></svg>
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
            <svg
              t="1660023589319"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5059"
              width="16"
              height="16"
            >
              <path
                d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z"
                fill="#999999"
                p-id="5060"
              ></path>
            </svg>
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
              <span class="title twoline" style="height: 38px">{{
                bookIt.mas_book_name
              }}</span>
            </dt>
            <dd>
              <div class="dd-l">
                <span class="price">¥{{ bookIt.mas_book_price }}</span>
                <span class="original">¥{{ bookIt.mas_book_price }}</span>
              </div>
              <div class="dd-r">
                <svg
                  t="1660024376109"
                  class="icon"
                  viewBox="0 0 1092 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5899"
                  width="16"
                  height="16"
                >
                  <path
                    d="M376.029589 819.201638a101.579987 101.579987 0 0 1 71.679427 29.354432c9.215926 9.215926 16.452135 20.070239 21.981691 32.631206 5.46129 12.560966 8.191934 25.804594 8.191934 39.867414 0 13.994555-2.730645 27.306448-8.191934 39.867415a105.198092 105.198092 0 0 1-54.2033 54.817694 95.709101 95.709101 0 0 1-39.457818 8.260201 98.303214 98.303214 0 0 1-40.550075-8.328467 105.198092 105.198092 0 0 1-54.2033-54.749428 98.576278 98.576278 0 0 1-8.191935-39.867415c0-14.062821 2.730645-27.306448 8.191935-39.867414a106.495148 106.495148 0 0 1 21.913425-32.631206c9.14766-9.215926 19.933707-16.383869 32.289875-21.572094A104.447164 104.447164 0 0 1 376.029589 819.201638z m476.770586 0c13.858022 0 27.169916 2.594113 40.003947 7.782338 12.765765 5.119959 23.688344 12.287902 32.767738 21.572094 9.215926 9.215926 16.452135 20.070239 21.98169 32.631206 5.46129 12.560966 8.191934 25.804594 8.191935 39.867414 0 13.994555-2.730645 27.306448-8.191935 39.867415a103.491439 103.491439 0 0 1-94.753375 63.077895c-13.858022 0-27.033384-2.730645-39.457818-8.328467a105.198092 105.198092 0 0 1-54.203299-54.749428 98.576278 98.576278 0 0 1-8.191935-39.867415c0-14.062821 2.730645-27.306448 8.191935-39.867414a106.495148 106.495148 0 0 1 21.913424-32.631206 101.579987 101.579987 0 0 1 71.679427-29.354432z m160.288851-590.024079c20.684635 0 36.727173 2.730645 48.127615 8.191934a54.612896 54.612896 0 0 1 24.371005 20.275038c4.778628 8.055402 7.03141 16.588667 6.621814 25.736327a84.854788 84.854788 0 0 1-3.822903 23.551812 2548.37428 2548.37428 0 0 1-14.404151 40.481809c-7.372741 20.479836-15.359877 42.871124-23.824876 67.310395-8.464999 24.439271-16.998264 48.74201-25.463263 72.771685-8.464999 24.097941-15.291611 43.075922-20.479837 56.933944-9.557257 29.2179-21.572094 49.424671-35.976245 60.756848-14.335885 11.332176-32.289875 16.998264-53.725437 16.998264H333.294998l15.496409 98.508011h559.099527c35.498383 0 53.179308 14.95028 53.179308 44.850842a66.764266 66.764266 0 0 1-10.581248 37.751164c-6.963144 10.581249-20.821167 15.906006-41.505802 15.906006H328.8577a66.013339 66.013339 0 0 1-37.068503-9.830321 83.489465 83.489465 0 0 1-24.917134-25.736327 155.510223 155.510223 0 0 1-16.110805-34.474391 312.249235 312.249235 0 0 1-9.352458-35.02052 9358.807263 9358.807263 0 0 1-18.295321-94.685109 519816.061205 519816.061205 0 0 1-33.791729-177.90151c-13.994555-73.72741-29.900561-155.783287-47.581486-246.304163H58.728661a45.192172 45.192172 0 0 1-27.716045-8.191935 71.747693 71.747693 0 0 1-18.227054-19.728909 75.365797 75.365797 0 0 1-9.966854-24.575803A117.55426 117.55426 0 0 1 0.019797 118.586443a47.786284 47.786284 0 0 1 14.950281-36.181044C24.936931 73.052941 38.385357 68.274312 55.315355 68.274312H167.203527c14.745482 0 26.623787 2.184516 35.430116 6.553548a60.074186 60.074186 0 0 1 32.085077 37.205036c2.252782 7.304475 4.095967 13.516692 5.529556 18.636651 1.501855 5.870886 3.003709 14.062821 4.437297 24.575803 1.501855 10.649515 3.003709 21.367296 4.437298 32.358141 2.252782 13.107095 4.437298 26.965118 6.621814 41.642334H1013.089026zM955.745485 136.540433H546.148762L693.876646 20.62456c17.134796-13.448426 35.976246-20.343304 56.524348-20.616368 20.479836-0.273064 39.321285 6.280483 56.524348 19.797175L955.745485 136.540433z"
                    fill="#ED6D38"
                    p-id="5900"
                  ></path>
                </svg>
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
    <div class="tabs-content">
      <ul class="tabs">
        <li
          :class="current == index ? 'active' : ''"
          v-for="(item, index) in tabs"
          :key="index"
          @click="tabsFn(index)"
        >
          {{ item }}
        </li>
      </ul>
      <div class="content">
        <div class="activity-img" v-if="current == 0">
          <img :src="indexData.newActivity.activity.mas_activity_img" alt="" />
        </div>
        <div class="activity-img" v-else>
          <img src="" alt="" />
        </div>
      </div>
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
      active: 2,
      tabs: ["活动", "课程"],
      current: 0,
    };
  },
  head() {
    //优化seo 动态设置title、keywprds和description
    return {
      title: "首页",
      // meta: [
      //   {
      //     hid: "keywords",
      //     name: "keywords",
      //     content: "淘宝 西瓜视频、今日头条、微博",
      //   },
      //   {
      //     hid: "description",
      //     name: "description",
      //     content:
      //       "元年科技是一家为企业数字化转型提供专业技术和服务的公司，具备业务中台和数据中台建设能力的厂商。为企业打造包括数字化转型、智能管理和数据分析平台、",
      //   },
      // ],
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
    //点击底部活动tabs
    tabsFn(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../static/css/page-css/home.less";
</style>
