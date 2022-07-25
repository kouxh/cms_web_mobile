<template>
  <div class="page-go-book">
    <div class="page-header">
      <div class="book-type">
        <ul class="book-type-main">
          <li
            :class="activeType == index ? 'bookActive' : ''"
            v-for="(item, index) in showBookList"
            :key="index"
            @click="bookTypeFn(index,item.mas_booktype_id)"
          >
            {{ item.mas_booktype_name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="book-list">
      <div class="book-list-main">
        <div class="list-title">
          <div class="left">
            综合
            <i class="iconfont icon-icon-zonghe"></i>
          </div>
          <div class="right" @click="changeType">
            <i
              class="iconfont"
              :class="
                listType ? 'icon-icon-liebiao1' : ' icon-icon-liebiaozhankai1'
              "
            ></i>
          </div>
        </div>
         <!-- 加载中 -->
        <div class="loading-box" v-if="listShowType == 0">
          <van-loading type="spinner" />
        </div>
        <!-- 有数据 -->
        <div class="magazine-list" :class="listType ? '' : 'two'" v-if="listShowType == 1">
          <dl v-for="(it, idx) in listData" :key="idx" @click="details(it.mas_book_id)">
            <dt>
              <img :src="it.mas_book_img" alt="" />
            </dt>
            <dd>
              <h5 class="title">{{ it.mas_book_name }}</h5>
              <p>出版社：{{ it.mas_book_press }}</p>
              <p>作者：{{ it.mas_book_author }}</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥{{it.mas_book_price}}</span>
                  <span class="original">¥{{it.mas_book_price}}</span>
                </div>
                <div class="dd-r">
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </dd>
          </dl>
          <!-- <dl @click="details(6)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5</span>
                  <span class="original">¥43.5</span>
                </div>
                <div class="dd-r">
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </dd>
          </dl> -->
        </div>
        <!-- 无数据 -->
        <div class="no-data-box" v-if="listShowType == 2">
          <img src="@/static/images/no-data.png" alt="" />
          <div class="tip">目前还没有内容哦～</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      typeCurrent: 0,
      swiperOption: {
        watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航。
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        effect: "slide", //切换效果：默认为“位移切换”
        loop: true, // 无限循环
        autoplay: false, //可选选项，自动滑动
        speed: 3000,
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 4, // 在轮播模式下定义slides的数量多少为一组。
        loopFillGroupWithBlank: true, //在loop模式下，为group填充空白slide
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
      swiperTwoOption: {
        loop: true, // 无限循环
        autoplay: false, //可选选项，自动滑动
        speed: 3000,
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 4, // 在轮播模式下定义slides的数量多少为一组。
        loopFillGroupWithBlank: true, //在loop模式下，为group填充空白slide
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right-two", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left-two", //上一张标签类名可以自定义
        },
      },
      activeType: 0, //书默认选中的类型
      showBookList: [],//书籍类型列表
      listData: [], //列表数据
      bookTypeId: "", //书籍类型id
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
      isShow: true, //是否展示更多按钮
      listType: true, //true展示两个 false展示一个
    };
  },
  head() {
    return {
      title: "学案例_读书破万“卷”，进阶正当时-管理会计研究",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
      },
      className: "BookController",
      classMethod: "bookList",
    });
    if (res.bol) {
      return {
        showBookList: res.data.bookType,
        listData: res.data.bookList[0].list,
      };
    }
  },
  created() {

  },
  components: {
    Swiper,
    SwiperSlide,
  },

  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // },
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    //点击图书类型
    bookTypeFn(index,id) {
      this.activeType = index;
      this.bookTypeId=id;
      this.listShowType=0;
      this.listData=[];
      this.getList();
    },
    //切换商品布局
    changeType() {
      this.listType = !this.listType;
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/gsd/${id}`,
      });
    },
      //根据条件搜索
    getList() {
      this.commonData();
    },
    //公共请求接口
    async commonData() {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId:this.$route.query.menuId,
          bookTypeId: this.bookTypeId,
          type: "list",
        },
        className: "BookController",
        classMethod: "bookList",
      });
      if (res.bol) {
        this.listData=res.data.bookList;
        this.listShowType = res.data.bookList.length ? 1 : 2;
      }else{
        this.$message.error(res.msg);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/gsd.less";
</style>
