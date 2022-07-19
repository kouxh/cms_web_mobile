<template>
  <div class="page-catalogue-id">
    <Header />
    <div class="sub-header">
      <Tabbar />
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
    <div class="catalogue-content" style="display: none">
      <ul class="content-list">
        <li class="list-item">
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
        </li>
        <li class="list-item">
          <div
            class="top"
            :style="{
              backgroundImage:
                'url(' + require('../../static/images/three.png') + ')',
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
        </li>
        <li class="list-item">
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
        </li>
      </ul>
      <div class="more">
        <span>查看更多</span>
        <i class="iconfont icon-icon-chakangengduo"></i>
      </div>
    </div>
    <div class="way-content">
      <div class="way-content-main">
        <ul class="type-tabs">
          <li
            :class="typeCurrent == index ? 'activeType' : ''"
            v-for="(item, index) in tabsType"
            :key="index"
            @click="typeFn(index)"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="type-content">
          <li class="type-item">
            <img class="yh" src="../../static/images/yh.png" alt="" />
            <div class="type-item-main">
              <h5>基于RPA技术的企业集团管理会计应用探索企业集团管理会计</h5>
              <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
              <p class="describe">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率的实现路径。结合某省级投资控股集团的实例
              </p>
            </div>
          </li>
          <li class="type-item">
            <img class="yh" src="../../static/images/yh.png" alt="" />
            <div class="type-item-main">
              <h5>基于RPA技术的企业集团管理会计应用探索企业集团管理会计</h5>
              <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
              <p class="describe">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率的实现路径。结合某省级投资控股集团的实例
              </p>
            </div>
          </li>
          <li class="type-item">
            <img class="yh" src="../../static/images/yh.png" alt="" />
            <div class="type-item-main">
              <h5>基于RPA技术的企业集团管理会计应用探索企业集团管理会计</h5>
              <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
              <p class="describe">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率的实现路径。结合某省级投资控股集团的实例
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="more">
        <span>查看更多</span>
        <i class="iconfont icon-icon-chakangengduo"></i>
      </div>
    </div>
    <Footer />
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
      tabsType: ["案例", "观点", "方法"], //找方法
      typeCurrent: 0,
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  mounted() {},
  methods: {
    //跳转到文章详情
    goDetail(id) {
      this.$router.push({
        path: `/subscription/${id}`,
      });
    },

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
    //点击找方法tabs
    typeFn(index) {
      console.log(index);
      this.typeCurrent = index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../static/css/page-css/catalogue/id.less";
</style>
