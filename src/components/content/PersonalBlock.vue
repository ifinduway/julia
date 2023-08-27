<template>
<div class="container aboutblock">
  <div class="title-wrapper">
    <h1><slot name="title"></slot></h1>
    <span><slot name="subtitle"></slot></span>
  </div>
  <div class="aboutblock__card">
    <div class="image-circle">
      <img :src="image" alt="">
    </div>
    <div class="card-content">
      <div class="card-content__item">
        АВТОР БОЛЕЕ 40 МЕТОДИЧЕСКИХ ПРОГРАММ, А МОЖЕТ И БОЛЬШЕ...
      </div>
      <div class="card-content__item">
        ЛЮБИТ КОФЕ
      </div>
      <div class="card-content__item">
        ЕЩЕ ПОДСЕЛА НА ОДНОРАЗКИ КОРОЧ
      </div>
      <div class="card-content__item">
        КАТАЕТСЯ НА ГЕТСЕ (ХОЧЕТ ЛЕХУС)
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'aboutBlock',

props: {
  image: {
    type: String,
    default: undefined
  }
}
}
</script>

<style>
  .aboutblock {
    padding: 100px 0;
  }
  .aboutblock .title-wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .aboutblock__card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-circle {
    z-index: 10;
    width: 300px;
    height: 300px;
  }
  .image-circle img {
    object-fit: cover;
    width: 100%;
    border-radius: 100%;
    height: 100%;
  }
  .card-content {
    width: 100%;
    padding: 80px 50px;
    padding-top: 200px;
    background-color: #B298C8;
    border-radius: 48px;
    color: #fff;
    margin-top: -120px;
    display: flex;
    flex-direction: column;
    
  }

  .aboutblock__card {
    padding: 50px 0;
  }

  .card-content__item {
    position: relative;
    font-weight: bold;
    padding-left: 20px;
    padding-bottom: 30px;
  }

  .card-content__item::before {
    content: '';
    display: flex;
    position: absolute;
    left: -20px;
    width: 35px;
    height: 35px;
    background: url('@/assets/check-white.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media(max-width: 425px) {
    .image-circle {
      width: 190px;
      height: 190px;
    }

    .card-content {
      padding-top: 150px;
    }

    
    .aboutblock {
      padding: 50px 0;
    }
  }
</style>
  