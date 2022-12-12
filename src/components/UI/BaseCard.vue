
<template>
  <div class="base-card">
    <img :src="imgSrc" class="base-card__image">
    <slot name="caption" />
    <slot name="subtitle"/>
    <base-button :width="'200px'" :height="'55px'">Подробнее</base-button>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'base-card',

  components: {
    BaseButton,
  },

  props: {
    imgSrc: {
      type: String,
      default: undefined,
    },
  }
}
</script>

<style>
  .base-card {
    display: flex;
    flex-direction: column;
    margin: 40px;
    max-width: 200px;
    text-align: center;
  }

  .base-card__caption {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .base-card__subtitle {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .base-card img {
    border-radius: 100%;
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }
</style>
    