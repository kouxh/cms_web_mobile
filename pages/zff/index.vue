<template>
  <div class="page-catalogue-id">
    <div class="page-header">
      <div class="select-box">
        <div class="select-group">
          <div class="input-group" @click="selectClick">
            <span class="title">{{ defaultValue }}</span>
            <svg
              t="1660016484804"
              :class="selectList ? 'select_img_rotate' : ''"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4028"
              width="16"
              height="16"
            >
              <path
                d="M940.032 455.049846a63.015385 63.015385 0 0 1 7.325538 80.423385l-7.325538 8.664615-356.430769 356.509539a63.015385 63.015385 0 0 1-80.344616 7.325538l-8.822153-7.325538L138.003692 544.295385a63.015385 63.015385 0 0 1 80.344616-96.413539l8.743384 7.246769 311.926154 311.926154 311.926154-311.926154a63.015385 63.015385 0 0 1 80.344615-7.246769l8.743385 7.246769z"
                fill="#333333"
                p-id="4029"
              ></path>
            </svg>
          </div>
          <ul class="select-item" v-show="selectList">
            <li
              v-for="(item, index) in major"
              @click="oNitem(index, item)"
              :key="index"
              :class="current == index ? 'active' : ''"
            >
              {{ item.mas_tag_name }}
            </li>
          </ul>
        </div>
        <div class="select-group">
          <div class="input-group" @click="industryClick">
            <span class="title">{{ industryValue }}</span>
            <svg
              t="1660016484804"
              :class="industryShow ? 'select_img_rotate' : ''"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4028"
              width="16"
              height="16"
            >
              <path
                d="M940.032 455.049846a63.015385 63.015385 0 0 1 7.325538 80.423385l-7.325538 8.664615-356.430769 356.509539a63.015385 63.015385 0 0 1-80.344616 7.325538l-8.822153-7.325538L138.003692 544.295385a63.015385 63.015385 0 0 1 80.344616-96.413539l8.743384 7.246769 311.926154 311.926154 311.926154-311.926154a63.015385 63.015385 0 0 1 80.344615-7.246769l8.743385 7.246769z"
                fill="#333333"
                p-id="4029"
              ></path>
            </svg>
          </div>
          <ul class="select-item" v-show="industryShow">
            <li
              v-for="(item, index) in industryData"
              :key="index"
              :class="industryCurrent == index ? 'active' : ''"
              @click="industryFn(index, item)"
            >
              {{ item.mas_industry_name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="way-content">
      <div class="way-content-main">
        <ul class="type-tabs">
          <li
            :class="typeCurrent == index ? 'activeType' : ''"
            v-for="(item, index) in tabsType"
            :key="index"
            @click="onTab(index, item.mas_article_type_id)"
          >
            {{ item.mas_article_type_name }}
          </li>
        </ul>
        <!-- 加载中 -->
        <div class="loading-box" v-if="listShowType == 0">
          <van-loading type="spinner" />
        </div>
        <!-- 有数据 -->
        <ul class="type-content" v-if="listShowType == 1">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="已经到底啦！"
            @load="onLoad"
          >
            <li
              class="type-item"
              v-for="(item, index) in listData"
              :key="index"
            >
              <nuxt-link :to="'/zff/' + item.mas_article_id">
                <img class="yh" src="@/static/images/yh.png" alt="" />
                <div class="type-item-main">
                  <h5 class="twoline">{{ item.mas_article_title }}</h5>
                  <span class="author">{{ item.mas_article_author }}</span>
                  <p class="describe threeline">
                    {{ item.mas_article_introduce }}
                  </p>
                </div>
              </nuxt-link>
            </li>
          </van-list>
        </ul>
        <!-- 无数据 -->
        <div class="no-data-box" v-if="listShowType == 2">
          <img src="@/static/images/no-data.png" alt="" />
          <div class="tip">目前还没有内容哦～</div>
        </div>
      </div>
    </div>
    <div class="more" v-show="!finished && listData.length > 0">
      <span>查看更多</span>
      <svg t="1660016701886" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4193" width="16" height="16"><path d="M350.354286 227.693714a47.542857 47.542857 0 0 1 60.708571-5.485714l6.582857 5.485714L686.592 496.64a47.542857 47.542857 0 0 1 5.485714 60.708571l-5.485714 6.582858-268.946286 268.946285a47.542857 47.542857 0 0 1-72.777143-60.708571l5.485715-6.582857L585.728 530.285714 350.354286 294.985143a47.542857 47.542857 0 0 1-5.485715-60.708572l5.485715-6.582857z" fill="#DB6B3A" p-id="4194"></path></svg>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      major: [], //专业
      current: 0, //专业默认索引
      defaultValue: "专业",
      selectList: false, //先将下拉框隐藏
      industryShow: false, //行业
      industryValue: "行业",
      industryCurrent: 0, //行业默认索引
      industryData: [], //行业列表数据
      tabsType: [], //文章类型
      typeCurrent: 0,
      listData: [], //总列表数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      finished: false, //数据是否加载完毕
      loading: false, //true 异步操作并更新数据 数据更新完毕后，将 loading 设置成 false 加载状态结束
      articleTypeId: "", //文章类型
      tagId: "", //专业类型
      industryId: "", //行业类型
      moretype: "list", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
    };
  },
  head() {
    return {
      title: "找方法_探索新蓝海，管理新升级-管理会计研究",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "寻转型方法、学新技术体系，让企业在挑战与转向的航行中找到合适“舵手”，顺利抵岸。",
        },
      ],
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
        page: 1,
        limit: 6,
      },
      className: "ArticleController",
      classMethod: "zff",
    });
    if (res.bol) {
      return {
        tabsType: res.data.articleType,
        major: res.data.tag,
        industryData: res.data.industry,
        listData: res.data.articleList.articleList,
        total: res.data.articleList.articleCount,
        // showlaoding: false,
        finished: res.data.articleList.articleCount > 6 ? false : true,
      };
    }
  },
  mounted() {},
  methods: {
    //点击专业显示或隐藏下拉框
    selectClick() {
      this.selectList = !this.selectList;
    },
    //点击专业每一项
    oNitem(index, item) {
      this.selectList = false;
      this.defaultValue = item.mas_tag_name;
      this.current = index;
      this.tagId = item.mas_tag_id;
      this.pageIndex = 1;
      this.listData = [];
      this.finished = false;
      this.listShowType = 0;
      this.getList();
    },
    //行业
    industryClick() {
      this.industryShow = !this.industryShow; //点击显示或隐藏下拉框
    },
    //点击行业下拉框
    industryFn(index, item) {
      this.industryShow = false;
      this.industryValue = item.mas_industry_name;
      this.industryCurrent = index;
      this.industryId = item.mas_industry_id;
      this.pageIndex = 1;
      this.listData = [];
      this.finished = false;
      this.listShowType = 0;
      this.getList();
    },
    //点击tabs
    onTab(index, typeId) {
      this.pageIndex = 1;
      this.listData = [];
      this.finished = false;
      this.listShowType = 0;
      this.tagId = "";
      this.defaultValue = "专业";
      this.industryId = "";
      this.current = "-1";
      this.industryCurrent = "-1";
      this.industryValue = "行业";
      this.typeCurrent = index;
      this.articleTypeId = typeId;
      this.getList();
    },
    //滑动加载
    onLoad() {
      let pageIndex = this.pageIndex + 1;
      this.commonData(pageIndex);
    },
    //根据条件搜索
    getList() {
      this.commonData(this.pageIndex);
    },
    //公共请求接口
    async commonData(pageIndex) {
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId: this.$route.query.menuId,
          page: pageIndex,
          limit: this.pageSize,
          articleTypeId: this.articleTypeId,
          tagId: this.tagId,
          industryId: this.industryId,
          type: this.moretype,
        },
        className: "ArticleController",
        classMethod: "zff",
      });
      if (res.bol) {
        let articleArr = res.data.articleList;
        this.total = res.data.articleCount;
        this.listShowType = this.total ? 1 : 2;
        this.loading = false; // 加载状态结束
        if (this.total / this.pageSize > this.pageIndex) {
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // 数据全部加载完成
        }
        // 将新请求到的数据添加到之前的数据后
        console.log(this.pageIndex, "this.pageIndex");
        this.listData = this.listData.concat(articleArr);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/catalogue/id.less";
.more {
  margin-top: 8px;
}
</style>
