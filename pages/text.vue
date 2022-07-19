<template>
  <div>
    <div class="ProgressBoxTool" v-if="progressList && progressList.length">
      <div class="processBox">
        <div
          :class="currentClickNumber > 0 ? 'arrow' : 'arrow arrowOpacity'"
          @click="fnPrev()"
        >
          <i class="iconfont icon-juxing"></i>
        </div>
        <div class="fixedBox" :ref="`fixedBox`">
          <div
            class="centerScroll"
            :style="`width:${
              signleWidth * progressList.length
            }px;transform:translate(${scrollResultWidth}px,0);transition:1s;`"
          >
            <div
              class="signleTab"
              v-for="(itemP, indexP) in progressList"
              :key="indexP + 'progress'"
            >
              <div class="leftIcon">

                {{itemP.type}}
              </div>
              <!-- 最后一个不展示箭头 -->
              <!-- <img
                v-if="progressList.length > indexP + 1"
                src="../static/images/arrows-left.png"
                alt=""
                class="arrowSquare"
              /> -->
            </div>
          </div>
        </div>

        <div
          :class="noScrollRight ? 'arrow' : 'arrow arrowOpacity'"
          @click="fnNext(activeName)"
        >
          <i class="iconfont icon-juxing"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      progressList: [
        { type: "1" },
        { type: "2" },
        { type: "1" },
        { type: "2" },
        { type: "1" },
        { type: "2" },
        { type: "1" },
        { type: "2" },
        { type: "1" },
        { type: "2" },
      ],

      currentProgressId: "",
      scrollResultWidth: 0, //transform滚动的距离
      signleWidth: 215, //单个流程的宽度
      activeName: 0,
      currentClickNumber: 0,
      noScrollRight: true,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initgoRightArrow();
      });
    });
  },
  methods: {
    //初始化判断是否可以向右滚动
    initgoRightArrow() {
      const currentScrollWidth = this.$refs[`fixedBox`].clientWidth;
      console.log(currentScrollWidth,'currentScrollWidth')
      const canNumber = Math.floor(currentScrollWidth / this.signleWidth); //可以放下的个数
      //如果最后一个流程图标已经展示出来，则停止滚动
      if (this.currentClickNumber + canNumber >= this.progressList.length) {
        this.noScrollRight = false;
        return;
      }
    },
    //点击上一个
    fnPrev() {
      //如果右点击的次数大于0，才可以左滚
      if (this.currentClickNumber > 0) {
        this.currentClickNumber -= 1;
        this.noScrollRight = true;
        this.fnScrollWidth("reduce");
      } else {
        return false;
      }
    },
    //点击下一个
    fnNext() {
      const currentScrollWidth = this.$refs[`fixedBox`].clientWidth;
      const canNumber = Math.floor(currentScrollWidth / this.signleWidth); //可以放下的个数
      //如果最后一个流程图标已经展示出来，则停止滚动
      if (this.currentClickNumber + canNumber >= this.progressList.length) {
        return;
      }
      //说明放不下有滚动条
      if (this.progressList.length > canNumber) {
        this.currentClickNumber += 1;
        if (this.currentClickNumber + canNumber >= this.progressList.length) {
          this.noScrollRight = false;
        }
        this.fnScrollWidth("add");
      }
    },
    //translate的宽度
    fnScrollWidth(type) {
      let result = 0;
      if (type === "reduce") {
        result = 215;
      } else if (type === "add") {
        result = -215;
      } else {
        result = 0;
      }
      this.scrollResultWidth += result;
    },
  },
};
</script>
<style lang="less" scoped>
//中间的时间发展部分
.processBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .arrow {
    width: 60px;
    cursor: pointer;
  }
  .arrowOpacity {
    cursor: default;
    opacity: 0.4;
  }
  .fixedBox {
    // flex: 1;
    overflow: hidden;
  }
  .centerScroll {
    // flex: 1;
    width: 300px;
    box-sizing: border-box;
    padding: 20px 0;
    // white-space: nowrap;
    // width: calc(100% - 120px);
    overflow-x: scroll;
    display: -webkit-box;
    .signleTab {
      width: 215px;
      position: relative;
      display: inline-block;
      flex-shrink: 0;
      .leftIcon {
        width: 150px;
        text-align: center;
        cursor: pointer;
        & > .pregressIcon {
          width: 60px;
          height: 60px;
        }
      }
      & > .arrowSquare {
        position: absolute;
        top: 25px;
        right: 0;
      }
    }
  }
}
</style>
