<template>
  <div class="page-catalogue-id">
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
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率的实现路径。结合某省级投资控股集团的实例。
              </p>
            </div>
          </li>
          <li class="type-item">
            <img class="yh" src="../../static/images/yh.png" alt="" />
            <div class="type-item-main">
              <h5>基于RPA技术的企业集团管理会计应用探索企业集团管理会计</h5>
              <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
              <p class="describe">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率的实现路径。结合某省级投资控股集团的实例。
              </p>
            </div>
          </li>
          <li class="type-item">
            <img class="yh" src="../../static/images/yh.png" alt="" />
            <div class="type-item-main">
              <h5>基于RPA技术的企业集团管理会计应用探索企业集团管理会计</h5>
              <span class="author">李晶晶 、黄静、 徐铭、 邬瑜骏</span>
              <p class="describe">
                本文聚焦探讨RPA机器人流程自动化技术在企业集团管理会计中的应用，着重关注RPA提升集团管理会计效率的实现路径。结合某省级投资控股集团的实例。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="more">
      <span>查看更多</span>
      <i class="iconfont icon-icon-chakangengduo"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabsType: ["新闻", "热点", "政策解读"], //找方法
      typeCurrent: 0,
      // activeIndex:this.$route.query.id,//当前下标
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
    //点击找方法tabs
    typeFn(index) {
      console.log(index);
      this.typeCurrent = index;
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
