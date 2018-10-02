<template>
<div style="position: fixed; width: 100%; height: 100%;">
  <button class="button-up" ref="Up" @mouseover="buttonUp" @click="buttonUpClick"><router-link to="/">Start</router-link></button>

  <div class="maintenance-body">
    <div class="md-layout  md-alignment-center">
      <span class="md-display-3" style="color: rgb(255,75,53); text-shadow: 2px 2px #a3bcff;">Server maintenance</span>
    </div>

    <transition>
      <div class="gears md-layout md-alignment-center">
        <div class="rotate1"></div>
        <div class="rotate2" ></div>
        <div class="rotate3"></div>
      </div>
    </transition>

    <div class="md-layout md-alignment-center">
      <span  class="md-display-2" style="color: rgb(240,205,255); text-shadow: 2px 2px #8964ff;">Please visit later...</span>
    </div>
    <div class="md-layout md-alignment-center">
      <span class="md-display-2" style="color: rgb(240,205,255); text-shadow: 2px 2px #8964ff;">...or stay here, I don't mind :)</span>
    </div>
  </div>

  <div class="button-left" ref="Left" @mouseover="buttonLeft" @click="buttonLeftClick"><router-link to="/projects">Projects</router-link></div>
  <div class="button-right" ref="Right" @mouseover="buttonRight" @click="buttonRightClick"><router-link to="/about">About</router-link></div>
  <div class="button-down" ref="Down" @mouseover="buttonDown" @click="buttonDownClick"> <router-link to="/contacts">Contacts</router-link></div>
</div>


</template>

<script>
  export default {
    data(){
      return {
        isMusic: false,
      }
    },
    methods: {
      onWindow: function(event){

        if(this.isStart){
          this.$refs.videoMain.style.marginTop = '0px';
          this.$refs.videoMain.style.marginRight = '0px';
          this.$refs.videoMain.style.transform = 'translateY(100%)';
          this.isMain  = this.isAbout = this.isContacts  = this.isProjects = false;
        }
        else if(this.isAbout){
          this.$refs.videoMain.style.marginTop = '0px';
          this.$refs.videoMain.style.marginRight = '0px';
          this.$refs.videoMain.style.transform = 'translateY(100%)';
          this.isMain  = this.isStart = this.isContacts  = this.isProjects = false;
        }
        else if(this.isContacts){
          this.$refs.videoMain.style.marginTop = '0px';
          this.$refs.videoMain.style.marginRight = '0px';
          this.$refs.videoMain.style.transform = 'translateY(-100%)';
          this.isMain  = this.isAbout = this.isStart  = this.isProjects = false;
        }
        else if(this.isProjects){
          this.$refs.videoMain.style.marginTop = '0px';
          this.$refs.videoMain.style.marginRight = '0px';
          this.$refs.videoMain.style.transform = 'translateY(-100%)';
          this.isMain  = this.isAbout = this.isContacts  = this.isStart = false;
        }
        else if(this.isMain) {
          this.$refs.videoMain.style.marginTop = '0px';
          this.$refs.videoMain.style.marginRight = '0px';
          this.$refs.videoUp.style.transform = 'translateY(-100%)';
          this.$refs.videoDown.style.transform = 'translateY(100%)';
          this.$refs.videoLeft.style.transform = 'translateX(-100%)';
          this.$refs.videoRight.style.transform = 'translateX(100%)';
          this.isStart  = this.isAbout = this.isContacts  = this.isProjects = false;
        }

      },
      buttonUpHover: function(event){
        this.$refs.videoUp.style.visibility = 'visible';
        this.$refs.videoUp.style.transform = 'translateY(-90%)';
        this.$refs.videoMain.style.marginTop = '10%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
      },
      buttonDownHover: function(event){
        this.$refs.videoDown.style.visibility = 'visible';
        this.$refs.videoDown.style.transform = 'translateY(80%)';
        this.$refs.videoMain.style.marginTop = '-10%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
      },
      buttonLeftHover: function(event){
        this.$refs.videoMain.style.marginRight = '-10%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
        this.$refs.videoLeft.style.visibility = 'visible';
        this.$refs.videoLeft.style.transform = 'translateX(-90%)';
      },
      buttonRightHover: function(event){
        this.$refs.videoMain.style.marginRight = '10%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
        this.$refs.videoRight.style.visibility = 'visible';
        this.$refs.videoRight.style.transform = 'translateX(90%)';
      },

      buttonUpClick: function(event){
        this.isStart = true;
        this.$refs.videoUp.style.visibility = 'visible';
        this.$refs.videoUp.style.transform = 'translateY(-0%)';
        this.$refs.videoMain.style.marginTop = '100%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
      },

      buttonDownClick: function(event){
        this.isContacts = true;
        this.$refs.videoDown.style.visibility = 'visible';
        this.$refs.videoDown.style.transform = 'translateY(0%)';
        this.$refs.videoMain.style.marginTop = '-100%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
      },

      buttonLeftClick: function(event){
        this.isProjects = true;
        this.$refs.videoMain.style.marginRight = '-100%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
        this.$refs.videoLeft.style.visibility = 'visible';
        this.$refs.videoLeft.style.transform = 'translateX(10%)';
      },

      buttonRightClick: function(event){
        this.isAbout = true;
        this.$refs.videoMain.style.marginRight = '100%';
        this.$refs.videoMain.style.transition = 'margin 1.1s';
        this.$refs.videoRight.style.visibility = 'visible';
        this.$refs.videoRight.style.transform = 'translateX(-10%)';
      },


      play: function(event) {
        if(this.isMusic === false){
          this.$refs.audioElm.play();
          this.isMusic = true;
        }
        else{
          this.$refs.audioElm.pause();
          this.isMusic = false;
        }
      }
    },
    mounted: function (){
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
/*.maintenance1{
  text-align: center;
  height: 100%;
  width: 100%;
  background: url("../src/assets/sun.jpg");
  background-size: cover;
  position: absolute;
  animation: slide 60s linear infinite;
}
@keyframes slide {
  from { background-position: 0 0; }
  to { background-position: -300px 0; }
}
*/

.gears{
  position: relative;
  margin-top: 80px;
  margin-bottom: 90px;
}

.rotate1{
  width:100px; height: 100px;
  background: url("../src/assets/Gear.png");
  background-size: cover;
  position: relative;
  animation: rotation1 2.5s infinite linear;
}
@keyframes rotation1 {
  from {transform: rotate(0deg);  }
  to { transform: rotate(359deg);  }
}


  .rotate2{
    width:70px; height: 70px;
    background: url("../src/assets/Gear.png");
    background-size: cover;
    position: relative;
    left: -10px;
    animation: rotation2 1.5s infinite linear;
  }

@keyframes rotation2 {
  from { transform: rotate(359deg);  }
  to { transform: rotate(0deg);  }
}


.rotate3{
  width:110px; height: 110px;
  background: url("../src/assets/Gear.png");
  background-size: cover;
  position: relative;
  top: -20px;
  left: -20px;
  animation: rotation3 4s infinite linear;
}
@keyframes rotation3 {
  from {transform: rotate(0deg); }
  to { transform: rotate(359deg); }
}
</style>
