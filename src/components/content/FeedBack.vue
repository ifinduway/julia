<template>
  <div class="container feedback">
    <h2>ЗАПИШИСЬ НА ПРОБНОЕ ЗАНЯТИЕ (ДЕНЬГИ ТОЛЬКО ПЛАТИТЬ НАДА БУДЕТ &#128516;)</h2>
    <form class="feedback-form" @submit.prevent="">
      <base-input :mask="'####-####'" :placeholder="'Промокод'" v-model="promoCode"/>
      <base-input :placeholder="'Имя ребенка'" v-model="childName"/>
      <base-input type="number" :placeholder="'Возраст ребенка'" v-model="age"/>
      <base-input :placeholder="'Имя родителя'" v-model="parentName"/>
      <base-input :mask="'+7 (###) ###-##-##'" type="number" :placeholder="'Телефон'" v-model="phone"/>
      <base-button style="margin-top: 30px">Записаться</base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseButton from '@/components/UI/BaseButton.vue'

export default {
  name: 'FeedBack',

  components: {
    BaseInput,
    BaseButton
  },

  data() {
    return {
      promoCode: null,
      childName: null,
      age: null,
      parentName: null,
      phone: null
    };
  },
}
</script>

<style>
  .feedback h2 {
    text-align: center;
  }

  .feedback-form {
    padding: 50px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
    