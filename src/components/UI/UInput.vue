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
  width: 430px;
  height: 40px;
  padding: 0 15px;
}
</style>