<template>

</template>
<script>
export default {
  data() {
    return {
      showPlay: false,
      audioFile:
        "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/c5fc19c8df334bea8ae6d952fa0c311c/TRANSCODE_1620640654182/%E6%BA%AF%20%28Reverse%E6%B2%BB%E6%84%88%E7%89%88%29",
      currentTime: "00:00",
      duration: "00:00",
      isMute: false,
      sliderTime: 0,
      volume: 0,
    };
  },
  methods: {
    //点击音频播放按钮
    handlePlay() {
      if (!this.audioFile) {
        return;
      }
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
      this.sliderTime = 0;
      this.currentTime = "00:00";
      this.showPlay = false;
      this.$refs.progressbar.style.backgroundSize = "0% 100%";
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
    },
    //下一曲
    nextClick() {
      console.log("自定义", "下一曲点击");
    },
  },
};
</script>
<style lang="less" scoped>

</style>
