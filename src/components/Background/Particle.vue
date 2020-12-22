<template>
<div class="particle-background">
    <vue-particles class="wrapper"
        color="#fff"
        :particleOpacity="1"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        
      >
      </vue-particles>
      </div>
</template>


<style  scoped>
.particle-background{
     padding: 0;
    position: fixed;
    bottom: 0 ;
    height: 100vh;
    background-color: black;
    width: 100%;
    left: 0;
    z-index: -20;
    margin: 0;
}

.wrapper{
    height: 100%;
    width: 100%;
}
</style>