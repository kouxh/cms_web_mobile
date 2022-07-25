<template>

</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        centeredSlides: false,
        slidesPerView: 2.4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 20, // 在slide之间设置距离
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
      swiperTwoOption: {
        initialSlide: 1, //默认显示第二张在中心位置
        slidesPerView: 1.5,
        loop: true, // 无限循环
        spaceBetween: -40,
        centeredSlides: true,
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right-two", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left-two", //上一张标签类名可以自定义
        },
      },
      isplay: true, //视频是否播放
      //音频
      isAudio: false, //控制音频控件显示隐藏
      showPlay: false, //音频是否播放
      audioFile: "", //音频来源
      currentTime: "00:00",
      duration: "00:00",
      isMute: false,
      sliderTime: 0,
      volume: 0, //静音
      currentIndex: 0, //当前索引
      menuData: [
        {
          title: "数字化转型文章 数字化转型-音频1",
          id: "1",
          url: "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/eded7683aa074000ba6a0dd1e26be901/TRANSCODE_1620640654182/gc-liuqin-all",
        },
        {
          title: "数字化转型文章 数字化转型-音频2",
          id: "2",
          url: "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/e556c807309a4de393237b56bd76e48e/TRANSCODE_1620640654182/Still%20Doll",
        },
        {
          title: "数字化转型文章 数字化转型-音频3",
          id: "3",
          url: "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/c5fc19c8df334bea8ae6d952fa0c311c/TRANSCODE_1620640654182/%E6%BA%AF%20%28Reverse%E6%B2%BB%E6%84%88%E7%89%88%29",
        },
      ], //播放列表
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.$refs.movie.addEventListener("play", this.handlePlay);
    this.$refs.movie.addEventListener("pause", this.handlePause);
  },
  methods: {
    //点击立即订阅
    // buyFn() {
    //   this.$router.push({
    //     name: "subscription-pay",
    //   });
    // },
    //点击视频播放按钮
    handlePlay() {
      this.$refs.movie.play();
      this.isplay = false;
    },
    //点击视频暂停按钮
    handlePause() {
      this.$refs.movie.pause();
      this.isplay = true;
    },

    //播放音频组件
    audioPlay(index, item) {
      this.isAudio = true;
      if (index != this.currentIndex) {
        //关闭当前播放音乐
        // this.$refs.audio.pause();
        this.audioFile = item.url;
        //更改src后需要重新加载音乐
        this.$refs.audio.load();
        // this.sliderTime = 0;
        // this.currentTime = "00:00";
        // this.$refs.audio.currentTime = 0;
        // this.$refs.progressbar.style.backgroundSize = "0% 100%";
        this.showPlay = true;
        this.currentIndex = index;
        setTimeout(() => {
          this.$refs.audio.play();
        }, 500);
      } else if (index == this.currentIndex && this.$refs.audio.paused) {
        this.currentIndex = index;
        this.audioFile = item.url;
        this.showPlay = true;
        setTimeout(() => {
          this.$refs.audio.play();
        }, 500);
      } else {
        this.showPlay = false;
        this.$refs.audio.pause();
      }
    },

    //点击音频控件播放按钮
    audioHandlePlay() {
      if (!this.audioFile) {
        return;
      }
      // 判断是否正在播放 返回布尔值
      if (this.$refs.audio.paused) {
        // 开始
        this.showPlay = true;
        this.$refs.audio.play();
      } else {
        // 暂停
        this.showPlay = false;
        this.$refs.audio.pause();
      }
    },
    //原数据被加载时运行的脚本
    onLoadedmetadata(res) {
      this.duration = this.formatTime(res.target.duration);
      this.volume = res.target.volume * 100;
      this.isMute = res.target.muted;
      this.$refs.mutebar.style.backgroundSize = `${
        res.target.volume * 100
      }% 100%`;
    },

    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate(res) {
      this.updateProgress();
    },

    // 当音量改变时
    onVolumechange(res) {
      this.$refs.audio.muted = !Boolean(res.target.volume);
      this.isMute = !Boolean(res.target.volume);
    },
    //进度条事件
    handleProgress(e) {
      let rate = e.target.value / 100;
      this.$refs.audio.currentTime = this.$refs.audio.duration * rate;
      this.updateProgress();
    },
    //更新进度条
    updateProgress() {
      this.sliderTime =
        (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100 || 0;
      this.currentTime = this.formatTime(this.$refs.audio.currentTime);
      this.$refs.progressbar.style.backgroundSize = `${this.sliderTime}% 100%`;
    },
    //音量操作
    hancleChangeVolume(e) {
      if (!this.audioFile) {
        return;
      }
      this.volume = e.target.value;
      let _volume = e.target.value / 100;
      this.$refs.audio.volume = _volume;
      this.$refs.mutebar.style.backgroundSize = `${e.target.value}% 100%`;
    },
    //静音
    handleMute() {
      if (this.$refs.audio.muted) {
        //取消静音
        this.isMute = false;
        this.$refs.audio.muted = false;
      } else {
        //静音
        this.isMute = true;
        this.$refs.audio.muted = true;
      }
    },

    //播放完成
    onAudioEnded() {
      // this.sliderTime = 0;
      // this.currentTime = "00:00";
      // this.showPlay = false;
      // this.$refs.progressbar.style.backgroundSize = "0% 100%";
      // this.$refs.audio.load();
      this.nextClick(); //下一首
    },
    //格式化时长
    formatTime(s) {
      let t = "";
      s = Math.floor(s);
      if (s > -1) {
        let min = Math.floor(s / 60) % 60;
        let sec = s % 60;
        if (min < 10) {
          t += "0";
        }
        t += min + ":";
        if (sec < 10) {
          t += "0";
        }
        t += sec;
      }
      return t;
    },
    //上一首
    prevClick() {
      console.log("自定义", "上一曲点击");
      //关闭当前播放音乐
      this.$refs.audio.pause();
      this.currentIndex =
        this.currentIndex > 0
          ? this.currentIndex - 1
          : this.menuData.length - 1;

      //自动播放当前音乐
      setTimeout(
        function () {
          this.audioPlay(this.currentIndex, this.menuData[this.currentIndex]);
        }.bind(this),
        100
      );
    },
    //下一曲
    nextClick() {
      console.log("自定义", "下一曲点击");
      //关闭当前播放音乐
      this.$refs.audio.pause();
      this.currentIndex =
        this.currentIndex < this.menuData.length - 1
          ? this.currentIndex + 1
          : 0;
      //自动播放当前音乐
      setTimeout(
        function () {
          this.audioPlay(this.currentIndex, this.menuData[this.currentIndex]);
        }.bind(this),
        100
      );
    },
  },
};
</script>
<style lang="less" scoped>

</style>
