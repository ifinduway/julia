<template>
<div class="container aboutblock">
  <div class="title-wrapper">
    <h1><slot name="title"></slot></h1>
    <span><slot name="subtitle"></slot></span>
  </div>
  <div class="aboutblock__card">
    <img :src="image" alt="">
    <div class="card-content">
      <div class="card-content__item">
        АВТОР БОЛЕЕ 40 МЕТОДИЧЕСКИХ ПРОГРАММ
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
  .aboutblock__card img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    z-index: 999;
  }
  .card-content {
    width: 100%;
    padding: 80px 50px;
    background-color: #97c455;
    border-radius: 48px;
    color: #fff;
    margin-top: -120px;
  }
</style>
  