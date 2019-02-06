<template>
  <div id="app">
    <h1>My personal chat</h1>
    <div class="messages">
      <div v-for="(message,i) in messages" :key="i" :class="{'mymessage': message.user == 'client'}">
        <message  :message="message"></message>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="actualMessage"/>
      <button type="submit">send</button>
    </form>
  </div>
</template>

<script>
import message from '../components/message';
export default {
  name: 'app',
  components:{ message },
  data () {
    return {
      messages: [],
      actualMessage:''
    }
  },
  sockets: {
    connect() {
      console.log('conectado');
    },
    messages(messages){
      this.messages = messages;
    },
  },
  methods: {
    sendMessage(){
      if(this.actualMessage.length > 0){
        this.$socket.emit('newMessage',{user:'client',text:this.actualMessage});
        this.actualMessage = '';
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, Arial, Sans-serif;
}
  .messages{
    height: 85vh;
    margin: .5%;
    margin-top: 3vh;
    overflow-y: auto;
  }
  .messages::-webkit-scrollbar,input::-webkit-scrollbar{
    width: 5px;
    background-color: lightgray;
  }
  .messages::-webkit-scrollbar-thumb,input::-webkit-scrollbar-thumb{
    background: gray;
  }
  form{
    margin-top: 1%;
    display: flex;
    justify-content: space-around
  }
  input{
    width: 90vw;
    outline: none;
    padding: .25% 1%;
    word-wrap: break-word;
    resize: none;
  }
  button{
    width: 5vw;
    cursor: pointer;
  }
  input, button{
    border: thin solid gray;
    border-radius: 1ex;
  }
  .messages > div{
    display: flex;
  }
  .mymessage{
    flex-direction: row-reverse;
  }
</style>
