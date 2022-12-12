<template>
  <div class="button" :style="style">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'base-button',
  props: {
    width: {
      type: String,
      default: '300px',
    },

  height: {
    type: String,
    default: '70px',
  },

  border: {
    type: String,
    default: 'none',
  },

  background: {
    type: String,
    default: '#e22362',
  },
  },

  computed: {
    style() {
      return `width: ${this.width}; height: ${this.height}; border: ${this.border}; background: ${this.background}`
    },
  }
}
</script>

<style>
 .button {
  border-radius: 50px;
  background-color: #e22362;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
 }

 .button:hover {
  background-color: #97c455;
  transition-property: background-color;
  transition-duration: 0.30s;
  transition-delay: 0;
 }
</style>
    