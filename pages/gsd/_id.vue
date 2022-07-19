<template>
  <div class="page-zz-details">
    <Header />
    <div class="zz-info">
      <van-swipe @change="onChange" :height="375" class="my-swipe">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
      <div class="price-box">
        <div class="original">¥50.22</div>
        <div class="present">¥45.67</div>
        <div class="present">8.2折</div>
      </div>
      <h2>《管理会计研究》2022年第1期 总第22期 南方出版传媒股份有限公司</h2>
    </div>
    <div class="zz-introduce">
      <p>杂志名称：管理会计研究</p>
      <p>出版周期：半月刊</p>
      <p>
        简介：韩向东主编，北京大学出版，智能管理会计，赋能业财融合的实战指南书籍出版社简介文案文案
      </p>
    </div>
    <div class="comment-box">
      <div class="top-title">
        <div class="top-title-l">
          <h2>用户评价</h2>
          <span>(500+)</span>
        </div>
      </div>
      <ul class="comment-list" v-if="commentList.length > 0">
        <li>
          <div class="li-l">
            <img src="" alt="" />
            <img class="vip-icon" src="../../static/images/vip-icon.png" alt="">
          </div>
          <div class="li-r">
            <span class="name">谢莎莎</span>
            <p>
              书籍收到了，学习到很多管理会计类的知识，发货很快，商品和描述一致，很好很值得购买，会回购推荐的
            </p>
          </div>
        </li>
        <li>
          <div class="li-l">
            <img src="" alt="" />
            <img class="vip-icon" src="../../static/images/vip-icon.png" alt="">
          </div>
          <div class="li-r">
            <span class="name">谢莎莎</span>
            <p>
              书籍收到了，学习到很多管理会计类的知识，发货很快，商品和描述一致，很好很值得购买，会回购推荐的
            </p>
          </div>
        </li>
      </ul>
      <div class="more" v-if="commentList.length > 0">
        <span>{{commentMore==false?'查看更多':'收起'}}</span>
        <i class="iconfont" :class="commentMore==false ? 'icon-xialashuaxin' : 'icon-shouqi'"></i>
      </div>
      <div class="no-data" v-if="commentList.length == 0">暂无评论</div>
    </div>
    <div class="hot-recommend">
      <div class="top-title">
        <div class="top-title-l">
          <h2>热门推荐</h2>
        </div>
      </div>
      <div class="hot-list">
        <dl>
          <dt>
            <img src="@/static/images/book.png" alt="" />
          </dt>
          <dd>管理会计书籍名称 名称名称名称</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/static/images/book.png" alt="" />
          </dt>
          <dd>管理会计书籍名称 名称名称名称</dd>
        </dl>
        <dl>
          <dt>
            <img src="@/static/images/book.png" alt="" />
          </dt>
          <dd>管理会计书籍名称 名称名称名称</dd>
        </dl>
      </div>
    </div>
    <div class="image-text">
      <div class="top-title">
        <div class="top-title-l">
          <h2>图文详情</h2>
        </div>
      </div>
      <div class="image-box">
        <img src="" alt="" />
      </div>
    </div>
    <div class="zz-action">
      <div class="operate">
        <i class="iconfont icon-shouye"></i>
        <a>首页</a>
      </div>
      <div class="operate">
        <i class="iconfont icon-shoucang"></i>
        <a>收藏</a>
      </div>
      <button>立即购买</button>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "not",
  data() {
    return {
      current: 0,
      commentList: ["1"], //评论列表
      commentMore:false,//是否查看收藏更多
    };
  },
  head() {},

  computed: {},
  async asyncData({ $axios }) {
    // let res = await getSliders($axios);
    //  let res =await $axios.get('https://v2.chinamas.cn/api/slider/getSliders');
    // console.log(res.data.list);
    // asyncData 中没有this
    // return { list: res.list };
  },
  created() {},
  mounted() {},
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/static/css/page-css/zz-details.less";
</style>
