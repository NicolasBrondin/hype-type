<template>
  <div id="app">
    <h1>Sélectionne ta voiture</h1>
    <div style="display: flex;align-items: center;width: 100%;justify-content: center;">
      <button @click="click_button()" class="arrow-button">
        <img src="./assets/arrow.svg" height="50" style="transform: rotate(180deg);"/>
      </button>
      <Car :on_click="click_car" :state="car_state"/>
      <button @click="click_button()" class="arrow-button">
        <img src="./assets/arrow.svg" height="50"/>
        </button>
    </div>
    <SpeechBubble :color="color" :text="text"/>
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
      color: "#3498db",
      text: "Je suis la vieille voiture de ton oncle !"
    }
  },
  methods: {
    click_button: function(){
      switch(this.step){
        case 0 : {this.set_step(1);break;}
        case 1 : {this.set_step(2);break;}
        case 2 : {this.set_step(3);break;}
        case 3 : {this.set_step(4);break;}
        case 6 : {this.set_step(7);break;}
      }
    },
    click_car: function(){
      switch(this.step){
        case 4 : {this.set_step(5);break;}
        case 5 : {this.set_step(6);break;}
        case 6 : {this.set_step(7);break;}
      }
    },
    set_step: function(step){
      if(this.step < step){
        this.step = step;
        switch(this.step){
          case 1: {
            this.car_state = "surprised"; 
            this.text = "Comment ça tu ne veux pas me choisir ?"
            break;
          }
          case 2: {
            this.car_state = "surprised"; 
            this.text = "Tu sais que si ton oncle m'avait pas eu, ton père n'aurait pas rencontré ta mère..."
            break;
          }
          case 3: {
            this.car_state = "angry"; 
            this.text = "Tu me déçois !";
            this.color = "#e67e22";
            break;
          }
          case 4: {
            this.car_state = "angry"; 
            this.text = "Touche-moi la carrosserie pour te faire pardonner...";
            this.color = "#e67e22";
            break;
          }
          case 5: {
            this.car_state = "angry"; 
            this.text = "Encore !";
            this.color = "#f1c40f";
            break;
          }
          case 6: {
            this.car_state = "surprised"; 
            this.text = "C'est bon, tu es pardonné... Mais ne dit rien à personne";
            this.color = "#3498db";
            break;
          }
          case 7: {
            this.car_state = ""; 
            this.text = "Fin";
            this.color = "#3498db";
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
