<template>
  <div class="footer">
    <div class="map">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aba6d099304a1a93fff89076df48c02deab0a0c25a757872ae97259c43aa32aca&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <div class="footer__content">
      <div class="contacts">
        <h2>НАШИ КОНТАКТЫ:</h2>
        <a class="telephone">+ 7 (999) 999-99-99</a>
        <a class="telephone">+ 7 (999) 999-99-99</a>
        <div class="telephone">Брянск, Рославльская, д.9</div>
        <div class="telephone">test@test.ru</div>
      </div>
      <div class="time">
        <h2>Часы работы:</h2>
        <div class="time__content">пн-пт: 9:00-20:00</div>
        <div class="time__content">сб: 9:00-19:00</div>
        <div class="time__content">вс: выходной</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footerView',

  data: () => ({
    settings: {
      apiKey: '',
      lang: 'ru_RU',
      coordorder: 'latlong',
      enterprise: false,
      version: '2.1'
    }
  })
}
</script>

<style>
  .footer {
    display: flex;
  }
  .footer__content {
    width: 50%;
    height: 1024px;
    background-color: #97c455;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 100px;
  }

  .map {
    height: 1024px;
    width: 100%;
  }

  @media(max-width: 768px) {
    .footer {
      flex-direction: column;
    }

    .footer__content {
      width: 100%;
      height: 350px;
      gap: 40px;
      text-align: center;
    }

    .map {
      height: 300px;
      width: 100%;
    }
  }
</style>
    