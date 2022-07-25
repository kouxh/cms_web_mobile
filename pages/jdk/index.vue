<template>
  <div class="page-catalogue-id">
    <div class="page-header">
      <!-- <Tabbar :activeIndex="activeIndex"/> -->
      <div class="select-box">
        <div class="select-group">
          <div class="input-group" @click="selectClick">
            <span class="title">{{ defaultValue }}</span>
            <i
              class="iconfont icon-xialaliebiao"
              :class="selectList ? 'select_img_rotate' : ''"
            ></i>
          </div>
          <ul class="select-item" v-show="selectList">
            <li
              v-for="(item, index) in major"
              :key="index"
              :class="current == index ? 'active' : ''"
              @click="cutValue(item, index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="select-group">
          <div class="input-group" @click="industryClick">
            <span class="title">{{ industryValue }}</span>
            <i
              class="iconfont icon-xialaliebiao"
              :class="industryShow ? 'select_img_rotate' : ''"
            ></i>
          </div>
          <ul class="select-item" v-show="industryShow">
            <li
              v-for="(item, index) in industryData"
              :key="index"
              :class="industryCurrent == index ? 'active' : ''"
              @click="industryFn(item, index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="catalogue-content">
      <!-- 加载中 -->
      <div class="loading-box" v-if="listShowType == 0">
        <van-loading type="spinner" />
      </div>
      <!-- 有数据 -->
      <ul class="content-list" v-if="listShowType == 1">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="已经到底啦！"
          @load="onLoad"
        >
          <li class="list-item" v-for="(item, index) in listData" :key="index">
            <div
              class="top"
              :style="{
                backgroundImage:
                  'url(' + require('../../static/images/two.png') + ')',
              }"
            >
              <div class="top-main">
                <div class="top-main-l">
                  <div class="top-main-l-l">
                    <img :src="item.mas_master_photo" alt="" />
                  </div>
                  <div class="top-main-l-r">
                    <h5>{{ item.mas_master_user_name }}</h5>
                    <p>{{ item.mas_master_duty }}</p>
                  </div>
                </div>
                <div class="top-main-r">更多作品</div>
              </div>
            </div>
            <div class="bottom">
              <div class="title-box">
                <h2>
                  <span>付费</span
                  >企业财务的业财融合新企业财务的业企业财务的业财融合新企
                </h2>
              </div>
              <p class="threeline">
                {{ item.mas_master_golden }}
              </p>
            </div>
          </li>
        </van-list>
        <!-- <li class="list-item">
          <div
            class="top"
            :style="{
              backgroundImage:
                'url(' + require('../../static/images/two.png') + ')',
            }"
          >
            <div class="top-main">
              <div class="top-main-l">
                <div class="top-main-l-l">
                  <img src="" alt="" />
                </div>
                <div class="top-main-l-r">
                  <h5>刘琴</h5>
                  <p>上海国家会计学院教授</p>
                </div>
              </div>
              <div class="top-main-r">更多作品</div>
            </div>
          </div>
          <div class="bottom">
            <div class="title-box">
              <h2>
                <span>付费</span
                >企业财务的业财融合新企业财务的业企业财务的业财融合新企
              </h2>
            </div>
            <p>
              本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率中的应用，着重关注RPA提升集团管理会…
            </p>
          </div>
        </li> -->
      </ul>
      <!-- 无数据 -->
      <div class="no-data-box" v-if="listShowType == 2">
        <img src="@/static/images/no-data.png" alt="" />
        <div class="tip">目前还没有内容哦～</div>
      </div>
      <div class="more" v-show="!finished && listData.length > 0">
        <span>查看更多</span>
        <i class="iconfont icon-icon-chakangengduo"></i>
      </div>
    </div>
  </div>
</template>
<script>
const major = [
  "成本管理",
  "绩效管理",
  "预算管理",
  "财务管理",
  "管理会计",
  "人工智能",
];
export default {
  data() {
    return {
      major, //专业
      current: 0, //专业默认索引
      defaultValue: "专业",
      selectList: false, //先将下拉框隐藏
      industryShow: false, //行业
      industryValue: "行业",
      industryCurrent: 0, //行业默认索引
      industryData: ["房地产行业", "行政事业单位", "能源行业", "零售行业"],
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      listData: [], //总列表数据
      finished: false, //数据是否加载完成
      loading: false, //true 异步操作并更新数据 数据更新完毕后，将 loading 设置成 false 加载状态结束
      moretype: "list", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
    };
  },
  head() {
    return {
      title: "见大咖_汇行业之先，领前沿思想-管理会计研究",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "行业领袖、专家学者都在关注什么？见大咖，一步抢先，步步抢先。",
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
      className: "MasterController",
      classMethod: "master",
    });
    if (res.bol) {
      // res.data.masterList.master.forEach((item) => {
      //   let newData = [];
      //   newData = item.tag_name.split(",");
      //   item.newData = newData;
      // });
      return {
        listData: res.data.masterList.master,
        total: res.data.masterList.masterCount,
        finished: res.data.masterList.masterCount > 6 ? false : true,
      };
    }
  },
  mounted() {},
  methods: {
    //跳转到文章详情
    // goDetail(id) {
    //   this.$router.push({
    //     path: `/subscription/${id}`,
    //   });
    // },

    //点击专业显示或隐藏下拉框
    selectClick() {
      this.selectList = !this.selectList;
    },
    //点击专业每一项
    cutValue(item, index) {
      console.log(item, index);
      this.selectList = false;
      this.defaultValue = item;
      this.current = index;
    },
    //行业
    industryClick() {
      this.industryShow = !this.industryShow; //点击显示或隐藏下拉框
    },
    //点击行业下拉框
    industryFn(item, index) {
      this.industryShow = false;
      this.industryValue = item;
      this.industryCurrent = index;
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
    //根据条件搜索
    async commonData(pageIndex) {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId: this.$route.query.menuId,
          // selectId: parseInt(this.current + 1),
          selectVal: this.searchValue,
          page: pageIndex,
          limit: this.pageSize,
          type: this.moretype,
        },
        className: "MasterController",
        classMethod: "master",
      });
      if (res.bol) {
        // res.data.master.forEach((item) => {
        //   let newData = [];
        //   newData = item.tag_name.split(",");
        //   item.newData = newData;
        // });
        let masterArr = res.data.master;
        this.total = res.data.masterCount;
        this.listShowType = this.total ? 1 : 2;
        this.loading = false; // 加载状态结束
        if (this.total / this.pageSize > this.pageIndex) {
          this.showlaoding = false;
          this.finished = false;
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // 数据全部加载完成
        }
        // 将新请求到的数据添加到之前的数据后
        console.log(this.pageIndex, "this.pageIndex");
        this.listData = this.listData.concat(masterArr);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/catalogue/id.less";
</style>
