<template>
  <div class="page-zz-details">
    <Header />
    <div class="zz-info">
      <van-swipe @change="onChange" :height="375" class="my-swipe">
        <van-swipe-item v-for="(image, index) in bookData.mas_book_header_img" :key="index"> <img v-lazy="image" /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{bookData.mas_book_header_img.length}}</div>
        </template>
        <!-- <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template> -->
      </van-swipe>
      <div class="price-box">
        <div class="original">¥{{ bookData.mas_book_price }}</div>
        <div class="present">¥{{ bookData.mas_book_o_price }}</div>
        <div class="present">8.2折</div>
      </div>
      <h2>{{ bookData.mas_book_name }}</h2>
    </div>
    <div class="zz-introduce">
      <p>杂志名称：{{ bookData.mas_book_name }}</p>
      <p>出版周期：{{ bookData.mas_magazine_publication_cycle }}</p>
      <p>
        {{ bookData.mas_book_describe }}
      </p>
    </div>
    <div class="comment-box">
      <div class="top-title">
        <div class="top-title-l">
          <h2>用户评价</h2>
          <span>({{ commentList.length }})</span>
        </div>
      </div>
      <ul class="comment-list" v-if="commentList.length > 0">
        <li v-for="(item, index) in commentList" :key="index">
          <div class="li-l">
            <img :src="item.mas_user_header_img" alt="" />
            <img class="vip-icon" src="@/static/images/vip-icon.png" alt="" />
          </div>
          <div class="li-r">
            <span class="name">{{ item.mas_user_name }}</span>
            <p>{{ item.mas_book_comment }}</p>
          </div>
        </li>
        <!-- <li>
          <div class="li-l">
            <img src="@/static/images/user-photo.png" alt="" />
            <img
              class="vip-icon"
              src="../../static/images/vip-icon.png"
              alt=""
            />
          </div>
          <div class="li-r">
            <span class="name">谢莎莎</span>
            <p>
              书籍收到了，学习到很多管理会计类的知识，发货很快，商品和描述一致，很好很值得购买，会回购推荐的
            </p>
          </div>
        </li> -->
      </ul>
      <div class="more" v-if="commentList.length >3">
        <span>{{ commentMore == false ? "查看更多" : "收起" }}</span>
        <svg v-if="!commentMore" t="1660016230996" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3698" width="16" height="16"><path d="M796.306286 350.354286a47.542857 47.542857 0 0 1 5.485714 60.708571l-5.485714 6.582857L527.36 686.592a47.542857 47.542857 0 0 1-60.708571 5.485714l-6.582858-5.485714L191.122286 417.645714a47.542857 47.542857 0 0 1 60.708571-72.777143l6.582857 5.485715L493.714286 585.728 729.014857 350.354286a47.542857 47.542857 0 0 1 60.708572-5.485715l6.582857 5.485715z" fill="#999999" p-id="3699"></path></svg>
        <svg v-else t="1660016254017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3863" width="16" height="16"><path d="M227.693714 673.645714a47.542857 47.542857 0 0 1-5.485714-60.708571l5.485714-6.582857L496.64 337.408a47.542857 47.542857 0 0 1 60.708571-5.485714l6.582858 5.485714 268.946285 268.946286a47.542857 47.542857 0 0 1-60.708571 72.777143l-6.582857-5.485715L530.285714 438.272 294.985143 673.645714a47.542857 47.542857 0 0 1-60.708572 5.485715l-6.582857-5.485715z" fill="#999999" p-id="3864"></path></svg>
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
        <dl
          v-for="(item, index) in recommend"
          :key="index"
          @click="BookDetails(item.mas_book_id)"
        >
          <dt>
            <img :src="item.mas_book_img" alt="" />
          </dt>
          <dd>{{ item.mas_book_name }}</dd>
        </dl>
        <!-- <dl>
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
        </dl> -->
      </div>
    </div>
    <div class="image-text">
      <div class="top-title">
        <div class="top-title-l">
          <h2>图文详情</h2>
        </div>
      </div>
      <div class="image-box" v-html="bookData.mas_book_content">
        <!-- <img src="" alt="" /> -->
      </div>
    </div>
    <div class="zz-action">
      <div class="operate">
        <svg
          t="1660015845641"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1988"
          width="20"
          height="20"
        >
          <path
            d="M512 185.770667a19.114667 19.114667 0 0 0-11.349333 3.712l-307.2 225.578666a19.328 19.328 0 0 0-7.850667 15.573334l0.768 388.48a19.2 19.2 0 0 0 19.2 19.2H819.2a19.2 19.2 0 0 0 19.2-19.2v-388.48a19.285333 19.285333 0 0 0-7.850667-15.530667l-307.2-225.664A19.072 19.072 0 0 0 512 185.770667M512 128c16.341333 0 32.213333 5.205333 45.397333 14.890667l307.2 225.621333c19.754667 14.506667 31.402667 37.589333 31.402667 62.122667v388.394666A76.8 76.8 0 0 1 819.2 896H205.610667a76.885333 76.885333 0 0 1-76.8-76.8L128 430.72a77.056 77.056 0 0 1 31.402667-62.250667l307.2-225.578666C479.744 133.205333 495.658667 128 512 128z"
            fill="#333333"
            p-id="1989"
          ></path>
          <path
            d="M588.8 838.4v-192a19.2 19.2 0 0 0-19.2-19.2h-115.2a19.2 19.2 0 0 0-19.2 19.2v192H377.6v-192a76.8 76.8 0 0 1 76.8-76.8h115.2a76.8 76.8 0 0 1 76.8 76.8v192H588.8z"
            fill="#333333"
            p-id="1990"
          ></path>
        </svg>
        <nuxt-link to="/">首页</nuxt-link>
      </div>
      <div class="operate">
        <svg
          t="1660015699731"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1823"
          width="20"
          height="20"
        >
          <path
            d="M538.410667 133.546667c16.682667 7.253333 29.866667 20.992 36.736 38.229333l69.248 173.696c1.621333 4.053333 5.12 6.698667 9.045333 7.04l179.712 15.018667c37.717333 3.157333 65.621333 37.333333 62.634667 76.16a71.68 71.68 0 0 1-23.466667 47.957333l-136.96 122.410667a12.330667 12.330667 0 0 0-3.626667 11.861333l41.813334 182.997333c8.704 37.845333-13.781333 75.989333-50.474667 85.12a66.304 66.304 0 0 1-51.797333-8.533333l-153.856-98.048a9.941333 9.941333 0 0 0-10.837334 0l-153.856 98.048c-32.341333 20.608-74.624 9.941333-94.250666-23.594667a72.96 72.96 0 0 1-8.064-53.034666l41.813333-182.954667a12.330667 12.330667 0 0 0-3.584-11.904l-136.96-122.368a72.533333 72.533333 0 0 1-7.381333-99.413333 67.584 67.584 0 0 1 46.506666-24.746667l179.754667-14.976a10.837333 10.837333 0 0 0 9.045333-7.04l69.248-173.653333c14.421333-36.224 54.528-53.504 89.557334-38.314667z m-25.472 58.666666c-1.109333-0.426667-2.474667-0.128-3.626667 1.365334l-1.024 1.92-69.248 173.653333a74.922667 74.922667 0 0 1-56.618667 46.250667l-6.528 0.853333-179.626666 15.018667c-0.853333 0.085333-1.706667 0.554667-2.56 1.536a8.874667 8.874667 0 0 0-0.768 9.301333l1.408 1.834667 137.557333 122.88c18.645333 17.152 27.434667 42.24 23.978667 66.688l-1.237334 6.656-41.813333 182.997333a8.96 8.96 0 0 0 0.853333 6.4c1.109333 1.834667 2.346667 2.56 3.498667 2.389333l1.152-0.426666 153.6-97.92a73.941333 73.941333 0 0 1 73.685333-3.712l6.186667 3.584 153.898667 98.090666c0.682667 0.426667 1.28 0.512 1.92 0.341334 1.834667-0.426667 3.669333-2.986667 3.84-6.229334l-0.256-2.517333-41.856-182.997333a76.373333 76.373333 0 0 1 18.432-68.992l4.949333-4.864 136.874667-122.325334a7.765333 7.765333 0 0 0 2.346666-5.205333c0.298667-3.456-1.237333-6.058667-2.901333-7.04l-1.237333-0.426667-179.669334-15.061333a74.666667 74.666667 0 0 1-60.586666-41.216l-2.602667-5.845333-69.290667-173.781334a6.4 6.4 0 0 0-1.706666-2.56l-1.024-0.64z"
            fill="#333333"
            p-id="1824"
          ></path>
        </svg>
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
      current: 0, //当前轮播图索引
      commentList: [], //书评论数据列表
      commentMore: false, //是否查看评论更多
      bookData: "", //书详情数据
      recommend: [], //书推荐
      meau: {}, //导航信息
    };
  },
  head() {},

  async asyncData({ $axios, store, params }) {
    let res = await $axios.notNeedlogin({
      className: "BookController",
      classMethod: "getBookDetails",
      data: {
        bookId: parseInt(params.id),
      },
    });
    if (res.bol) {
      return {
        bookData: res.data.bookData,
        commentList: res.data.bookComment,
        recommend: res.data.recommend.list,
        meau: res.data.recommend.menu,
      };
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    //轮播图切换
    onChange(index) {
      this.current = index;
    },
    //点击到详情
    BookDetails(id) {
      this.$router.push({
        path: `/gsd/${id}`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/static/css/page-css/zz-details.less";
</style>
