<template>
  <div class="page-go-book">
    <div class="book-list">
      <div class="book-list-main">
        <div class="list-title">
          <h2>管理会计研究</h2>
          <div class="right">
            查看更多
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <div class="magazine-list">
          <dl @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="book-list">
      <div class="book-list-main">
        <div class="list-title">
          <h2>其他杂志</h2>
          <div class="right">
            查看更多
            <i class="iconfont icon-juxing"></i>
          </div>
        </div>
        <div class="magazine-list">
          <dl  @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl  @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl  @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl  @click="details(1)">
            <dt>
              <img src="@/static/images/book.png" alt="" />
            </dt>
            <dd>
              <h5 class="title">2022年第一期 总第第一期20期</h5>
              <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p>
              <div class="base">
                <div class="dd-l">
                  <span class="price">¥43.5-50.36</span>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    //点击到详情
    details(id) {
      console.log(id,'==')
      this.$router.push({
        path: `/zz/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../static/css/page-css/gsd.less";
.list-title {
  padding: 20px 0px 16px !important;
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #212223;
    line-height: 18px;
  }
  .right {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 14px;
    .icon-juxing {
      margin-left: -8px;
    }
  }
}
</style>
