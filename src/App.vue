<template>
    <div class="app" v-if="word">
        <input type="text" v-model="user_text" @keyup="refresh_text" />
        <p>{{user_text}}<span style="color: grey;">{{to_be_written}}</span></p>
    </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      sentences: [
        "je dois taper ce texte"
      ],
      word: null,
      word_index: 0,
      user_text: "",
      
    }
  },
  mounted: function(){
    this.word = this.sentences[0].split(' ')[this.word_index];
  },
  computed: {
    to_be_written: function(){
      return this.word.substr(this.user_text.length);
    }
  },
  methods: {
    refresh_text: function(){
      console.log(this.word.length);
      console.log(this.user_text.length);
      if(this.word.indexOf(this.user_text) !== 0) {
        this.user_text = this.user_text.substr(0,this.user_text.length-1);
      } else if(this.word.indexOf(this.user_text) === 0 && this.word.length === this.user_text.length){
        this.word = this.sentences[0].split(' ')[++this.word_index];
        this.user_text = "";
      }
    }
  },
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 0px 20px;
}
h1 {
  margin-bottom: 20px;
  font-family: Roboto;
}
.arrow-button {
  background: transparent;
  border: 0;
  outline: 0;
  opacity: 0.1;
}
</style>
