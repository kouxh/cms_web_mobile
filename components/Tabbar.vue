<template>
  <div class="sub-header">
    <div class="tabs-box">
      <div class="tabs-pre" @click="preFn()" v-if="currentClickNumber > 0">
        <i class="iconfont icon-icon-xiangyouhuadong"></i>
      </div>
      <!-- <ul
          class="tabs" ref='tabs'
          :style="{
            width: tabs.length * 70 + 'px',
            'margin-left': activeIndex * 70 + 'px',
          }"
        > -->
      <!-- <ul class="tabs"  :style="{transform:`translateX(${activeIndex*70}px)`}"> -->

      <ul
        class="tabs"
        :class="isOverflow ? 'overflow' : ''"
        ref="tabsRef"
        id="scroller"
        :style="`transform:translateX(${scrollResultWidth}px);transition:1s;`"
      >
        <li
          :class="activeIndex == index ? 'active' : ''"
          v-for="(item, index) in tabs"
          :key="index"
          @click="tabsFn(index, $event)"
          :id="`tab-${index}`"
        >
          {{ item }}
        </li>
      </ul>

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
      activeIndex: 1,
      nextIcon: true,
      currentClickNumber: 0,
      scrollResultWidth: 0, //transform滚动的距离
      isOverflow: true,
    };
  },
  // 监听
  // watch: {
  //   fInit: {
  //     handler(newVal, oldVal) {
  //       if (newVal) {
  //         this.startTime = '开始日期'; // 开始时间
  //         this.endTime = '结束日期'; // 结束时间
  //       }
  //     },
  //     deep: true
  //   }
  // },
  mounted() {
  var flag; // 鼠标按下
    var downX; // 鼠标点击的x下标
    var scrollLeft; // 当前元素滚动条的偏移量
    scroller.addEventListener("mousedown", function (event) {
        console.log(event, 'event')
        this.isOverflow=true
        // flag = true;
        // downX = event.clientX; // 获取到点击的x下标
        // scrollLeft = this.scrollLeft; // 获取当前元素滚动条的偏移量
    });
      scroller.addEventListener("mousemove", function (event) {
         this.isOverflow=true
        console.log(event, 'event')
        if (flag) { // 判断是否是鼠标按下滚动元素区域
            console.log(flag, 'flag')
            // 获取移动的x轴
            var moveX = event.clientX;
            // 当前移动的x轴下标减去刚点击下去的x轴下标得到鼠标滑动距离
            var scrollX = moveX - downX;
            // 鼠标按下的滚动条偏移量减去当前鼠标的滑动距离
            this.scrollLeft = scrollLeft - scrollX;
            console.log(scrollX)
        }
    });
    // 鼠标抬起停止拖动
    scroller.addEventListener("mouseup", function () {
        flag = false;
    });
    // 鼠标离开元素停止拖动
    scroller.addEventListener("mouseleave", function (event) {
        console.log(event, 'event')
        flag = false;
    });
    this.$refs.tabsRef.addEventListener("scroll", this.handlePlay);
    // this.$refs.tabsRef.addEventListener("scroll", (event) => {
    //   this.isOverflow=true;
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
    // console.log(totalWidths);
    //  const divBox = document.querySelector(".active").clientWidth
    // const divBox = document
    //   .querySelector(".active")
    //   .getBoundingClientRect().left;
    // console.log(divBox);
    // const width = document
    //   .getElementById("scroller")
    //   .getBoundingClientRect().width;
    // console.log(width);
    this.$nextTick(() => {
      setTimeout(() => {
        this.initgoRightArrow();
      });
    });
  },
  methods: {
    handlePlay() {
      this.isOverflow = true;
      console.log(this.isOverflow);
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
      this.isOverflow = false;
      this.activeIndex = index;
      document.body.scrollTop = 0;
      if (index == this.tabs.length - 2) {
        this.nextIcon = false;
      }
      // 滑动控件
      let spanLeft = event.clientX; // 当前点击的元素左边距离
      let divBox = document.getElementById(`tab-${index}`).clientWidth / 2; // 点击的元素一半宽度
      let totalWidths = document.body.clientWidth; // 屏幕总宽度
      let widths = totalWidths / 2; // 一半的屏幕宽度
      let spanRight = totalWidths - spanLeft; // 元素的右边距离
      let scrollBox = document.querySelector(".tabs"); // 获取最外层的元素
      let scrollL = scrollBox.scrollLeft; // 滚动条滚动的距离
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
      //  if (this.activeIndex > -(this.tabs.length + this.activeIndex)) {
      //   this.activeIndex -= 1;
      // }else{
      //   this.activeIndex += 1;
      // }
    },
    //点击向前
    preFn() {
      this.isOverflow = false;
      console.log(this.activeIndex, "向前");
      // if (this.activeIndex < 0) {
      //   this.activeIndex += 1;
      //   this.$refs.tabs["style"].marginLeft = this.activeIndex * 70 + "px";
      // }
      // if (this.activeIndex > 0) {
      //   this.activeIndex--;
      //   this.$refs.tabs["style"].marginLeft = -this.activeIndex * 70 + "px";
      // }
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
      this.isOverflow = false;
      console.log(this.activeIndex, "向后");
      let currentScrollWidth = document.querySelector(".tabs").clientWidth;
      let canNumber = Math.floor(currentScrollWidth / 70); //可以放下的个数
      //如果最后一个流程图标已经展示出来，则停止滚动
      if (this.currentClickNumber + canNumber >= this.tabs.length) {
        return;
      }
      //说明放不下有滚动条
      if (this.tabs.length > canNumber) {
        this.currentClickNumber += 1;
        if (this.currentClickNumber + canNumber >= this.tabs.length - 1) {
          this.nextIcon = false;
        }
        this.scrollResultWidth += -70;
        // this.fnScrollWidth("add");
      }
      // if (this.activeIndex > -(this.tabs.length + this.activeIndex)) {
      //   this.activeIndex -= 1;
      //   console.log(this.activeIndex);
      //   setTimeout(() => {
      //     this.$refs.tabs["style"].marginLeft = this.activeIndex * 70 + "px";
      //   }, 100);
      // }
      // if (this.activeIndex < this.tabs.length - 5) {
      //   this.activeIndex++;
      //   this.$refs.tabs["style"].marginLeft = -this.activeIndex * 70 + "px";
      // }

      //       function() {
      //   a.els.menuListEl.style.transitionProperty = "";
      //   a.els.menuListEl.style.transitionDuration = "";
      //   a.els.menuListEl.style.transitionTimingFunction = "";
      //   a.els.menuListEl.classList.add("interaction");
      //   a.els.menuPrevBtnEl.style.display = "block";
      //   if (a.isRtl()) {
      //     var c = a.getRelativeCoordinate(a.els.lastMenuEl, "right") - a.currentMenuPositionX;
      //     var b = "desktop" === a.currentDevice ? a.desktopViewMovingDistance : a.mobileViewMovingDistance;
      //     c - b > a.els.menuListEl.getBoundingClientRect().width ?
      //       a.currentMenuPositionX += b : (a.currentMenuPositionX += c - a.els.menuListEl.getBoundingClientRect().width, a.els.menuNextBtnEl.style.display = "none")
      //   } else c = a.getRelativeCoordinate(a.els.lastMenuEl, "right") + a.currentMenuPositionX, b = "desktop" === a.currentDevice ? a.desktopViewMovingDistance : a.mobileViewMovingDistance, c - b > a.els.menuListEl.getBoundingClientRect().width ? a.currentMenuPositionX -= b : (a.currentMenuPositionX -= c - a.els.menuListEl.getBoundingClientRect().width, a.els.menuNextBtnEl.style.display = "none");
      //   a.els.menuListEl.style.transform =
      //     "translateX(" + a.currentMenuPositionX + "px)";
      //   a.setAccessibility()
      // }
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
    .overflow {
      // overflow-x: scroll;
    }
    .tabs {
      // overflow-x: scroll;
      // display: -webkit-box;
      display: flex;
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
