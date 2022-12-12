<template>
  <div class="content">
    <promo />
    <div class="container content__block">
      <h2>ЕСЛИ ВЫ ИЩЕТЕ ДЛЯ СЕБЯ И СВОЕГО РЕБЕНКА:</h2>
      <div class="block__items">
        <div class="item">ВЫСОКИЙ УРОВЕНЬ КУЛЬТУРЫ В ДЕТСКОМ ЦЕНТРЕ</div>
        <div class="item">ВЫСОКОПРОФЕССИОНАЛЬНЫХ ПЕДАГОГОВ</div>
        <div class="item">СОБСТВЕННЫЕ ПРОГРАММЫ МЕЖДУНАРОДНОГО УРОВНЯ</div>
        <div class="item">КАЧЕСТВЕННЫЙ СЕРВИС</div>
      </div>
      <base-button style="margin: 0 auto">Записаться</base-button>
    </div>
    <div class="content__block about">
      <h2>МЫ РАДЫ ВИДЕТЬ В НАШЕЙ ШКОЛЕ ДЕТЕЙ ОТ 9 МЕСЯЦЕВ ДО 10 ЛЕТ</h2>
      <div>С 2008 года у нас обучилось более 2.500 детей, проживающих в ЗАО и ЮЗАО города Б.</div>
    </div>
    <services-block />
    <div class="content__block schedule">
      <h2>РАСПИСАНИЕ <br>И СТОИМОСТЬ ЗАНЯТИЙ</h2>
      <div class="popups-wrapper">
        <popup-button v-for="(item, idx) in popups" :key="idx">
          <template v-slot:button-title>
            <div class="button-title">{{item.title}}</div>
          </template>
          <template v-slot:popup-content>
            <div class="popup-content">
              <img :src="item.img">
            </div>
          </template>
        </popup-button>
      </div>
      <base-button :width="'200px'" :height="'55px'" :border="'3px solid #fff'" :background="'transparent'">Подробнее</base-button>
    </div>
    <personal-block :image="'https://sun9-41.userapi.com/impg/B2aFHcsHamezgi_PqV9d661QS-ezGQBlaBaFBg/P3NWwKZW2io.jpg?size=1242x1522&quality=95&sign=46dad715bb63fe46c6cfb4cc4ae7d75f&type=album'">
      <template v-slot:title>ЮЛИЯ АРТУРОВНА</template>
      <template v-slot:subtitle>ДИРЕКТОР НАШЕГО КЛУБА</template>
    </personal-block>
  </div>
</template>

<script>
import Promo from '@/components/content/Promo.vue';
import ServicesBlock from '@/components/content/ServicesBlock.vue';
import BaseButton from './UI/BaseButton.vue';
import PopupButton from './UI/PopupButton.vue';
import PersonalBlock from '@/components/content/PersonalBlock.vue';

export default {
  name: 'contentView',

  components: {
    Promo,
    BaseButton,
    ServicesBlock,
    PopupButton,
    PersonalBlock,
  },

  data: () => ({
    popups: [
      {
        img: '@/assets/kek.jpg',
        title: 'От 9 до 1.5 лет'
      },
      {
        img: '@/assets/kek.jpg',
        title: 'От 9 до 1.5 лет'
      },
      {
        img: '@/assets/kek.jpg',
        title: 'От 9 до 1.5 лет'
      },
      {
        img: '@/assets/kek.jpg',
        title: 'От 9 до 1.5 лет'
      },
      {
        img: '@/assets/kek.jpg',
        title: 'От 9 до 1.5 лет'
      },
    ]
  })
}
</script>

<style>

  .content__block {
    padding: 100px 0 ;
  }

  .content__block h2{
    text-align: center;
  }

  .block__items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;
  }

  .block__items .item {
    position: relative;
    font-size: 24px;
    color: #333;
    max-width: 400px;
    margin-right: 50px;
    margin-bottom: 50px;
    width: 50%;
  }

  .block__items .item::before {
    content: '';
    display: block;
    position: absolute;
    left: -60px;
    top: 5px;

    width: 45px;
    height: 45px;
    background: url('https://static.tildacdn.com/tild3536-3461-4563-a436-383034383963/checkbox-marked-circ.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .about {
    color: #fff;
    background-color: #97c455;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about h2 {
    font-size: 50px;
    max-width: 1024px;
    font-weight: bold;
  }

  .about div {
    font-size: 30px;
    max-width: 950px;
    text-align: center;
  }

  .schedule {
    color: #fff;
    background-color: #97c455;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .popups-wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px 0;
  }

  @media(max-width:768px) {
    .block__items {
      flex-direction: column;
    }

    .block__items .item {
      max-width: 300px;
      width: 100%;
      font-size: 15px;
      margin-bottom: 15px;
      margin-left: 40px;
      padding: 0;
      text-align: start;
    }

    .block__items .item::before {
      width: 15px;
      height: 15px;
      left: -30px;
    }
    
    .content__block {
      padding: 0;
    }
  }
</style>
  