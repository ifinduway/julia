<template>
  <div class="container services">
    <h2>МЫ ПРЕДЛАГАЕМ:</h2>
    <div class="services-wrapper">
      <base-card v-for="(item, idx) in cards" :key="idx" :imgSrc="item.imgSrc">
        <template v-slot:caption>
          <div class="base-card__caption">{{item.caption}}</div> 
        </template>
        <template v-slot:subtitle>
          <div class="base-card__subtitle">{{item.subtitle}}</div>
        </template>
      </base-card>
    </div>
    <h2 class="pink">И ЕЩЕ БОЛЕЕ 10 КУРСОВ!</h2>
  </div>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  name: 'services-block',
  
  components: {
    BaseCard,
  },

  data: () => ({
    cards: [
      {
        imgSrc: 'https://thumb.tildacdn.com/tild6531-3934-4630-a534-666337323666/-/cover/200x200/center/center/-/format/webp/IMG_3717.jpg',
        caption: 'РАННЕЕ РАЗВИТИЕ',
        subtitle: 'С 9 МЕСЯЦЕВ ДО 3-Х ЛЕТ',
      },
      {
        imgSrc: 'https://thumb.tildacdn.com/tild6531-3934-4630-a534-666337323666/-/cover/200x200/center/center/-/format/webp/IMG_3717.jpg',
        caption: 'РАННЕЕ РАЗВИТИЕ',
        subtitle: 'С 9 МЕСЯЦЕВ ДО 3-Х ЛЕТ',
      },
      {
        imgSrc: 'https://thumb.tildacdn.com/tild6531-3934-4630-a534-666337323666/-/cover/200x200/center/center/-/format/webp/IMG_3717.jpg',
        caption: 'РАННЕЕ РАЗВИТИЕ',
        subtitle: 'С 9 МЕСЯЦЕВ ДО 3-Х ЛЕТ',
      },
      {
        imgSrc: 'https://thumb.tildacdn.com/tild6531-3934-4630-a534-666337323666/-/cover/200x200/center/center/-/format/webp/IMG_3717.jpg',
        caption: 'РАННЕЕ РАЗВИТИЕ',
        subtitle: 'С 9 МЕСЯЦЕВ ДО 3-Х ЛЕТ',
      },
      {
        imgSrc: 'https://thumb.tildacdn.com/tild6531-3934-4630-a534-666337323666/-/cover/200x200/center/center/-/format/webp/IMG_3717.jpg',
        caption: 'РАННЕЕ РАЗВИТИЕ',
        subtitle: 'С 9 МЕСЯЦЕВ ДО 3-Х ЛЕТ',
      },
      {
        imgSrc: 'https://thumb.tildacdn.com/tild6531-3934-4630-a534-666337323666/-/cover/200x200/center/center/-/format/webp/IMG_3717.jpg',
        caption: 'РАННЕЕ РАЗВИТИЕ',
        subtitle: 'С 9 МЕСЯЦЕВ ДО 3-Х ЛЕТ',
      },
    ]
  }),
}
</script>

<style>
  .services {
    padding: 100px 0;
  }

  .services-wrapper {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 100px;
  }

  .services h2 {
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    margin-bottom: 60px;
  }

  .pink {
    color: rgb(226, 35, 98);
    font-weight: bold;
  }
</style>
    