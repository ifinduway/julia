<template>
  <div class="container navigation">
    <div class="navigation-item">О КЛУБЕ</div>
    <div class="navigation-item">КУРСЫ</div>
    <div class="navigation-item">РАСПИСАНИЕ И ЦЕНЫ</div>
    <div class="navigation-item">КОНТАКТЫ</div>
  </div>
</template>

<script>
export default {
  name: 'contentView',
}
</script>

<style>
  .navigation {
    display: flex;
    max-width: 500px;
    width: 100%;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 40px;
  }

  .navigation-item {
    font-weight: 700;
  }

  @media(max-width: 768px) {
    .navigation {
      display: none;
    }
  }
</style>
    