<template>
  <input type="submit" class="button" :style="style" v-scroll-to="href" value="УЗНАТЬ">
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
      default: '#62ccff',
    },

    href: {
      type: String,
      default: null
    }
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
  display: flex;
  color: #fff !important;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
 }
 
 .button:hover {
  background-color: #B298C8 !important;
  transition-property: background-color;
  transition-duration: 0.30s;
  transition-delay: 0;
 }

 .button__disabled {
  background-color: #333 !important;
  color: #fff;
 }

</style>
    