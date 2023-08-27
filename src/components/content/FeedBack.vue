<template>
  <div class="container feedback" id="feedback">
    <h2>ЗАПИШИСЬ НА ПРОБНОЕ ЗАНЯТИЕ (ДЕНЬГИ ТОЛЬКО ПЛАТИТЬ НАДА БУДЕТ &#128516;)</h2>
    <form class="feedback-form" @click.prevent="sendMessage">
      <!-- <base-input rulesType="text" :mask="'####-####'" :placeholder="'Промокод'" v-model="promoCode"/> -->
      <base-input :placeholder="'Имя ребенка'" v-model="childName"/>
      <base-input type="number" :placeholder="'Возраст ребенка'" v-model="age"/>
      <base-input :placeholder="'Имя родителя'" v-model="parentName"/>
      <base-input :mask="'+7 (###) ###-##-##'" type="number" :placeholder="'Телефон'" v-model="phone"/>
      <base-button v-if="!isDelivered" :class="{'button__disabled' : !isReadyToSend}" :disabled="!isReadyToSend" style="margin-top: 30px">Записаться</base-button>
      <span v-else>Отправлено! В скором времени с Вами свяжется администратор</span>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import axios from 'axios';

export default {
  name: 'FeedBack',

  components: {
    BaseInput,
    BaseButton,
  },

  data() {
    return {
      promoCode: null,
      childName: null,
      age: null,
      parentName: null,
      phone: null,

      telegramSettings: {
        token: '5943385886:AAGSo1uMyLhTIwvDoK28gfgkElRAFR_UtgM',
        chatID: '-1001703073438',
        uriAPI: `https://api.telegram.org/bot${this.token}/sendMessage`
      },

      isDelivered: false
    };
  },

  computed: {
    isReadyToSend() {
      let valid = false
      if (this.childName !== null && this.age !== null && this.parentName !== null && this.phone !== null) {
        valid = true
      }
      if (this.phone && this.phone.length !== 18) {
        valid = false
      }
      return valid
      // return (this.childName !== null && this.age !== null && this.parentName !== null && this.phone !== null)

      
    }
  },

  methods: {
    sendMessage() {
      if (this.isReadyToSend) {
          const data = {
          text: `Имя ребенка: ${this.childName}\nВозраст: ${this.age}\nИмя родитея: ${this.parentName}\nНомер телефона: ${this.phone}`,
          chat_id: this.telegramSettings.chatID,
          parse_mode: 'html'
        }

        axios.post(`https://api.telegram.org/bot${this.telegramSettings.token}/sendMessage`, data).then(() => this.isDelivered = true)
      }
    }
  }


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
    