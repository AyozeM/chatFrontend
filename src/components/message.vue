<template>
  <div>
    <p class="name">{{actualMessage.user}}</p>
    <p class="text">{{actualMessage.text}}</p>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:Object,
      required: true
    }
  },
  data(){
    return{
      actualMessage: this.message
    }
  }
}
</script>

<style scoped>
  div{
    padding: .5% 1%;
    margin: 1%;
    border-radius: 1em;
    background-color: lightgoldenrodyellow;
    max-width: 75%;
  }
  div > p{
   word-wrap: break-word;
  }
  /* .text{
    white-space: initial;
  } */
  .name{
    font-weight: bold;
  }
</style>


