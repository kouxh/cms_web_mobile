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
            <svg t="1660023344866" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4723" width="13" height="13"><path d="M512 742.4l334.08-267.264A51.2 51.2 0 0 0 814.08 384H145.92a51.2 51.2 0 0 0-32 91.136L448 742.4a51.2 51.2 0 0 0 64 0z" fill="#DB6B3A" p-id="4724"></path></svg>
          </div>
          <div class="right" @click="changeType">
            <svg v-if="listType" t="1660016026932" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3533" width="16" height="16"><path d="M352 0A96 96 0 0 1 448 96v256A96 96 0 0 1 352 448h-256A96 96 0 0 1 0 352v-256A96 96 0 0 1 96 0h256z m0 83.2h-256a12.8 12.8 0 0 0-12.352 9.408L83.2 96v256a12.8 12.8 0 0 0 9.408 12.352L96 364.8h256a12.8 12.8 0 0 0 12.352-9.408L364.8 352v-256a12.8 12.8 0 0 0-9.408-12.352L352 83.2zM928 0A96 96 0 0 1 1024 96v256A96 96 0 0 1 928 448h-256A96 96 0 0 1 576 352v-256A96 96 0 0 1 672 0h256z m0 83.2h-256a12.8 12.8 0 0 0-12.352 9.408L659.2 96v256a12.8 12.8 0 0 0 9.408 12.352l3.392 0.448h256a12.8 12.8 0 0 0 12.352-9.408L940.8 352v-256a12.8 12.8 0 0 0-9.408-12.352L928 83.2zM928 576a96 96 0 0 1 96 96v256a96 96 0 0 1-96 96h-256A96 96 0 0 1 576 928v-256A96 96 0 0 1 672 576h256z m0 83.2h-256a12.8 12.8 0 0 0-12.352 9.408l-0.448 3.392v256a12.8 12.8 0 0 0 9.408 12.352l3.392 0.448h256a12.8 12.8 0 0 0 12.352-9.408l0.448-3.392v-256a12.8 12.8 0 0 0-9.408-12.352L928 659.2zM352 576A96 96 0 0 1 448 672v256A96 96 0 0 1 352 1024h-256A96 96 0 0 1 0 928v-256A96 96 0 0 1 96 576h256z m0 83.2h-256a12.8 12.8 0 0 0-12.352 9.408L83.2 672v256a12.8 12.8 0 0 0 9.408 12.352l3.392 0.448h256a12.8 12.8 0 0 0 12.352-9.408L364.8 928v-256a12.8 12.8 0 0 0-9.408-12.352L352 659.2z" fill="#666666" p-id="3534"></path></svg>
            <svg v-else t="1660015994718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3368" width="16" height="16"><path d="M352 0A96 96 0 0 1 448 96v256A96 96 0 0 1 352 448h-256A96 96 0 0 1 0 352v-256A96 96 0 0 1 96 0h256z m0 83.2h-256a12.8 12.8 0 0 0-12.352 9.408L83.2 96v256a12.8 12.8 0 0 0 9.408 12.352L96 364.8h256a12.8 12.8 0 0 0 12.352-9.408L364.8 352v-256a12.8 12.8 0 0 0-9.408-12.352L352 83.2zM352 576A96 96 0 0 1 448 672v256A96 96 0 0 1 352 1024h-256A96 96 0 0 1 0 928v-256A96 96 0 0 1 96 576h256z m0 83.2h-256a12.8 12.8 0 0 0-12.352 9.408L83.2 672v256a12.8 12.8 0 0 0 9.408 12.352l3.392 0.448h256a12.8 12.8 0 0 0 12.352-9.408L364.8 928v-256a12.8 12.8 0 0 0-9.408-12.352L352 659.2zM984.64 196.928H630.144a39.36 39.36 0 1 1 0-78.72h354.496a39.36 39.36 0 1 1 0 78.72zM984.64 393.856H630.144a39.36 39.36 0 1 1 0-78.72h354.496a39.36 39.36 0 1 1 0 78.72zM984.64 708.928H630.144a39.36 39.36 0 1 1 0-78.72h354.496a39.36 39.36 0 1 1 0 78.72zM984.64 905.856H630.144a39.36 39.36 0 1 1 0-78.784h354.496a39.36 39.36 0 1 1 0 78.72z" fill="#666666" p-id="3369"></path></svg>
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
                  <svg t="1660023473149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4891" width="16" height="16"><path d="M342.528 779.712c13.12 0 25.536 2.432 37.248 7.232 11.712 4.864 21.888 11.52 30.528 20.16 8.576 8.64 15.488 18.816 20.672 30.528 5.12 11.712 7.744 24.128 7.744 37.248 0 13.12-2.56 25.472-7.744 37.248-5.12 11.712-12.096 21.888-20.672 30.464a99.456 99.456 0 0 1-30.528 20.736c-11.712 5.12-24.128 7.68-37.248 7.68-13.76 0-26.56-2.56-38.272-7.68a99.456 99.456 0 0 1-30.528-20.736 99.456 99.456 0 0 1-20.672-30.464 91.264 91.264 0 0 1-7.744-37.248c0-13.12 2.56-25.536 7.744-37.248 5.184-11.712 12.096-21.888 20.672-30.528 8.64-8.576 18.816-15.36 30.528-20.16 11.712-4.8 24.512-7.232 38.272-7.232z m430.272 2.048c13.12 0 25.728 2.432 37.76 7.232 12.096 4.864 22.4 11.52 31.04 20.224 8.64 8.576 15.552 18.752 20.672 30.464 5.184 11.712 7.808 24.128 7.808 37.248 0 13.12-2.56 25.536-7.808 37.248-5.12 11.712-12.032 21.888-20.672 30.528a97.856 97.856 0 0 1-31.04 20.672 94.848 94.848 0 0 1-105.472-20.672 99.456 99.456 0 0 1-20.672-30.528 91.264 91.264 0 0 1-7.808-37.248c0-13.12 2.56-25.536 7.808-37.248 5.12-11.712 12.032-21.888 20.672-30.464 8.576-8.64 18.752-15.36 30.528-20.224 11.712-4.8 24.128-7.232 37.184-7.232z m173.824-587.52c19.264 0 34.304 2.56 44.992 7.808a51.2 51.2 0 0 1 22.72 19.136c4.48 7.552 6.528 15.68 6.208 24.32-0.32 8.576-1.536 16-3.584 22.208-2.112 6.208-6.592 18.944-13.44 38.272-6.912 19.328-14.336 40.512-22.272 63.616-7.936 23.04-15.872 46.08-23.808 68.8s-14.272 40.64-19.136 53.76c-8.96 27.584-20.16 46.72-33.6 57.408-13.44 10.688-30.144 16-50.176 16H311.488l14.528 93.12h522.304c33.088 0 49.664 14.08 49.664 42.432a63.616 63.616 0 0 1-9.856 35.648c-6.528 9.984-19.456 15.04-38.784 15.04H307.392a61.12 61.12 0 0 1-34.688-9.344 78.528 78.528 0 0 1-23.232-24.32 147.712 147.712 0 0 1-15.04-32.576 297.728 297.728 0 0 1-8.768-33.088c-0.64-4.16-2.56-14.08-5.696-30.016-3.072-15.808-6.912-35.648-11.392-59.456a496175.168 496175.168 0 0 1-31.552-168.064c-13.056-69.632-27.904-147.2-44.48-232.768H55.04a41.856 41.856 0 0 1-25.856-7.68 67.52 67.52 0 0 1-17.024-18.688 71.68 71.68 0 0 1-9.344-23.232 112.256 112.256 0 0 1-2.56-22.784c0-13.76 4.608-25.152 13.952-34.112C23.424 46.72 36.032 42.24 51.84 42.24H156.416c13.76 0 24.768 2.048 33.024 6.208a56.192 56.192 0 0 1 30.016 35.2c2.048 6.848 3.84 12.736 5.12 17.536 1.408 5.504 2.816 13.248 4.16 23.296l4.16 30.464c2.048 12.416 4.16 25.536 6.208 39.296h707.52z m-77.632-33.088H490.432L627.008 24.64c15.808-15.872 33.28-23.936 52.224-24.32 18.944-0.32 36.352 7.424 52.224 23.296l137.6 137.6z" fill="#ED6D38" p-id="4892"></path></svg>
                </div>
              </div>
            </dd>
          </dl>
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
        is_web:'N',//web端取值“Y” 移动端取值“N”
      },
      className: "BookController",
      classMethod: "bookList",

    });
    if (res.bol) {
      return {
        showBookList: res.data.bookType,
        listData: res.data.bookList.bookList,
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
        Toast({ duration: 1000, message: res.msg });
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/gsd.less";
</style>
