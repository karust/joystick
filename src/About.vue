<template>
  <div style="width: 100%; height: 100%;">
    <div style="min-width: 100%; min-height: 100%;" @mouseover="onWindow" @click="play">
      <div class="md-layout  md-alignment-center maintenance-body">
        <span class="md-display-3" style="color: rgb(255,75,53); text-shadow: 2px 2px #a3bcff;">About me</span>
      </div>
    </div>

    <a class="button-down" @mouseover="buttonDownHover" @click="buttonDownClick">Back</a>
  </div>
</template>

<script>
  export default {
    props:{
      audio: HTMLAudioElement,
      playAudio: Function,
      videoMain: HTMLVideoElement,
      videoUp: HTMLVideoElement,
    },
    data(){
      return {
        isMain: false,
        isAbout: true,
      }
    },
    methods: {
      onWindow: function(event){
        if(this.isMain) {
          this.isAbout = false;
        }
        else if(this.isAbout){
          this.videoUp.style.zIndex = '-1';
          this.videoUp.style.transform = 'translateY(0%)';
          this.videoUp.style.transform = 'translateX(0%)';
          this.videoMain.style.transform = 'translateY(100%)';
          this.videoMain.pause();
          this.isMain = false;
        }
      },

      buttonDownHover: function(event){
        this.videoMain.play();
        this.videoMain.style.visibility = 'visible';
        this.videoMain.style.transform = 'translateY(90%)';
        this.videoUp.style.transform = 'translateY(-10%)';
        this.videoUp.style.transition = 'transform 1.1s';
      },

      buttonDownClick: function(event){
        this.videoUp.style.zIndex = '-100';
        this.isMain = true;
        this.videoUp.style.transform = 'translateY(-100%)';
        this.videoUp.style.transition = 'transform 1.1s';
        this.videoMain.style.visibility = 'visible';
        this.videoMain.style.transform = 'translateY(0%)';
        this.videoMain.play();

        this.$router.push('/');
      },


      play: function(event) {
        this.playAudio();
      },

      keyPressed: function (event) {
        if (event.keyCode === 40) this.buttonDownClick();
        else return;
        window.removeEventListener('keyup', this.ev);
      }
    },
    mounted: function (){
      window.addEventListener('keyup', this.ev = event => this.keyPressed(event));
    }
  }
</script>

<style scoped>
  .maintenance-body{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
  }
</style>
