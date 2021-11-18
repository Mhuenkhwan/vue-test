<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Gallery</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view/>
    <footer id="footer"></footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #9c7cf3;
  height: 50px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  background: black;
  height: 50px;
    position:relative;
   left:0px;
   bottom:0px;
   width: 100%;
}
</style>
