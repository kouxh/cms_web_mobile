<template>
  <div class="sub-header">
    <div class="tabs-box">
      <swiper
        :options="swiperOption"
        id="scroller"
        ref="mySwiper"
        class="swiper-wrapper tabs"
        v-swipeleft="(e) => touch('左滑', e)"
        v-swiperight="(e) => Rtouch('右滑', e)"
      >
        <swiper-slide class="li" v-for="(item, index) in tabs" :key="index"
          ><span
            :class="activeIndex == index ? 'active' : ''"
            @click="tabsFn(index, $event)"
            >{{ item }}</span
          ></swiper-slide
        >
      </swiper>
      <div class="tabs-next" @click="nextFn()" v-show="nextIcon">
        <svg t="1660017357800" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4555" width="16" height="16"><path d="M776.768 512l-314.304 302.72a46.336 46.336 0 0 0 0 67.328c19.264 18.56 50.56 18.56 69.824 0l349.248-336.384a46.336 46.336 0 0 0 0-67.328L532.288 141.952a50.752 50.752 0 0 0-69.824 0 46.336 46.336 0 0 0 0 67.264L776.768 512z" fill="#666666" p-id="4556"></path></svg>
      </div>
      <div class="tabs-pre" @click="preFn()" v-show="currentClickNumber > 0">
       <svg t="1660017357800" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4555" width="16" height="16"><path d="M776.768 512l-314.304 302.72a46.336 46.336 0 0 0 0 67.328c19.264 18.56 50.56 18.56 69.824 0l349.248-336.384a46.336 46.336 0 0 0 0-67.328L532.288 141.952a50.752 50.752 0 0 0-69.824 0 46.336 46.336 0 0 0 0 67.264L776.768 512z" fill="#666666" p-id="4556"></path></svg>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      tabs: [
        "听课程",
        "找方法",
        "学案例",
        "见大咖",
        "读杂志",
        "逛书店",
        "淘资讯",
        "看专题",
      ],
      activeIndex: 1,
      nextIcon: true,
      currentClickNumber: 0,
      scrollResultWidth: 0, //transform滚动的距离
      swiperOption: {
        loop: false, // 无限循环
        speed: 1000,
        slidesPerView: 5, // 设置slider容器能够同时显示的slides数量(轮播模式)
        // spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 4, // 在轮播模式下定义slides的数量多少为一组。
        loopFillGroupWithBlank: true, //在loop模式下，为group填充空白slide
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".tabs-next", //下一张标签类名可以自定义
          //上一张
          prevEl: ".tabs-pre", //上一张标签类名可以自定义
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {


    // this.$refs.mySwiper.addEventListener("scroll", (event) => {
    //   let totalWidths = document.body.clientWidth; // 屏幕总宽度
    //   let scrollWidht = document.getElementById("scroller").scrollLeft;
    //   console.log(scrollWidht);
    //   let allWidth = this.tabs.length * 70;
    //   console.log(allWidth);
    //   if (scrollWidht > totalWidths / 2) {
    //     this.nextIcon = false;
    //     // this.preIcon = true;
    //   } else {
    //     console.log("00");
    //     this.nextIcon = true;
    //     // this.preIcon = false;
    //   }
    //   if (scrollWidht > totalWidths / 2) {
    //     // this.preIcon = true;
    //   } else {
    //     // this.preIcon = false;
    //   }
    // });

    this.$nextTick(() => {
      setTimeout(() => {
        this.initgoRightArrow();
      });
    });
  },
  methods: {
    touch(e) {
      console.log(e, "--");
      let rihgt = document
        .getElementById("scroller")
        .getBoundingClientRect().right;
      console.log(rihgt);
      if (rihgt > 0) {
        this.nextIcon = false;
        this.currentClickNumber = 1;
      }
    },
    Rtouch(e) {
      let left = document
        .getElementById("scroller")
        .getBoundingClientRect().left;
      console.log(left);
      if (left > 0) {
        setTimeout(() => {
          this.nextIcon = true;
          this.currentClickNumber = 0;
        }, 100);
      }
    },
    //初始化判断是否可以向右滚动
    initgoRightArrow() {
      const currentScrollWidth = document.querySelector(".tabs").clientWidth;
      console.log(currentScrollWidth);
      const canNumber = Math.floor(currentScrollWidth / 70); //可以放下的个数
      //如果最后一个流程图标已经展示出来，则停止滚动
      if (this.currentClickNumber + canNumber >= this.tabs.length - 1) {
        this.nextIcon = false;
        return;
      }
    },
    //点击tabs
    tabsFn(index, event) {
      this.activeIndex = index;
      console.log(index);
      document.body.scrollTop = 0;
      if (index == this.tabs.length - 2) {
        this.nextIcon = false;
      }
      // 滑动控件
      let spanLeft = event.clientX; // 当前点击的元素左边距离
      console.log(spanLeft, "spanLeft");
      // let divBox = document.getElementById(`tab-${index}`).clientWidth / 2; // 点击的元素一半宽度
      let totalWidths = document.body.clientWidth; // 屏幕总宽度
      // let widths = totalWidths / 2; // 一半的屏幕宽度
      let spanRight = totalWidths - spanLeft; // 元素的右边距离
      let scrollBox = document.querySelector(".tabs"); // 获取最外层的元素
      // let scrollL = scrollBox.scrollLeft; // 滚动条滚动的距离
      if (spanLeft < 100) {
        // scrollBox.scrollLeft = scrollL + (spanLeft - widths) + divBox;
        this.scrollResultWidth += 70;
        this.nextIcon = true;
        this.currentClickNumber = 0;
      }

      if (spanRight < 100 && index !== this.tabs.length - 1) {
        this.scrollResultWidth += -70;
        this.currentClickNumber += 1;
      }

      if (index == 0) {
        this.$router.push({
          name: "index",
        });
      } else if (index == 1) {
        this.$router.push({
          name: "zff",
          // query: { id: index },
        });
      } else if (index == 2) {
        // this.$router.push("/home/way");
        this.$router.push({
          name: "xal",
          // query: { id: index },
        });
      } else if (index == 3) {
        this.$router.push({
          name: "jdk",
          // query: { id: index },
        });
      } else if (index == 4) {
        this.$router.push({
          name: "zz",
          // query: { id: index },
        });
      } else if (index == 5) {
        this.$router.push({
          name: "gsd",
          // query: { id: index },
        });
      } else if (index == 6) {
        this.$router.push({
          name: "tzx",
          // query: { id: index },
        });
      }
    },
    //点击向前
    preFn() {
      console.log(this.activeIndex, "向前");
      //如果右点击的次数大于0，才可以左滚
      if (this.currentClickNumber > 0) {
        this.currentClickNumber -= 1;
        this.nextIcon = true;
        this.scrollResultWidth += 70;
      } else {
        return false;
      }
    },
    //点击下一个
    nextFn() {
      this.currentClickNumber += 1;
      console.log(this.currentClickNumber);
      if (this.currentClickNumber >= 1) {
        this.nextIcon = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.sub-header {
  width: 100%;
  background-color: #fff;
  .tabs-box {
    padding: 0px 15px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: hidden;
    .tabs-pre {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 32px;
      background-color: #fff;
      z-index: 1;
      .icon-icon-xiangyouhuadong {
        position: absolute;
        top: 50%;
        left: 15px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%) rotate(180deg);
      }
    }
    .tabs-next {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 32px;
      background-color: #fff;
      z-index: 1;

      .icon-icon-xiangyouhuadong {
        position: absolute;
        top: 50%;
        right: 15px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    .tabs {
      // overflow-x: scroll;
      // display: -webkit-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      /* -webkit-box-pack: start; */
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      max-width: 100%;
      white-space: nowrap;
      .li {
        // margin-right: 22px;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #666666;
        line-height: 40px;
        flex-shrink: 0; //tab宽度大于外部容器宽度时不会收缩。
        &:last-child {
          margin-right: 0px;
        }
      }

      .active {
        color: #212223;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          width: 20px;
          height: 2px;
          background: #ff8556;
          border-radius: 1px;
          bottom: -8px;
          left: 50%;
          -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
        }
      }
    }
  }
}
</style>
