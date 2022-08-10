<template>
  <div class="page-catalogue-id">
    <div class="way-content">
      <div class="way-content-main">
        <ul class="type-tabs">
          <li
            :class="typeCurrent == index ? 'activeType' : ''"
            v-for="(item, index) in tabsType"
            :key="index"
            @click="typeFn(index, item.mas_article_type_id)"
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
              @click="goDetail(item.mas_article_id)"
            >
              <img class="yh" src="@/static/images/yh.png" alt="" />
              <div class="type-item-main">
                <h5 class="twoline">{{ item.mas_article_title }}</h5>
                <span class="author">{{ item.mas_article_author }}</span>
                <p class="describe threeline">
                  {{ item.mas_article_introduce }}
                </p>
              </div>
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
      tabsType: [], //找方法
      typeCurrent: 0,
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      listData: [], //总列表数据
      loading: false, //true 异步操作并更新数据 数据更新完毕后，将 loading 设置成 false 加载状态结束
      finished: false, //数据是否加载完毕
      articleTypeId: "", //文章类型
      moretype: "list", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
    };
  },
  head() {
    return {
      title: "淘资讯_新鲜掌握热点，精准洞悉趋势-管理会计研究",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "深刻理解政策导向，精准洞悉行业趋势。政策话题，行业动向，热点资讯新鲜掌握！",
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
      classMethod: "tzx",
    });
    if (res.bol) {
      return {
        tabsType: res.data.articleType,
        listData: res.data.articleList.articleList,
        total: res.data.articleList.articleCount,
        finished: res.data.articleList.articleCount > 6 ? false : true,
      };
    }
  },
  mounted() {},
  methods: {
    //跳转到文章详情
    goDetail(id) {
      this.$router.push({
        path: `/tzx/${id}`,
      });
    },
    //点击找方法tabs
    typeFn(index, typeId) {
      this.typeCurrent = index;
      this.articleTypeId = typeId;
      this.pageIndex = 1;
      this.listShowType = 0;
      this.finished = false;
      this.listData = [];
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
          type: this.moretype,
        },
        className: "ArticleController",
        classMethod: "tzx",
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
.page-catalogue-id {
  .way-content {
    margin-top: 10px;
  }
  .more {
    margin-top: 8px;
  }
}
</style>
