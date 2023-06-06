<template>
  <div class="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/table">Таблица</router-link>
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
    color: #f55c00;

    &.router-link-exact-active {
      color: #626262;
    }
  }
}

</style>