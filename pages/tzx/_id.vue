<template>
  <div>
    <Header />
    <ArticleDetails :detailsData="detailsData" />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "not",
  data() {
    return {
      detailsData: {}, //文章详情数据
    };
  },
  async asyncData({ $axios, query, params, store }) {
    let res = await $axios.notNeedlogin({
      className: "ArticleController",
      classMethod: "articleDetails",
      data: {
        articleId: params.id,
        token: store.state.token,
      },
    });
    if (res.bol) {
      return {
        detailsData: res.data,
      };
    }
  },
  mounted() {},
  methods: {},
};
</script>
