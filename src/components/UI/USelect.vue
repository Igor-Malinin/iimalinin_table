<template>
  <div class="select">
    <p class="toggle" @click="displaySelect = !displaySelect">Редактировать таблицу</p>
    <div class="option__inner">
      <div class="option" v-for="option in options" :class="{show: displaySelect}">
        <input class="checkbox" type="checkbox" :id="option.value" @change="changeOption" checked> <label class="checkbox" :for="option.value">{{option.name}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-select",
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Array,
    options: Array,

  },
  data() {
    return {
      displaySelect: true,
      checkedList: this.checked
    }
  },
  methods: {
    changeOption(event) {
      if(event.target.checked) {
        this.checkedList.push(event.target.id)
        this.$emit('change', this.checkedList)
      }
      else {
        this.checkedList.splice(this.checkedList.indexOf(event.target.id), 1)
        this.$emit('change', this.checkedList)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  text-align: center;
  width: 330px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 3px;
}

.option__inner {
  position: absolute;
  left: -1px;
  width: 330px;
  background: white;
  z-index: 10;
}
.option:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.option {
  border: 1px solid #000;
  height: 30px;
  line-height: 30px;
  border-bottom: none;
}
.option:last-child {
  border-bottom: 1px solid #000;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.checkbox {
  cursor: pointer;
}

.toggle {
  cursor: pointer;
  line-height: 38px;
}
.show {
  display: none;
}
</style>