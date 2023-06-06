<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "u-button"
}
</script>

<style lang="scss" scoped>
.btn {
  border: 2px solid teal;
  padding: 8px;
  background-color: #2c3e50;
  color: aquamarine;
  border-radius: 5px;
  cursor: pointer;
}
</style>