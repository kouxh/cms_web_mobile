<template>
  <div class="page-zz-details">
    <Header />
    <div class="zz-info">
      <van-swipe @change="onChange" :height="375" class="my-swipe">
        <van-swipe-item v-for="(image, index) in magazineDetails.mas_magazine_img" :key="index"> <img v-lazy="image" /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{magazineDetails.mas_magazine_img.length}}</div>
        </template>
      </van-swipe>
      <div class="price-box">
        <div class="original">¥{{checkedPrice}}</div>
        <div class="present">¥45.67</div>
        <div class="present">8.2折</div>
      </div>
      <h2>{{magazineDetails.mas_magazine_title_main}}</h2>
    </div>
    <div class="zz-sku">
      <h2>订阅规格</h2>
      <div class="type-box">
        <button :class="priceCurrent == 1 ? 'active' : ''" @click="onSelect(1,magazineDetails.mas_magazine_flat)">平装：{{magazineDetails.mas_magazine_flat}}</button>
        <button :class="priceCurrent == 2 ? 'active' : ''" @click="onSelect(2,magazineDetails.mas_magazine_electronics)">电子刊：{{magazineDetails.mas_magazine_electronics}}</button>
      </div>
    </div>
    <div class="zz-introduce">
      <p>杂志名称：{{magazineDetails.mas_magazine_title_main}}</p>
      <p>出版周期：{{magazineDetails.mas_magazine_publication_cycle}}</p>
      <p>
        {{magazineDetails.mas_magazine_notes}}
      </p>
    </div>
    <div class="comment-box">
      <div class="top-title">
        <div class="top-title-l">
          <h2>用户评价</h2>
          <span>({{commentList.length}})</span>
        </div>
      </div>
      <ul class="comment-list" v-if="commentList.length > 0">
        <li>
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
        </li>
        <li>
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
          @click="zzDetails(item.mas_magazine_id)"
        >
          <dt>
            <img :src="item.mas_magazine_master_img" alt="" />
          </dt>
          <dd>{{ item.mas_magazine_title_main }}</dd>
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
      <div class="image-box" v-html="magazineDetails.mas_magazine_text">
        <!-- <img src="" alt="" /> -->
      </div>
    </div>
    <div class="zz-action">
      <div class="operate">
        <i class="iconfont icon-shouye"></i>
        <nuxt-link to="/">首页</nuxt-link>
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
      current: 0,//轮播图默认
      commentList: [], //评论列表
      commentMore: false, //是否查看收藏更多
      magazineDetails: "", //杂志详情数据
      recommend: [], //杂志推荐
      priceCurrent:1,//1是平装2是电子刊
      checkedPrice:'',//选中价格
    };
  },
   head() {
    return {
      title: "《管理会计研究》杂志_新技术 • 新实践 • 新理念-管理会计研究",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "《管理会计研究》杂志涵盖管理会计理论与案例实践，包揽前沿技术应用与数字驱动业务创新，浓缩为一本专业、深度、有实战意义的杂志，让你一书尽揽管理智慧、一站get转型借鉴与指导。",
        },
      ],
    };
  },

  computed: {},
  async asyncData({ $axios, store, params }) {
    let res = await $axios.notNeedlogin({
      className: "MagazineController",
      classMethod: "getMagazineDetails",
      data: {
        magazineId: parseInt(params.id),
      },
    });
    console.log(res, "读杂志详情");
    if (res.bol) {
      return {
        magazineDetails: res.data.magazineDetails,
        commentList: res.data.magazineComment,
        recommend: res.data.recommend,
      };
    }
  },
  created() {},
  mounted() {
    this.checkedPrice=this.magazineDetails.mas_magazine_flat;
  },
  methods: {
    //轮播图切换
    onChange(index) {
      this.current = index;
    },
     //点击到详情
    zzDetails(id) {
      this.$router.push({
        path: `/dzz/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
    //点击购买类型
    onSelect(index,price) {
      this.priceCurrent = index;
      this.checkedPrice=price;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/static/css/page-css/zz-details.less";
</style>
