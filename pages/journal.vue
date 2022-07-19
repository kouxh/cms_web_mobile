<template>

</template>
<script>
import { saveAs } from "file-saver";
export default {
  layout: "not",
  data() {
    return {
      pageindex: 0, //当前索引
      pageHeight: 880, //一页高度
      readType: 1, // 1:横屏模式 2:竖屏模式
      isBuy: 0, //判断是否购买0没有购买1 购买成功
      fullscreen: 1, //单屏1 双屏2
      magazineId: this.$route.query.id, //获取当前杂志id
      journalData: "", //从缓存中取值
      journalMonry: "36.00", //价钱
      login: this.$store.state.token, //是否登录
      list: [
        "https://images.chinamas.cn/Pdfimg/2022/03/22/b3c013c57d741a22cfd20ec1b6d34b4b.png",
        "https://images.chinamas.cn/Pdfimg/2022/03/22/9fbf52cadcfd8c3d47ee38ed25e4458c.png",
      ], //电子刊图片列表数据
      // url: "https://www.chinamas.cn/static/img/1.pdf",
      isPay: true, //是否为付费文章
    };
  },

  asyncData({ $axios }) {
    // let res =await $axios.get('/api/XX');
    // return {res}
    //获取用户购买杂志电子刊的状态
    // $.ajax({
    //     type: "GET",
    //     url: '/getUserPayMagazineStatus?mid=' + this.magazineId + '',
    //     success: function (data) {
    //         if (data.bol) {
    //             this.isBuy == 1;
    //             this.readFn();//请求阅读接口
    //             $(".buy img").attr({title: '已购买'});
    //             $(".buy").removeAttr('onclick');
    //         } else {
    //             this.tryRead();//请求试读接口
    //         }
    //     }
    // })
  },
  mounted() {
    let that = this;
    document.body.style.backgroundColor = '#000';
    //初始化置顶
    window.onunload = unload;
    function unload(e) {
      window.scrollTo(0, 0);
    }
    if (that.isBuy == 1) {
      $(".buy img").attr({ title: "已购买" });
      $(".buy").removeAttr("onclick");
    }
    //监听滚动条获取index索引
    window.addEventListener("scroll", that.handleScroll);

    //获取键盘按键按下事件
    $(document).bind("keydown", function (e) {
      //获取按键键值
      let key = window.event ? e.keyCode : e.which;
      if (
        key.toString() == "33" ||
        key.toString() == "37" ||
        key.toString() == "38"
      ) {
        //跳转到上一页
        that.pre();
      } else if (
        key.toString() == "32" ||
        key.toString() == "34" ||
        key.toString() == "39" ||
        key.toString() == "40"
      ) {
        //跳转到下一页
        that.next();
      }
    });
    //购买全本
    $(".buy").hover(
      function () {
        $(".buy .img2").show();
        $(".buy .img1").hide();
      },
      function () {
        $(".buy .img1").show();
        $(".buy .img2").hide();
      }
    );
    //详情
    $(".details").hover(
      function () {
        $(".details .img2").show();
        $(".details .img1").hide();
      },
      function () {
        $(".details .img1").show();
        $(".details .img2").hide();
      }
    );

    //上一页
    $(".changePage_pre").hover(
      function () {
        $(".changePage_pre .img2").show();
        $(".changePage_pre .img1").hide();
      },
      function () {
        $(".changePage_pre .img1").show();
        $(".changePage_pre .img2").hide();
      }
    );
    //下一页
    $(".changePage_next").hover(
      function () {
        $(".changePage_next .img2").show();
        $(".changePage_next .img1").hide();
      },
      function () {
        $(".changePage_next .img1").show();
        $(".changePage_next .img2").hide();
      }
    );
    //全屏退出全屏切换
    $(".all_screen").hover(
      function () {
        $(".all_screen .img2").show();
        $(".all_screen .img1").hide();
      },
      function () {
        $(".all_screen .img1").show();
        $(".all_screen .img2").hide();
      }
    );
    $(".no_all_screen").hover(
      function () {
        $(".no_all_screen .img2").show();
        $(".no_all_screen .img1").hide();
      },
      function () {
        $(".no_all_screen .img1").show();
        $(".no_all_screen .img2").hide();
      }
    );
    //单双页切换
    $(".singlePage").hover(
      function () {
        $(".singlePage .img2").show();
        $(".singlePage .img1").hide();
      },
      function () {
        $(".singlePage .img1").show();
        $(".singlePage .img2").hide();
      }
    );
    $(".doublePage").hover(
      function () {
        $(".doublePage .img2").show();
        $(".doublePage .img1").hide();
      },
      function () {
        $(".doublePage .img1").show();
        $(".doublePage .img2").hide();
      }
    );
    //全屏
    $("#fullscreen").on("click", function () {
      that.fullscreen % 2 == 1 ? that.enterfullscreen() : that.exitfullscreen();
    });
    //切换单双屏
    $("#pageFn").on("click", function () {
      that.readType % 2 == 1 ? that.single() : that.pair();
    });
  },
  created() {},
  methods: {
     // 滚动监听  滚动触发的效果写在这里
    handleScroll() {
      let that=this;
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t <= 0) {
        that.$message({ message: "已经是第一页了", duration: 1000 });
      } else {
        if (that.readType == 1) {
          that.pageindex = Math.floor(t / that.pageHeight);
        } else {
          that.pageindex = parseInt(t / that.pageHeight) * 2;
        }
      }
      //处理滚动加载
      var src = $(".single-li img").eq(that.pageindex).attr("src");
      if (src == "") {
        $(".loading_tips").css({ display: "block" });
      } else {
        $(".loading_tips").css({ display: "none" });
      }
    },
    //单选按钮
    checkedThis(obj) {
      //  let gender=$("input[name='type']:checked").val();
      var boxArray = document.getElementsByName("type");
      for (var i = 0; i <= boxArray.length - 1; i++) {
        if (boxArray[i].value == obj && boxArray[i].checked) {
          boxArray[i].checked = true;
        } else {
          boxArray[i].checked = false;
        }
      }
    },
    //下载pdf文件
    getPdf(url) {
      let name = "测试";
      this.fileLinkToStreamDownload(url);
      // this.downloadFileByBlob(url, name);
      // this.downloadFile(url, "file.pdf").then((res) => {
      //   console.log(url, "===");
      //   // 下载成功后的操作
      //   console.log("下载成功！");
      // });
    },
    // 下载文件 获取链接接口添加responseType: 'blob'
    downloadFile(fileStream, saveFileName) {
      return new Promise((resolve, reject) => {
        const blob = new Blob([fileStream]);
        if (navigator.msSaveBlob) {
          // 兼容IE
          navigator.msSaveBlob(blob, saveFileName);
        } else {
          const url = window.URL.createObjectURL(blob);
          saveAs(url, saveFileName);
        }
        resolve();
      });
    },
    fileLinkToStreamDownload(url) {
      console.log(url, "-00");
      let fileName = this.getDay();
      console.log(fileName, "11");
      let reg =
        /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
      if (!reg.test(url)) {
        throw new Error("传入参数不合法,不是标准的文件链接");
      } else {
        console.log("22");
        let xhr = new XMLHttpRequest();
        console.log(xhr, "33");
        xhr.open("get", url, true);
        xhr.setRequestHeader("Content-Type", `application/pdf`);
        xhr.responseType = "blob";
        let that = this;
        xhr.onload = function () {
          if (this.status == 200) {
            //接受二进制文件流
            var blob = this.response;

            that.downloadExportFile(blob, fileName);
          }
        };
        xhr.send();
      }
    },
    downloadExportFile(blob, tagFileName) {
      console.log(blob, "blob");
      let downloadElement = document.createElement("a");
      let href = blob;
      if (typeof blob == "string") {
        downloadElement.target = "_blank";
      } else {
        href = window.URL.createObjectURL(blob); //创建下载的链接
      }
      downloadElement.href = href;
      downloadElement.download =
        tagFileName +
        //下载后文件名
        document.body.appendChild(downloadElement);
      downloadElement.click(); //点击下载
      document.body.removeChild(downloadElement); //下载完成移除元素
      if (typeof blob != "string") {
        window.URL.revokeObjectURL(href); //释放掉blob对象
      }
    },
    getDay() {
      let time = new Date(),
        year = time.getFullYear(),
        month = time.getMonth() + 1,
        day = time.getDate(),
        timeStem = time.getTime();
      return `${year}/${month}/${day}/${timeStem}.jpg`;
    },
    // 下载文件的流
    downloadFileByBlob(res, fileName) {
      const blobUrl = window.URL.createObjectURL(new Blob([res]));
      const filename = fileName || "file";
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        try {
          const blob = new Blob([res], { type: "application/pdf" });
          window.navigator.msSaveOrOpenBlob(blob, filename);
        } catch (e) {
          console.log(e);
        }
      } else {
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = blobUrl;
        link.setAttribute("download", filename);
        // 模拟
        document.body.appendChild(link);
        link.click();
        // 释放URL 对象
        window.URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
      }
    },
    //上一页
    pre() {
      if (this.pageindex == 0) {
        this.$message("已经是第一页了");
      } else {
        if (this.readType == 1) {
          this.pageindex -= 1;
          window.scrollTo(
            0,
            this.pageindex * this.pageHeight + this.pageindex * 10
          );
        } else {
          this.pageindex = this.pageindex - 2;
          window.scrollTo(
            0,
            (this.pageindex / 2) * this.pageHeight + (this.pageindex / 2) * 10
          );
        }
      }
    },
    //下一页
    next() {
      if (this.pageindex == this.list.length) {
        this.$message("已经是最后一页了");
      } else {
        if (this.readType == 1) {
          this.pageindex++;
          window.scrollTo(
            0,
            this.pageindex * this.pageHeight + this.pageindex * 10
          );
        } else {
          this.pageindex = this.pageindex + 2;
          window.scrollTo(
            0,
            (this.pageindex / 2) * this.pageHeight + (this.pageindex / 2) * 10
          );
        }
      }
    },
    //控制全屏
    enterfullscreen() {
      //进入全屏
      this.fullscreen = 2;
      $(".no_all_screen").css({ display: "block" });
      $(".all_screen").css({ display: "none" });
      var docElm = document.documentElement;
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    },
    //退出全屏
    exitfullscreen() {
      this.fullscreen = 1;
      $(".no_all_screen").css({ display: "none" });
      $(".all_screen").css({ display: "block" });
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },

    //控制单页
    single() {
      this.readType = 2;
      $(".singlePage").css({ display: "block" });
      $(".doublePage").css({ display: "none" });
      $(".img-box ul").addClass("pair-ul").removeClass("single-ul");
      $(".img-box ul li").addClass("pair-li").removeClass("single-li");
      $(".right-mean").css({
        right: "80px",
      });
    },

    //控制单双页
    pair() {
      this.readType = 1;
      $(".doublePage").css({ display: "block" });
      $(".singlePage").css({ display: "none" });
      $(".img-box ul").addClass("single-ul").removeClass("pair-ul");
      $(".img-box ul li").addClass("single-li").removeClass("pair-li");
      $(".right-mean").css({
        right: "230px",
      });
    },

    //跳转到详情
    detailsFn() {
      this.$router.push({
        name: "catalogue-zz",
        query: { id: this.magazineId },
        // params: {
        //   type: item,
        // },
      });
    },
    //点击购买按钮
    buyFn() {
      //判断是否登录
      if (this.login == null || this.login == undefined) {
        this.$message.error("登陆后可购买");
        this.$router.push({
          name: "login",
        });
      } else {
        // journalData = getCookie("journalData");
        // setcookie("data", journalData);
        // location.href = "/orderpay";
        //携带存值跳到购买页面
      }
    },
    // 阅读请求后台数据
    readFn() {
      let result = "";
      let last = ""; //最后一个页面
      // $.ajax({
      //   type: "GET",
      //   url: "/PurchaseReadingApi?id=" + this.magazineId + "",
      //   success: function (data) {
      //     if (data.bol) {
      //       this.list = data.data.array_pdf;
      //       this.journalMonry = data.data.electronics;
      //       for (var i = 0; i < this.list.length; i++) {
      //         if (this.list[i] != "") {
      //           result += `
      //                       <li class="single-li" page=${i}>
      //                           <img src="" class="lazy" data-original="${this.list[i]}" alt="">
      //                       </li>`;
      //         }
      //       }
      //       last = `
      //           <li class="single-li" page=${this.list.length}>
      //              <div class="last-page">
      //               <div class="book-link">已购买</div>
      //              </div>
      //           </li>`;
      //       $(".img-box .single-ul").append(result).append(last);
      //       //图片懒加载
      //       $("img.lazy").lazyload({ effect: "fadeIn", threshold: 400 });
      //     } else {
      //       this.$message.error(data.msg);
      //     }
      //   },
      //   error: function () {},
      // });
    },

    //试读请求后台接口
    tryRead() {
      let result = "";
      let last = ""; //最后一个页面
      let noData = ""; //无数据时展示
    //   $.ajax({
    //     type: "GET",
    //     url: "/TrialReadingApi?id=" + this.magazineId + "",
    //     success: function (data) {
    //       if (data.bol) {
    //         this.list = data.data.electronic_t_read_pdf_img;
    //         this.journalMonry = data.data.electronics;
    //         for (var i = 0; i < this.list.length; i++) {
    //           if (this.list[i] != "") {
    //             result += `
    //                         <li class="single-li" page=${i}>
    //                             <img src="" class="lazy" data-original="${this.list[i]}" alt="">
    //                         </li>`;
    //           }
    //         }
    //         last = `<li class="single-li" page=${this.list.length}>
    //                 <div class="last-page">
    //                     <img src="/static/img/journal/last-page.png" alt="" class="img" >
    //                     <h2>试读结束...</h2>
    //                     <h3>意犹未尽，立即购买，后面内容更精彩！</h3>
    //                     <div class="book-link" @click="buyFn">￥${
    //                       this.journalMonry ? this.journalMonry : "--"
    //                     }</div>
    //                 </div>
    //             </li>`;
    //         $(".img-box .single-ul").append(result).append(last);
    //         //图片懒加载
    //         $("img.lazy").lazyload({ effect: "fadeIn", threshold: 400 });
    //       } else {
    //         this.$$message.error(data.data.msg);
    //         noData = `<li class="single-li" page=${this.list.length}>
    //                 <div class="last-page">
    //                     <h2>${data.data.msg}...</h2>
    //                 </div>
    //             </li>`;
    //       }
    //       $(".img-box .single-ul").append(noData);
    //     },
    //     error: function () {},
    //   });
    },
  },
  beforeDestroy() {
     document.querySelector('body').removeAttribute('style')
  },

  destroyed() {
    window.removeEventListener("scroll",this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang='less' scoped>

</style>
