<template>
  <div class="base-input">
    <input v-mask="mask" :placeholder="placeholder" type="text" v-model="inputVal">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    mask: {
      type: [String, Array],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },

  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style>
 .base-input {
  width: 100%;
 }

 .base-input input {
  width: 100%;
  height: 70px;
  border-radius: 1px;
  border: 1px solid #333;
  outline: none;
  padding: 0 20px;
  margin-bottom: 20px;
 }
</style>
    