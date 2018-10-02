<template>
  <div class="app" id="app" >
        <video  loop preload="none" class="videoMain" ref="videoMain">
          <source src="../src/assets/retro.mp4" type="video/mp4">
        </video>
        <video loop preload="none" class="videoUp" ref="videoUp">
          <source src="../src/assets/matrix.mp4" type="video/mp4">
        </video>
        <video loop preload="none" class="videoDown" ref="videoDown">
          <source src="../src/assets/matrix.mp4" type="video/mp4">
        </video>
        <video loop preload="none" class="videoLeft" ref="videoLeft">
          <source src="../src/assets/matrix.mp4" type="video/mp4">
        </video>
        <video loop preload="none" class="videoRight" ref="videoRight">
          <source src="../src/assets/matrix.mp4" type="video/mp4">
        </video>

        <audio loop ref="audioElm">
          <source  src="../src/assets/Midnight_Danger.mp3" type="audio/mp3">
        </audio>

      <router-view :audio = "audio"
                   :playAudio = "play"
                   :videoMain = "videoMain"
                   :videoUp = "videoUp"
                   :videoDown = "videoDown"
                   :videoRight = "videoRight"
                   :videoLeft = "videoLeft"></router-view>

  </div>
</template>

<script>
  import Navigation from './Navigation.vue'
  import Maintenance from './Maintenance.vue'
  import MdTextarea from "./components/MdTextarea";

  export default {
    components:{
      MdTextarea,
      Navigation,
      Maintenance,
    },
    data(){
      return {
        isMusic: false,

        audio: null,
        videoMain: null,
        videoUp: null,
        videoDown: null,
        videoRight: null,
        videoLeft: null,
      }
    },
    methods: {
      play: function() {
        if(this.isMusic === false){
          this.audio.play();
          this.isMusic = true;
        }
        else{
          this.audio.pause();
          this.isMusic = false;
        }
      }
    },

    mounted: function () {
      this.videoMain = this.$refs.videoMain;
      this.videoUp = this.$refs.videoUp;
      this.videoDown = this.$refs.videoDown;
      this.videoLeft = this.$refs.videoLeft;
      this.videoRight = this.$refs.videoRight;
      this.audio = this.$refs.audioElm;

      this.audio.volume = 0.1;
      this.videoMain.play();
    },
};
</script>

<style>
  .app{
    position: fixed;
    background: linear-gradient(#000000, #8964ff);
    width: 100%;
    height: 100%;
  }


  .videoMain{
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -111;
    right: 0;
    transition: transform  1s;
  }

  .videoUp{
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -100;
    right: 0;
    transform: translateY(-100%);
    transition: transform  1s;
  }

  .videoDown{
    bottom: 0;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -101;
    right: 0;
    transform: translateY(100%);
    transition: transform  1s;
  }

  .videoLeft{
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -102;
    left: 0;
    transform: translateX(-100%);
    transition: transform  1s;
  }

  .videoRight{
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -103;
    right: 0;
    transform: translateX(100%);
    transition: transform  1s;
  }

  .button-up {
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height:2px;
    line-height:60px;
    left: 50%;

    margin-top: 10px;

    cursor: pointer;
    width: 100px;

    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 75px solid rgba(245, 245, 245, 0.51);
  }
  .button-up:hover {
    -webkit-transition: margin 1s;
    -moz-transition: margin 1s;
    transition: margin 1s;
  }

  .button-down {
    position:absolute;
    bottom:0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height:60px;
    line-height:60px;
    left: 50%;

    cursor: pointer;
    width: 0;

    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 75px solid rgba(245, 245, 245, 0.51);
  }

  .button-left {
    position:fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    height:60px;
    line-height:60px;

    cursor: pointer;
    width: 0;

    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
    border-right: 75px solid rgba(245, 245, 245, 0.51);
  }

  .button-right {
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    height:60px;
    line-height:60px;

    cursor: pointer;
    width: 0;
    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
    border-left: 75px solid rgba(245, 245, 245, 0.51);
  }
</style>
