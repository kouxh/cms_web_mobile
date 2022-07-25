<template>
  <div class="page-article-details">
    <div class="article-main">
      <div class="article-main-mian">
        <h2>{{ detailsData.article.mas_article_title }}</h2>
        <div class="author-info">
          <div class="left">
            <img src="@/static/images/user-photo.png" alt="" />
            <span>{{ detailsData.article.mas_article_author }}</span>
          </div>
          <div class="right">{{ detailsData.article.mas_article_addtime }}</div>
        </div>
        <div class="order-tip" style="display: none">
          您已订阅本文章所属栏目，可畅读栏目所有付费文章
        </div>
        <div
          class="article-content"
          v-for="(item, index) in detailsData.articleDetails.articleDetails"
          :key="index"
          v-html="item.mas_article_details_content"
        >
        </div>
      </div>
      <!-- "isPay": "Y",---O 不需要购买  Y 已购买  N 未购买 -->
      <div class="need-pay" v-if="detailsData.articleDetails.isPay == 'N'">
        <div class="pay-tip">本文为付费文章，更多精彩内容需付费查看！</div>
        <div class="pay-btn">¥{{detailsData.articleDetails.price}}阅读文章</div>
        <div class="integral" style="display: none">
          支付<span>10积分</span>即可阅读当前文章
        </div>
      </div>
      <div class="renew" style="display: none">
        <div class="renew-main">
          <div class="renew-tip">注：本文由《管理会计研究》杂志授权刊登</div>
          <div class="renew-btn">
            <div class="left">您的订阅剩余时长 100 天</div>
            <div class="right">
              去续费
              <i class="iconfont icon-icon-xiangyouhuadong"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="open-vip" style="display: none">
      <div class="open-vip-main">
        <div class="tip">畅读学案例栏目所有内容！</div>
        <div class="btn">
          去开通<i class="iconfont icon-icon-xiangyouhuadong"></i>
        </div>
      </div>
    </div>
    <div class="base-comment">
      <div class="left">
        <input type="text" placeholder="写下你的评论…" />
      </div>
      <div class="right">
        <div class="item">
          <svg
            t="1658215251326"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7167"
            width="16"
            height="16"
          >
            <path
              d="M481.578667 968.832l-157.909334-158.293333H85.418667A85.290667 85.290667 0 0 1 0 725.12L0.426667 128.042667C0.426667 80.768 38.4 42.666667 85.845333 42.666667h852.778667c47.189333 0 85.418667 38.101333 85.376 85.418666l-0.426667 597.12c0 47.146667-38.229333 85.333333-85.376 85.333334h-237.781333l-158.549333 158.293333a42.624 42.624 0 0 1-60.288 0z m456.704-243.712L938.666667 128.042667s-852.906667-0.128-852.906667 0.042666c0 0-0.384 597.077333-0.298667 597.077334H341.333333c11.306667 0 22.186667 4.48 30.165334 12.501333l140.330666 140.629333 140.8-140.672a42.624 42.624 0 0 1 30.165334-12.458666h255.488zM277.333333 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
              fill="#3D3D3D"
              p-id="7168"
            ></path>
          </svg>
          <span>评论</span>
        </div>
        <div class="item">
          <i class="iconfont icon-shoucang"></i>
          <span>收藏</span>
        </div>
        <div class="item">
          <svg
            t="1658215331316"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7306"
            width="20"
            height="17"
          >
            <path
              d="M171.712 571.648l0.352 0.32 287.904 252.8a64 64 0 0 0 82.912 1.344l296.832-244.544a215.584 215.584 0 1 0-301.824-300.576L512 316.672l-25.888-35.616a215.584 215.584 0 1 0-314.4 290.624zM32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512l-295.36 243.392a128 128 0 0 1-165.888-2.592L129.984 620.16A278.976 278.976 0 0 1 32 407.584z"
              p-id="7307"
            ></path>
          </svg>
          <span>点赞</span>
        </div>
      </div>
    </div>
    <div class="comment-box">
      <div class="top-title">
        <div class="top-title-l">
          <h2>用户评价</h2>
          <span>({{ commentList.length }})</span>
        </div>
      </div>
      <ul class="comment-list" v-if="commentList.length > 0">
        <li>
          <div class="li-l">
            <img src="@/static/images/user-photo.png" alt="" />
            <img class="vip-icon" src="@/static/images/vip-icon.png" alt="" />
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
            <img src="@/static/images/user-photo.png" alt="" />
            <img class="vip-icon" src="@/static/images/vip-icon.png" alt="" />
          </div>
          <div class="li-r">
            <span class="name">谢莎莎</span>
            <p>
              书籍收到了，学习到很多管理会计类的知识，发货很快，商品和描述一致，很好很值得购买，会回购推荐的
            </p>
          </div>
        </li>
      </ul>
      <div class="more" v-if="commentList.length > 3">
        <span>{{ commentMore == false ? "查看更多" : "收起" }}</span>
        <i
          class="iconfont"
          :class="commentMore == false ? 'icon-xialashuaxin' : 'icon-shouqi'"
        ></i>
      </div>
      <div class="no-data" v-if="commentList.length == 0">暂无评论</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailsData: {
      type: Object,
    },
  },
  data() {
    return {
      commentList: [], //评论列表
      commentMore: false, //是否查看收藏更多
    };
  },
  created() {
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/articleDetails.less";
.more {
  margin-top: 8px;
}
</style>
