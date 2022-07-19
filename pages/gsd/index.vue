<template>
  <div class="page-go-book">
    <div class="page-header">
      <!-- <Tabbar :activeIndex="activeIndex"/> -->
      <div class="book-type">
        <ul class="book-type-main">
          <li
            :class="activeType == index ? 'bookActive' : ''"
            v-for="(item, index) in bookList"
            :key="index"
            @click="bookTypeFn(index)"
          >
            {{ item }}
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
        <div class="magazine-list" :class="listType ? '' : 'two'">
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
          <dl @click="details(1)">
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
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
const bookList = ["管理类", "技术类", "哲学类", "经济类"];
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
      bookList, //书类型
      activeType: 0, //书默认选中的类型
      showBookList: [],
      isShow: true, //是否展示更多按钮
      listType: true, //true展示两个 false展示一个
      // activeIndex:this.$route.query.id,//当前下标
    };
  },
  created() {
     console.log(this.$store.state.tabIndex,'4444')
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
    return {
      showBookList: bookList.slice(0, 4),
    };
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
    //点击专业每一项
    oNitem(index) {
      this.current = index;
    },
    //点击行业每一项
    industryItem(index) {
      this.industryCurrent = index;
    },
    //点击专业全部
    allFn() {
      this.majorHeight = "auto";
    },
    //点击行业全部
    industryAllFn() {
      this.industryHeight = "auto";
    },
    //点击更多
    moreFn() {
      this.showBookList = this.bookList;
      this.isShow = false;
    },
    //点击图书类型
    bookTypeFn(index) {
      this.activeType = index;
    },
    //切换商品布局
    changeType() {
      this.listType = !this.listType;
    },
    //点击到详情
    details(id) {
      console.log(id,'==')
      this.$router.push({
        path: `/gsd/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/gsd.less";
</style>
