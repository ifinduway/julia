
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
    color: #333;
    cursor: pointer;
    font-weight: bold;
  }

  .popup-button:hover {
    background-color: rgb(98, 204, 255);
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
    width:300px;
    display: flex;
    margin: auto;
    max-width: 1440px;
    width: 100%;
    border: 1px solid #B298C8;
    position: relative;
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
    z-index: 1000;
  }
  
  .popup-content {
    display: block;
    height: 0;
    width: 100%;
    height: 100px;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
  }

  .popup-content img {
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    max-width: none;
    max-height: none;
    width: 100%;
    height: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-height: 100%;
    max-width: 100%;
  }
</style>
    