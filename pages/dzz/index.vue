<template>
  <div class="page-go-book">
    <div class="book-list" v-for="(item, index) in listData" :key="index">
      <div class="book-list-main" v-if="item.list.length > 0">
        <div class="list-title">
          <h2>{{ item.mas_magazinetype_name }}</h2>
          <div class="right">
            查看更多
           <svg t="1660023589319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5059" width="16" height="16"><path d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z" fill="#999999" p-id="5060"></path></svg>
          </div>
          <!-- <nuxt-link
            :to="{
              path: `${routerUrl}/list`,
              query: {
                menuId: $route.query.menuId,
                typeId: item.mas_magazinetype_id,
              },
            }"
            class="right"
          >
            查看更多
           <svg t="1660023589319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5059" width="16" height="16"><path d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z" fill="#999999" p-id="5060"></path></svg>
          </nuxt-link> -->
        </div>
        <div class="magazine-list">
          <dl
            v-for="(it, idx) in item.list"
            :key="idx"
            @click="details(it.mas_magazine_id)"
          >
            <dt>
              <img :src="it.mas_magazine_master_img" alt="" />
            </dt>
            <dd>
              <h5 class="title">{{ it.mas_magazine_title_main }}</h5>
              <!-- <p>出版社：北京大学出版社</p>
              <p>作者：刘勤</p> -->
              <div class="base">
                <div class="dd-l">
                  <span class="price"
                    >¥{{ it.mas_magazine_electronics }}-{{
                      it.mas_magazine_flat
                    }}</span
                  >
                </div>
              </div>
            </dd>
          </dl>
          <!-- <dl @click="details(1)">
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
          </dl> -->
        </div>
      </div>
    </div>
    <!-- <div class="book-list">
      <div class="book-list-main">
        <div class="list-title">
          <h2>其他杂志</h2>
          <div class="right">
            查看更多
             <svg t="1660023589319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5059" width="16" height="16"><path d="M588.8 252.342857a46.592 46.592 0 0 1 59.392-5.412571l6.436571 5.412571 263.314286 263.314286c16.091429 16.091429 17.92 41.252571 5.412572 59.392l-5.412572 6.436571-263.314286 263.314286a46.518857 46.518857 0 0 1-71.241142-59.392l5.412571-6.436571L819.2 548.571429 588.8 318.171429a46.592 46.592 0 0 1-5.412571-59.392l5.412571-6.436572z" fill="#999999" p-id="5060"></path></svg>
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
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: [], //列表数据
      routerUrl: this.$route.path, //当前页面路由
    };
  },
  head() {
    return {
      title: "读杂志_览百家经验，创管理智慧-管理会计研究",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
      },
      className: "MagazineController",
      classMethod: "magazineList",
    });
    console.log(res, "读杂志");
    if (res.bol) {
      return {
        listData: res.data.magazineList,
      };
    }
  },
  computed: {},
  mounted() {},
  methods: {
    //点击到详情
    details(id) {
      this.$router.push({
        path: `${this.routerUrl}/${id}`,
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
        display: flex;
    align-items: center;

  }
}
</style>
