<template>
  <div>
    <!-- <div class="tabs-content">
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
    </div> -->
    <div class="academic"  v-for="(item,index) in meanList" :key="index">
      <div class="academic-title">
        <span></span>
        <h2>{{item.mas_menu_name}}</h2>
        <span></span>
      </div>
      <ul class="academic-content">
        <li  v-for="(it,idx) in item.list" :key="idx">
          <img :src="it.mas_menu_logo" alt="" />
        </li>
        <!-- <li>
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
        </li> -->
      </ul>
    </div>
    <!-- <div class="academic">
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
    </div> -->
    <div class="academic">
      <div class="academic-title">
        <span></span>
        <h2>联系我们</h2>
        <span></span>
      </div>
      <div class="info">
        <div class="item-info">
          <svg t="1660023973667" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5227" width="12" height="12"><path d="M724.736 615.850667a58.88 58.88 0 0 0-83.114667 0l-41.642666 41.557333c-23.552 23.552-99.669333 0.170667-166.4-66.56-66.56-66.56-90.026667-142.762667-66.56-166.4h0.085333l41.557333-41.472a58.88 58.88 0 0 0 0-83.2L225.621333 116.736a58.88 58.88 0 0 0-83.114666 0l-41.642667 41.642667c-30.72 30.72-49.493333 71.082667-55.637333 120.149333-5.717333 45.397333-0.426667 96.426667 15.786666 151.466667 32.426667 110.506667 105.813333 226.816 206.250667 327.253333 100.522667 100.522667 216.746667 173.824 327.253333 206.250667 40.704 11.946667 79.189333 18.005333 114.858667 18.005333 12.288 0 24.490667-0.682667 36.693333-2.218667 48.981333-6.229333 89.344-24.917333 120.149334-55.637333l41.557333-41.642667a58.88 58.88 0 0 0 0-83.114666L724.736 615.850667z m149.76 232.96l-41.557333 41.557333c-46.933333 46.933333-126.890667 56.917333-225.109334 27.989333-103.168-30.293333-212.224-99.328-307.285333-194.389333-95.061333-94.976-164.096-204.117333-194.389333-307.2-28.928-98.218667-18.944-178.176 27.989333-225.194667l41.642667-41.557333a11.776 11.776 0 0 1 16.64 0l182.954666 183.04a11.776 11.776 0 0 1 0 16.64l-41.557333 41.557333c-24.405333 24.405333-29.354667 63.488-13.738667 110.08 13.653333 41.130667 42.154667 84.736 80.213334 122.88 38.144 37.973333 81.749333 66.56 122.88 80.213334 17.92 5.973333 34.645333 8.96 49.834666 8.96 24.576 0 45.226667-7.68 60.245334-22.698667l41.557333-41.557333a11.776 11.776 0 0 1 16.64 0l183.04 182.954666a11.776 11.776 0 0 1 0 16.64zM581.717333 207.445333a23.552 23.552 0 0 1 23.466667-23.466666A235.264 235.264 0 0 1 840.533333 419.328a23.552 23.552 0 0 1-47.104 0c0-103.765333-84.48-188.245333-188.245333-188.245333a23.552 23.552 0 0 1-23.466667-23.552z m0 141.226667a23.552 23.552 0 0 1 23.466667-23.552c52.053333 0 94.122667 42.154667 94.122667 94.122667a23.552 23.552 0 0 1-47.018667 0 47.104 47.104 0 0 0-47.104-47.104 23.552 23.552 0 0 1-23.466667-23.466667z m399.957334 70.570667a23.552 23.552 0 0 1-47.104 0 329.813333 329.813333 0 0 0-329.386667-329.386667 23.552 23.552 0 1 1 0-47.104 376.149333 376.149333 0 0 1 376.490667 376.490667z" fill="#666666" p-id="5228"></path></svg>
          <span>联系方式：400-819-1255</span>
        </div>
        <div class="item-info">
          <svg t="1660024084405" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5395" width="12" height="12"><path d="M904.106667 88.746667a139.008 139.008 0 0 0-29.866667-3.328H145.152c-10.24 0-20.224 1.194667-29.866667 3.328-65.194667 11.434667-114.773333 68.266667-114.773333 136.704v541.525333c0 76.629333 62.208 138.837333 138.837333 138.837333h740.522667c76.629333 0 138.837333-62.208 138.837333-138.837333V225.450667c0-68.437333-49.493333-125.269333-114.688-136.704z m-35.84 78.848L564.906667 450.304a80.725333 80.725333 0 0 1-110.421334 0L151.125333 167.594667h717.141334z m69.546666 599.381333a57.941333 57.941333 0 0 1-57.856 57.856H139.434667a57.941333 57.941333 0 0 1-57.770667-57.856V225.450667a58.026667 58.026667 0 0 1 1.024-10.922667L399.36 509.44a161.536 161.536 0 0 0 220.842667 0l316.586666-294.997333a57.941333 57.941333 0 0 1 1.109334 10.922666v541.525334z" fill="#666666" p-id="5396"></path></svg>
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
      meanList:[],//底部导航数据
    };
  },
   async fetch() {
    let res = await this.$axios.notNeedlogin( {
      className: "NavigationController",
      classMethod: "getBottomNavigation",
    });
    if (res.bol) {
    return this.meanList = res.data;
    }
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
    // justify-content: space-between;
    padding: 0px 15px;

    li {
      width: 110px;
      height: 64px;
      background: #df7b50;
      border-radius: 4px;
      margin-top: 16px;
      margin-right: 7px;
      &:nth-child(3n){
         margin-right: 0px;
      }
    }
  }

  .info {
    .item-info {
      display: flex;
    justify-content: center;
    align-items: center;
      padding-top: 16px;


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
