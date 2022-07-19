<template>
  <div>
    <div class="tabs-content">
      <ul class="tabs">
        <li
          :class="current == index ? 'active' : ''"
          v-for="(item, index) in tabs"
          :key="index"
          @click="tabsFn(index)"
        >
          {{ item }}
        </li>
      </ul>
      <div class="content">
        <div class="activity-img" v-if="current == 0">
          <img src="" alt="" />
        </div>
        <div class="activity-img" v-else>
          <img src="" alt="" />
        </div>
      </div>
    </div>
    <div class="academic">
      <div class="academic-title">
        <span></span>
        <h2>学术支持</h2>
        <span></span>
      </div>
      <ul class="academic-content">
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <div class="academic">
      <div class="academic-title">
        <span></span>
        <h2>战略合作单位</h2>
        <span></span>
      </div>
      <ul class="academic-content">
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <div class="academic">
      <div class="academic-title">
        <span></span>
        <h2>联系我们</h2>
        <span></span>
      </div>
      <div class="info">
        <div class="item-info">
          <i class="iconfont icon-a-bianzu25"></i>
          <span>联系方式：400-819-1255</span>
        </div>
        <div class="item-info">
          <i class="iconfont icon-a-bianzu36"></i>
          <span>邮箱地址：fw@chinamas.cn</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyriight ©2022 管理会计研究 （MAS） 京ICP备17056011号-2</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      tabs: ["活动", "课程"],
      current: 0,
    };
  },
  methods: {
    //点击tabs
    tabsFn(index) {
      this.current = index;
    },
  },
};
</script>
<style lang="less" scoped>
.tabs-content {
  padding-top: 30px;

  .tabs {
    display: flex;
    justify-content: center;

    li {
      margin-right: 23px;
      font-size: 16px;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
      vertical-align: bottom;
    }

    .active {
      font-size: 20px;
      font-weight: 500;
      text-align: left;
      color: #333333;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 24px;
        height: 3px;
        background: #ed6d38;
        border-radius: 3px;
        bottom: -10px;
        left: 50%;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
      }
    }
  }

  .content {
    padding-top: 20px;

    .activity-img {
      width: 345px;
      height: 141px;
      background: #ed6d38;
      margin: 0 auto;
    }
  }
}

.academic {
  padding-top: 30px;

  .academic-title {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 21px;
      height: 1px;
      background-color: #e2e3e5;
      margin-top: 4px;
    }

    h2 {
      font-size: 20px;
      font-weight: 500;
      color: #424242;
      line-height: 20px;
      padding: 0px 16px;
    }
  }

  .academic-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 15px;

    li {
      width: 110px;
      height: 64px;
      background: #df7b50;
      border-radius: 4px;
      margin-top: 16px;
    }
  }

  .info {
    .item-info {
      text-align: center;
      padding-top: 16px;

      .iconfont {
        font-size: 12px;
      }

      span {
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #666666;
        line-height: 12px;
      }
    }
  }
}
.footer {
  padding: 100px 0px 24px 0px;

  p {
    font-size: 10px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #b3b2b5;
    // line-height: 10px;
    transform: scale(0.83);
  }
}
</style>
