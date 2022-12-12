<template>
  <div class="container header">
    <div class="logo">Школа красивой речи</div>
    <div class="contacts">
      <div class="call">
        <a class="call-item" href="tel:79999999999">+7 (999) 999-99-99</a>
      </div>
      <div class="location">Брянск, Рославльская 9</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'headerView',
}
</script>

<style>
  .header {
    border-bottom: 1px solid rgba(3, 3, 3, 0.2);
    padding-bottom: 50px;
    padding-top: 50px;
    display: flex;
    align-items: center;
  }

  .header .logo {
    flex: 1;
  }

  .header .contacts {
    display: flex;
    align-items: center;
    max-width: 400px;
    width: 100%;
    justify-content: space-between;
  }
  
  .header .contacts .call {
    position: relative;
  }

  .header .contacts .call .call-item {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }

  
  .header .contacts .call .call-item:hover {
    color:  ;
  }

  .header .contacts .call::before {
    content: '';
    display: flex;
    position: absolute;
    left: -30px;
    top: 3px;
    width: 30px;
    height: 30px;
    background: url('@/assets/phone.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .header .contacts .location {
    position: relative;
  }

  
  .header .contacts .location::before {
    content: '';
    display: flex;
    position: absolute;
    left: -30px;
    top: 3px;
    width: 30px;
    height: 30px;
    background: url('@/assets/location.svg');
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 768px) {
    .header .contacts {
      flex-direction: column;
    }
    .header .contacts .call {
      margin-bottom: 20px;
      font-size: 12px;
    }

    .header .contacts .call::before {
      width: 15px;
      height: 15px;
      left: -20px;
    }

    .header {
      display: flex;
      flex-direction: column;
    }
  } 
</style>
  