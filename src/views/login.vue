<template>
  <form @submit.prevent="login">
    <label for="username">
      <span>Username</span>
      <input type="text" id="username" v-model="userdata.username">
    </label>
    <label for="password">
      <span>Password</span>
      <input type="password" id="password" v-model="userdata.password">
    </label>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      userdata:{
        username:null,
        password:null
      }
    }
  },
  methods:{
    login(){
      axios.post('http://localhost:8090/login',this.userdata).then(res => {
        console.log(res);
        alert('Successfully authentication');
      }).catch(err => {
        console.error('Authentication fail', err);
        alert('Authentication fail');
      })
    }
  }
}
</script>

<style>

</style>
