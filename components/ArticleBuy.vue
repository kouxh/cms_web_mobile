<template>
  <div class="article-buy-pupup">
    <van-popup
      round
      closeable
      v-model="articleBuyShow"
      :style="{ width: '280px', height: '236px' }"
    >
      <div class="content-box">
        <div class="title">购买文章</div>
        <div class="type-box">
          <!-- <div class="type-item">10 积分</div> -->
          <div class="type-item active">¥10.00</div>
        </div>
        <div class="buyFn">点击购买</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleBuyShow: true, //购买文章弹出框
    };
  },
};
</script>
<style lang="less" scoped>
.article-buy-pupup {
  .content-box {
    .title {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: #212223;
      line-height: 16px;
      margin-top: 24px;
    }
    .type-box {
      padding: 20px 20px 0px;
      .type-item {
        width: 225px;
        height: 40px;
        border: 1px solid #e5e5e5;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        color: #999999;
        line-height: 38px;
        padding-left: 15px;
      }
      .active {
        background: rgba(240, 107, 42, 0.05);
        border: 1px solid #f46911;
        border-radius: 6px;
        font-size: 22px;
        font-weight: 500;
        color: #ed6d38;
      }
    }
    .buyFn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-top: 28px;
      width: 232px;
      height: 36px;
      background: #ed6d38;
      border-radius: 18px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 16px;
    }
  }
}
</style>
