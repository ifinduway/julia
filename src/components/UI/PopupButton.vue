
<template>
  <div class="popup-button__wrapper">
    <div class="popup-button" @click="(isShowPopup = true)">
      <slot name="button-title" />
    </div>
    <div v-if="isShowPopup" class="popup">
      <div class="popup-container">
        <div class="popup-close" @click="(isShowPopup = false)" />
        <slot name="popup-content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-button',

  data: () => ({
    isShowPopup: false,
  })
}
</script>

<style>
  .popup-button__wrapper {
  }

  .popup-button {
    padding: 9px 18px;
    border-radius: 30px;
    background-color: #fff;
    color: #e22362;
    cursor: pointer;
  }

  .popup-button:hover {
    background-color: #e22362;
    color: #fff;
    transition: background-color 0.3s;
  }

  .popup {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    backdrop-filter: blur(5px);
    background-color: rgba(3, 3, 3, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .popup-container {
    position: relative;
    max-width: 1440px;
    width: 100%;
    height: 800px;
    border: 1px solid red;
  }

  
  .popup-close {
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 30px;
    background: url('@/assets/close-icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    right: 50px;
    top: 50px;
  }

  .popup-content img {
    width: 100%;
  }
</style>
    