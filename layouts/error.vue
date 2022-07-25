<template>
  <div class="wapper">
    <div class="error-box">
      <nuxt-link to="/">
        <img src="@/static/images/404_yd.jpg" alt="" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
<style lang="less" scoped>
.error-box {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
