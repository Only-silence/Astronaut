<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1rem;
  height: 462%;
  width: 100%;
  // background-image:url('./assets/2019-8-21-gai-宇航人英文网站.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #2c3e50;
}
::-webkit-scrollbar{
    display:none;
}
</style>
