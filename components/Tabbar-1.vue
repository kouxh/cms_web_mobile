<template>
  <div class="sub-header">
    <div class="tabs-box">
      <div class="tabs-pre" @click="preFn()" v-if="currentClickNumber > 0">
        <i class="iconfont icon-icon-xiangyouhuadong"></i>
      </div>
      <!-- <ul class="tabs" ref="tabsRef" id="scroller"> -->
      <van-tabs
        v-model="activeIndex"
        @change="tabsFn"
        color="#ff8556"
        line-width="20"
        class="tabsList"
        ref="tabsRef"
      >
        <van-tab
          v-for="(item, index) in tabs"
          :key="index"
          :title="item"
        ></van-tab>
      </van-tabs>
      <!-- </ul> -->
      <div class="tabs-next" @click="nextFn()" v-if="nextIcon">
        <i class="iconfont icon-icon-xiangyouhuadong"></i>
      </div>
    </div>
  </div>
</template>
<script>
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
      activeIndex: this.$store.state.tabIndex ? this.$store.state.tabIndex : 1,
      nextIcon: true,
      currentClickNumber: 0,
    };
  },
  created() {},
  computed: {},
  mounted() {
    // this.$refs.tabsRef.addEventListener("scroll", (event) => {
    //   let totalWidths = document.body.clientWidth; // 屏幕总宽度
    //   let scrollWidht = document.getElementById("scroller").scrollLeft;
    //   if (scrollWidht > totalWidths / 2) {
    //     this.nextIcon = false;
    //     this.currentClickNumber = 1;
    //   } else {
    //     this.nextIcon = true;
    //   }
    //   if (scrollWidht == 0) {
    //     this.currentClickNumber = 0;
    //   }
    // });

    this.$nextTick(() => {
      setTimeout(() => {
        this.initgoRightArrow();
      });
    });
  },
  methods: {
    //初始化判断是否可以向右滚动
    initgoRightArrow() {
      const currentScrollWidth = document.querySelector(".tabs").clientWidth;
      const canNumber = Math.floor(currentScrollWidth / 70); //可以放下的个数
      //如果最后一个流程图标已经展示出来，则停止滚动
      if (this.currentClickNumber + canNumber >= this.tabs.length - 1) {
        this.nextIcon = false;
        return;
      }
    },
    //点击tabs
    tabsFn(index) {
      this.activeIndex = index;
      this.$store.commit("setTabIndex", index);
      document.body.scrollTop = 0;
      if (index > 4) {
        this.nextIcon = false;
        this.currentClickNumber = 1;
      }

      // let divBoxWidth = document.querySelector(".van-tab--active").clientWidth;
      // let spanLeft =
      //   document.querySelector(".van-tab--active").getBoundingClientRect()
      //     .left - divBoxWidth;
      // 滑动控件
      // let spanLeft = event.clientX; // 当前点击的元素左边距离
      // let totalWidths = document.body.clientWidth; // 屏幕总宽度
      // let spanRight = totalWidths - spanLeft; // 元素的右边距离
      // let scrollBox = document.querySelector(".tabs"); // 获取最外层的元素
      // let scrollL = scrollBox.scrollLeft; // 滚动条滚动的距离
      // if (spanLeft < 100) {
      //   // scrollBox.scrollLeft = scrollL + (spanLeft - totalWidths) + divBoxWidth;
      //   // scrollBox.scrollLeft += divBoxWidth;
      //   scrollBox.scrollLeft += divBoxWidth / 2;
      //   // this.nextIcon = true;
      //   // this.currentClickNumber = 1;
      // }

      // if (spanRight > 0 || scrollL > 150) {
      //   scrollBox.scrollLeft += -divBoxWidth;
      //   this.currentClickNumber += 1;
      // }

      if (index == 0) {
        this.$router.push({
          name: "index",
        });
      } else if (index == 1) {
        this.$router.push({
          name: "zff",
        });
      } else if (index == 2) {
        this.$router.push({
          name: "xal",
        });
      } else if (index == 3) {
        this.$router.push({
          name: "jdk",
        });
      } else if (index == 4) {
        this.$router.push({
          name: "zz",
        });
      } else if (index == 5) {
        this.$router.push({
          name: "gsd",
        });
      } else if (index == 6) {
        this.$router.push({
          name: "tzx",
        });
      }else if (index == 7) {
        this.$router.push({
          name: "kzt",
        });
      }
    },
    //点击向前
    preFn() {
      //如果右点击的次数大于0，才可以左滚
      // let scrollBox = document.querySelector(".tabsList");
      // scrollBox.scrollLeft = 0;
      // console.log(scrollBox.scrollLeft,'--')
      if (this.currentClickNumber > 0) {

        this.currentClickNumber -= 1;
        this.nextIcon = true;
        let scrollBox = document.querySelector(".tabsList");
         console.log(scrollBox,scrollBox.scrollLeft,'--')
        scrollBox.scrollLeft = 0;

      } else {
         console.log('---=')
        return false;
      }
    },
    //点击下一个
    nextFn() {


        let scrollBox = document.querySelector(".tabsList");
         console.log(scrollBox,scrollBox.scrollLeft,'-44-')
         scrollBox.scrollLeft = 1000;

      // let currentScrollWidth = document.querySelector(".tabs").clientWidth;
      // let canNumber = Math.floor(currentScrollWidth / 70); //可以放下的个数
      // //如果最后一个流程图标已经展示出来，则停止滚动
      // if (this.currentClickNumber + canNumber >= this.tabs.length) {
      //   return;
      // }
      // //说明放不下有滚动条
      // if (this.tabs.length > canNumber) {
      //   this.currentClickNumber += 1;
      //   if (this.currentClickNumber + canNumber >= this.tabs.length - 1) {
      //     this.nextIcon = false;
      //   }
      //   let totalWidths = document.body.clientWidth; // 屏幕总宽度
      //   let scrollBox = document.querySelector(".tabs");
      //   scrollBox.scrollLeft = totalWidths + 70;
      // }
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.van-tabs {
  margin-left: -10px;
}
/deep/.van-tab {
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  line-height: 16px;
  &:nth-child(1){
    display: none;
  }
}
/deep/.van-tab--active {
  font-weight: 600;
  color: #212223;
}
/deep/.van-tabs__nav--line.van-tabs__nav--complete {
  padding-right: 0px;
  padding-left: 0px;
}

.sub-header {
  width: 100%;
  background-color: #fff;
  .tabs-box {
    padding: 0px 15px;
    // height: 40px;
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
      overflow-x: scroll;
      display: -webkit-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      align-items: center;
      position: relative;
      max-width: 100%;
      white-space: nowrap;
      flex-shrink: 0;
      li {
        margin-right: 22px;
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
          bottom: 0px;
          left: 50%;
          -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
        }
      }
    }
  }
}
</style>
