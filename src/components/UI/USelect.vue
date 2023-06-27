<template>
  <div class="select">
    <p class="toggle" @click="displaySelect = !displaySelect">Редактировать таблицу</p>
    <div class="option__inner">
      <div class="option" v-for="(option, index) in columns" :class="{show: displaySelect}">
        <span>
          <input class="checkbox" type="checkbox" :id="option.key" @change="changeOption(index)" :checked="option.isVisible">
          <label class="checkbox" :for="option.key">{{option.title}}</label>
        </span>
        <u-button
          class="sort__btn"
          @click.native="$emit('selectedSort', option.key)"
          :disabled="!checkedList.includes(option)"
        >
          Сортировать
        </u-button>
      </div>
    </div>
  </div>
</template>

<script>
import {indexOf} from "core-js/internals/array-includes";

export default {
  name: "u-select",
  model: {
    prop: 'columns',
    event: 'change'
  },
  props: {
    columns: Array
  },
  data() {
    return {
      displaySelect: true,
      checkedList: this.columns
    }
  },
  methods: {
    changeOption(index) {
      this.$emit('change', this.checkedList[index].isVisible = !this.checkedList[index].isVisible)
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
  background-color: #fff;
  border: 1px solid #002525;
  border-radius: 3px;
}

.option__inner {
  position: absolute;
  left: -1px;
  width: 330px;
  background: #fff;
  z-index: 10;
}
.option:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  height: 30px;
  line-height: 30px;
  border-bottom: none;
  padding: 0 20px;
  input {
    margin-right: 6px;
  }
  .sort__btn {
    border: none;
    background-color: transparent;
    box-shadow: none;
    color: #f55c00;
    &:disabled {
      color: #7e7e7e;
      &:hover {
        border: none;
        background-color: transparent;
      }
      &:active {
        box-shadow: none;
      }
    }
  }
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