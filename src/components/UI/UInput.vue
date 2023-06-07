<template>
  <input @input="updateInput" class="input" type="text" placeholder="Поиск по полям таблицы">
</template>

<script>
export default {
  name: "u-input",
  props: {
    value: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 230px;
  height: 40px;
  padding: 0 15px;
  background-color: #fff;
  border: 1px solid #2c3e50;
  border-radius: 3px;
}
</style>