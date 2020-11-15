<template>
    <div id="app">
      <div style="width: 100%;position: relative;">
        <h1>Tape ce texte le plus vite possible</h1>
        <input id="main-input" type="text" v-model="user_text" @keyup="refresh_text" />
        <p>{{user_text}}<span>{{to_be_written}}</span></p> 
      </div>   
    </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      sentences: [
        "je dois taper ce texte",
        "et celui là aussi"
      ],
      word: null,
      sentence_index: 0,
      word_index: 0,
      user_text: "",
      
    }
  },
  mounted: function(){
    this.word = this.sentences[this.sentence_index].split(' ')[this.word_index];
    document.querySelector("#main-input").focus();
    document.querySelector("#main-input").addEventListener("blur", function(){
      setTimeout(function(){document.querySelector("#main-input").focus()}, 0);
    });
  },
  computed: {
    to_be_written: function(){
      if(this.word){
        return this.word.substr(this.user_text.length);
      } else {
        return "";
      }
    }
  },
  methods: {
    refresh_text: function(){
      if(this.word.indexOf(this.user_text) !== 0) {
        this.user_text = this.user_text.substr(0,this.user_text.length-1);
      } else if(this.word.indexOf(this.user_text) === 0 && this.word.length === this.user_text.length){
        if(this.word_index === this.sentences[this.sentence_index].split(' ').length - 1){
          if(this.sentence_index === this.sentences.length -1) {
            alert("fini");
          } else {
            this.sentence_index++;
            this.word_index = 0;
          }
        }
        console.log(this.sentence_index);
        this.word = this.sentences[this.sentence_index].split(' ')[++this.word_index];
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
input {
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  z-index: 1;
  height: 50px;
  opacity: 0;
}
p {
  display: inline-block;
  position: absolute;
  z-index: 2;
  margin:0;
  font-size: 60px;
  text-align: center;
  width: 100%;
  left: 0;
}

span {
  color: rgba(0,0,0,0.2);
}
</style>
