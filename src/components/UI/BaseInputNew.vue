<template>
  <v-text-field :rules="rules"
    :clearable="true"
    >
  </v-text-field>
</template>

<script>
export default {
  props: {
    rulesType: {
      type: String,
      default: null,
    }
  },

  computed: {
    rules () {
      if (this.rulesType === 'email') {
        return [ value => !!value || 'Обязательное.', 
          value => (value || '').length <= 20 || 'Максимум 20 символов', 
          value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Некоррекнтный e-mail'
        },]
      }

      if (this.rulesType === 'text') {
        return [ value => !!value || 'Обязательное.', 
          value => (value || '').length <= 20 || 'Максимум 20 символов', 
          value => {
          const pattern = /^([a-zA-Zа-яА-Я]|\s)*$/
          return pattern.test(value) || 'Некорректное имя'
        },]
      }

      return []
    }
  }
}
</script>

<style>

</style>
