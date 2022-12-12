<template>
  <div class="link-icon" v-scroll-to="blockID"/>
</template>

<script>

export default {
  name: 'linkIcon',
  
  props: {
    blockID: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style>
  .link-icon {
    width: 50px;
    height: 50px;
    background: url('https://static.tildacdn.com/tild6138-3862-4737-b837-383130313663/Vector.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  .link-icon {
    animation: shake 2s infinite linear;
    backface-visibility: hidden;
  }
    
  @keyframes shake {
    0% {transform:translateY(0px);animation-timing-function:ease-in-out;}
    50% {transform:translateY(10px);animation-timing-function:ease-in-out;}
    100% {transform:translateY(0px);}
  }
</style>
  