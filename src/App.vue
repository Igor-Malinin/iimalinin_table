<template>
  <div class="app">
    <nav>
      <router-link class="nav_link" to="/">Главная</router-link>
      <router-link class="nav_link" to="/table">Таблица</router-link>
    </nav>
    <router-view/>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  //border: 1px solid black;
  //border-radius: 5px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #626262;
    text-decoration: none;
    padding: 5px;
    border-top: 2px solid #626262;
    border-bottom: 2px solid #626262;
    transition: all 0.2s ease;
    &.router-link-exact-active {
      color: #f55c00;
      border-left: 2px solid #f55c00;
      border-right: 2px solid #f55c00;
      border-top: none;
      border-bottom: none;
    }
  }
  a:first-child {
    margin-right: 10px;
  }
}

</style>