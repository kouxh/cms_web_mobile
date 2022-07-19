<template>
  <div style="width: 100%">
          <div class="monitor-list">
            <!-- 左边按钮 -->
            <div class="btn" @click="scrollLeft">
              <i class="el-icon el-icon-caret-left" />
            </div>
            <!-- 中间列表 -->
            <div id="list-box" class="list-box">
              <div id="list" class="list">
                <div v-for="item in monitorList" :key="item.id" class="list-item">
                  <img v-if="item.status" width="60" height="60" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F73%2F89%2F59602dda3b533_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653384554&t=ef6add09ac8538ea7542f061d0ea42be" alt="">
                  <img v-else width="60" height="60" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F73%2F89%2F59602dda3b533_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653384554&t=ef6add09ac8538ea7542f061d0ea42be" alt="">
                  {{ item.name }}
                </div>
              </div>
            </div>
            <!-- 右边按钮 -->
            <div class="btn" @click="scrollRight">
              <i class="el-icon el-icon-caret-right" />
            </div>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        a: '',
        b: 'MB'
      },
      monitorList: [],
      imgList: {
        // alive: require('@/assets/images/icon/device-alive.png'),
        // down: require('@/assets/images/icon/device-down.png')
      }
    }
  },
  created() {
    this.initMonitorList()
  },
  methods: {
    initMonitorList() {
      for (let i = 1; i < 21; i++) {
        this.monitorList.push({
          id: i,
          name: `item${i + 1}`,
          status: 0
        })
      }
    },
    // 左滑动逻辑
    scrollLeft() {
      // debugger
      const allLength = this.monitorList.length * 120
      const boxLength = document.getElementById('list-box').clientWidth
      if (allLength < boxLength) return
      const listEl = document.getElementById('list')
      const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
      if (leftMove + boxLength - 360 < boxLength) {
        // 到最开始的时候
        listEl.style.left = '0px'
      } else {
        listEl.style.left = '-' + (leftMove - 360) + 'px'
      }
    },
    // 右滑动逻辑
    scrollRight() {
      const allLength = this.monitorList.length * 120
      const boxLength = document.getElementById('list-box').clientWidth
      if (allLength < boxLength) return
      const listEl = document.getElementById('list')
      const leftMove = Math.abs(parseInt(window.getComputedStyle(listEl, null)?.left))
      if (leftMove + boxLength + 360 > allLength) {
        listEl.style.left = '-' + (allLength - boxLength) + 'px'
      } else {
        listEl.style.left = '-' + (leftMove + 360) + 'px'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.monitor-list {
  display: flex;
  justify-content: space-between;
  height: 95px;

  .btn {
    border: 1px solid #b3d8ff;
    width: 50px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    cursor: pointer;
    background-color: #ecf5ff;
    // icon
    font-size: 24px;
    color: #409eff;

    &:hover {
      background-color: #409eff;
      color: white;
    }
  }
  .list-box {
    width: calc(100vw - 100px);
    overflow: hidden;

    .list {
      width: calc(100vw - 100px);
      display: flex;
      transform: all 2s;
      .list-item {
        width: 100px;
        height: 95px;
        text-align: center;
        padding: 10px;
        cursor: pointer;
        margin-left: 40px;
      }
      position: relative;
      left: 0;
      transition: left 1s;
    }
  }
}
.tabless {
  .textBefore {
    font-size: 12px;
    color: #3d3d3eba;
    &:before {
      content: "*";
      color: red;
      position: absolute;
      left: 11px;
      top: 9px;
    }
  }
  .textUnit {
    font-size: 12px;
    color: #3d3d3eba;
    margin-left: 5px;
  }
  //margin: 200px;
  width: 65%;
  border-collapse: collapse;
  tr {
    height: 50px;
    border-bottom: 1px #F1F1F1 solid;
    text-align: left;
    font-size: 12px;
    color: #3d3d3eba;
    &:nth-child(n+2) {
      height: 60px;
      vertical-align: baseline;
    }
  }
  tr:nth-child(1) {
    font-size: 12px;
    font-weight: bolder;
    color: #3D3D3E;
  }
  th {
    position: relative;
    padding-left: 10px;
    padding-top: 5px;
  }
  th:nth-child(1) {
    padding-left: 20px;
  }
}
</style>
