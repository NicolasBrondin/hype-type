<template>
  <div id="app">
    <h1>Sélectionne ta voiture</h1>
    <div style="display: flex;align-items: center;width: 100%;justify-content: center;">
      <button @click="set_step(1)" class="arrow-button">
        <img src="./assets/arrow.svg" height="50" style="transform: rotate(180deg);"/>
      </button>
      <Car :state="car_state"/>
      <button @click="set_step(1)" class="arrow-button">
        <img src="./assets/arrow.svg" height="50"/>
        </button>
    </div>
    <SpeechBubble :text="text"/>
  </div>
</template>

<script>
import SpeechBubble from './components/SpeechBubble.vue'
import Car from './components/Car.vue'

export default {
  name: 'App',
  data: function(){
    return {
      step: 0,
      car_state: "",
      text: "Je suis la vieille voiture de ton oncle !"
    }
  },
  methods: {
    set_step: function(step){
      if(this.step < step){
        this.step = step;
        switch(this.step){
          case 1: {
            this.car_state = "surprised"; 
            this.text = "Comment ça tu ne veux pas me choisir ?"
            break;
          }
        }
      }
    }
  },
  components: {
    SpeechBubble,
    Car
  }
}
</script>

<style>
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
