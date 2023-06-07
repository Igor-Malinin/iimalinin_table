<template>
  <button type="button" class="btn">
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
  border: 2px solid #ff4d00;
  padding: 8px 10px;
  background-color: #f3f3f3;
  color: #d74300;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
  &:active {
    box-shadow: inset 0 0 4px #595959;
  }
  &:disabled {
    border: 2px solid #ffcdb8;
    cursor: not-allowed;
    &:hover {
      background-color: #f3f3f3;
    }
    &:active {
      box-shadow: none;
    }
  }
}
</style>