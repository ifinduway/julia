<template>
  <div class="content promo">
    <div class="promo-wrapper container">
      <div class="text-wrapper">
        <h1>ШКОЛА КРАСИВОЙ РЕЧИ</h1>
        <span>ШКОЛА ЮЛИИ БИЗНЕСВУМЕН</span>
      </div>
      <base-button class="mobile" :href="'#feedback'">Записаться</base-button>

      <link-icon style="margin: 0 auto" :blockID="'#feedback'"/>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import LinkIcon from '../UI/LinkIcon.vue';

export default {
  name: 'contentView',

  components: {
    BaseButton,
    LinkIcon
  }
}
</script>

<style>
  .link {
    width: 50px;
    height: 50px;
    border: 1px solid red;
  }
  .link {
    animation: shake 2s infinite linear;
    backface-visibility: hidden;
  }
    
  @keyframes shake {
    0% {transform:translateY(0px);animation-timing-function:ease-in-out;}
    50% {transform:translateY(10px);animation-timing-function:ease-in-out;}
    100% {transform:translateY(0px);}
  }
    
  .promo {
    width: 100%;
    margin: 50px 0;
    background: url('@/assets/promo.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    height: 800px;
    background-position-y: 0;
    display: flex;
    padding-top: 100px;
  }

  .promo-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .text-wrapper h1{
    font-size: 60px;
  }

  .text-wrapper span {
    font-size: 30px;
  }

  .btt {
    max-width: 300px;
    width: 100%;
    height: 70px;
    border-radius: 50px;
    background-color: #e22362;
  }

  @media(max-width: 768px) {
    .promo {
      background: none;
      height: auto;
    }

    .promo-wrapper {
      position: relative;
      top: -160px;
      text-align: center;
    }
    
    .promo-wrapper .button {
      position: relative;
      top: -80px;
      margin: 0 auto;
    }
  }

  @media(max-width: 425px) {
    .promo-wrapper {
      position: relative;
      top: 0;
      text-align: center;
    }

    .promo {
      padding-top: 0px;
    }

    .mobile {
      display: none;
    }

    .text-wrapper {
      padding-bottom: 50px;
    }
  }
</style>
  