<template>
  <div style="width: 100%; height: 100%;">

    <div style="min-width: 100%; min-height: 100%;" @mouseover="onWindow" @click="play">
      <div class="md-layout  md-alignment-center maintenance-body">
        <span class="md-display-3" style="color: rgb(255,75,53); text-shadow: 2px 2px #a3bcff;">Contacts</span>
      </div>
    </div>

    <a class="button-left" @mouseover="buttonLeftHover" @click="buttonLeftClick">Back</a>
  </div>
</template>

<script>
  export default {
    props:{
      audio: HTMLAudioElement,
      playAudio: Function,
      videoMain: HTMLVideoElement,
      videoRight: HTMLVideoElement,
    },
    data(){
      return {
        isMain: false,
        isContacts: true,
      }
    },
    methods: {
      onWindow: function(event){
        if(this.isMain) {
          //this.videoRight.style.transform = 'translateY(100%)';
          this.isContacts = false;
        }
        else if(this.isContacts){
          this.videoRight.style.zIndex = '-1';
          this.videoRight.style.transform = 'translateY(0%)';
          this.videoRight.style.transform = 'translateX(0%)';
          this.videoMain.style.transform = 'translateX(-100%)';
          this.videoMain.pause();
          this.isMain = false;
        }
      },

      buttonLeftHover: function(event){
        this.videoMain.play();
        this.videoMain.style.visibility = 'visible';
        this.videoMain.style.transform = 'translateX(-90%)';
        this.videoRight.style.transform = 'translateX(10%)';
        this.videoRight.style.transition = 'transform 1.1s';
      },

      buttonLeftClick: function(event){
        this.videoRight.style.zIndex = '-100';
        this.isMain = true;
        this.videoRight.style.transform = 'translateX(100%)';
        this.videoRight.style.transition = 'transform 1.1s';
        this.videoMain.style.visibility = 'visible';
        this.videoMain.style.transform = 'translateX(0%)';
        this.videoMain.play();

        this.$router.push('/');
      },


      play: function(event) {
        this.playAudio();
      },

      keyPressed: function (event) {
        if (event.keyCode === 37) this.buttonLeftClick();
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
