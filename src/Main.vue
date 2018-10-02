<template>
  <div style="width: 100%; height: 100%;" >
    <a class="button-up" @mouseover="buttonUpHover" @click="buttonUpClick">Start</a>

    <div style="min-width: 100%; min-height: 100%;" @mouseover="onWindow" @click="play">
      <div class="md-layout  md-alignment-center maintenance-body">
        <span class="md-display-3" style="color: rgb(255,75,53); text-shadow: 2px 2px #a3bcff;">Main page</span>
      </div>
    </div>

    <a class="button-left" @mouseover="buttonLeftHover" @click="buttonLeftClick">Projects</a>
    <a class="button-right" @mouseover="buttonRightHover" @click="buttonRightClick">About</a>
    <a class="button-down" @mouseover="buttonDownHover" @click="buttonDownClick">Contacts</a>
  </div>
</template>

<script>
  export default {
    props:{
      audio: HTMLAudioElement,
      playAudio: Function,
      videoMain: HTMLVideoElement,
      videoUp: HTMLVideoElement,
      videoDown: HTMLVideoElement,
      videoLeft: HTMLVideoElement,
      videoRight: HTMLVideoElement,
    },
    data(){
      return {
        isMain: true,
        isAbout: false,
        isContacts: false,
        isProjects: false,
        isServices: false,

        ev: null,
      }
    },
    methods: {
      onWindow: function(event){
        if(this.isAbout){
          this.isMain  = this.isContacts  = this.isProjects = this.isServices = false;
        }
        else if(this.isContacts){
          this.isMain  = this.isAbout = this.isProjects = this.isServices = false;
        }
        else if(this.isProjects){
          this.isMain  = this.isAbout = this.isContacts = this.isServices = false;
        }
        else if(this.isServices){
          this.isMain  = this.isAbout = this.isContacts = this.isProjects = false;
        }
        else if(this.isMain) {
          this.videoMain.style.zIndex = '-1';
          this.videoMain.style.transform = 'translateY(0%)';
          this.videoMain.style.transform = 'translateX(0%)';
          this.videoUp.style.transform = 'translateY(-100%)';
          this.videoDown.style.transform = 'translateY(100%)';
          this.videoLeft.style.transform = 'translateX(-100%)';
          this.videoRight.style.transform = 'translateX(100%)';
          this.videoUp.pause();
          this.videoDown.pause();
          this.videoLeft.pause();
          this.videoRight.pause();
          this.isAbout = this.isContacts  = this.isProjects = this.isServices = false;
        }
      },

      buttonUpHover: function(event){
        this.videoUp.play();
        this.videoUp.style.visibility = 'visible';
        this.videoUp.style.transform = 'translateY(-90%)';
        this.videoMain.style.transform = 'translateY(10%)';
        this.videoMain.style.transition = 'transform 1.1s';
      },
      buttonDownHover: function(event){
        this.videoDown.play();
        this.videoDown.style.visibility = 'visible';
        this.videoDown.style.transform = 'translateY(90%)';
        this.videoMain.style.transform = 'translateY(-10%)';
        this.videoMain.style.transition = 'transform 1.1s';
      },
      buttonLeftHover: function(event){
        this.videoLeft.play();
        this.videoLeft.style.visibility = 'visible';
        this.videoLeft.style.transform = 'translateX(-90%)';
        this.videoMain.style.transform = 'translateX(10%)';
        this.videoMain.style.transition = 'transform 1.1s';
      },
      buttonRightHover: function(event){
        this.videoRight.play();
        this.videoRight.style.visibility = 'visible';
        this.videoRight.style.transform = 'translateX(90%)';
        this.videoMain.style.transform = 'translateX(-10%)';
        this.videoMain.style.transition = 'transform 1.1s';
      },


      buttonUpClick: function(event){
        this.isAbout = true;
        this.videoUp.style.visibility = 'visible';
        this.videoUp.style.transform = 'translateY(-0%)';
        this.videoMain.style.transform = 'translateY(100%)';
        this.videoMain.style.transition = 'transform 1.1s';
        this.videoUp.play();

        this.$router.push('/about');
      },

      buttonDownClick: function(event){
        this.isServices = true;
        this.videoDown.style.visibility = 'visible';
        this.videoDown.style.transform = 'translateY(0%)';
        this.videoMain.style.transform = 'translateY(-100%)';
        this.videoMain.style.transition = 'transform 1.1s';
        this.videoDown.play();

        this.$router.push('/services');
      },

      buttonLeftClick: function(event){
        this.isProjects = true;
        this.videoMain.style.transform  = 'translateX(100%)';
        this.videoMain.style.transition = 'transform 1.1s';
        this.videoLeft.style.visibility = 'visible';
        this.videoLeft.style.transform = 'translateX(0%)';
        this.videoLeft.play();

        this.$router.push('/projects');
      },

      buttonRightClick: function(event){
        this.isContacts = true;
        this.videoMain.style.transform  = 'translateX(-100%)';
        this.videoMain.style.transition = 'transform 1.1s';
        this.videoRight.style.visibility = 'visible';
        this.videoRight.style.transform = 'translateX(-0%)';
        this.videoRight.play();

        this.$router.push('/contacts');
      },

      play: function(event) {
        this.playAudio();
      },

      keyPressed: function (event) {
        if (event.keyCode === 38) this.buttonUpClick();
        else if (event.keyCode === 40) this.buttonDownClick();
        else if (event.keyCode === 37) this.buttonLeftClick();
        else if (event.keyCode === 39) this.buttonRightClick();
        else return;
        window.removeEventListener('keyup', this.ev);
      }
    },
    mounted() {
      window.addEventListener('keyup', this.ev = event => this.keyPressed(event));
    },
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
