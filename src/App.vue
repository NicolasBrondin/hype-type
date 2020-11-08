<template>
  <div id="app">
    <h1>Sélectionne ta voiture</h1>
    <div style="display: flex;align-items: center;width: 100%;justify-content: center;">
      <button class="arrow-button">
        <img src="./assets/arrow.svg" height="50" style="transform: rotate(180deg);"/>
      </button>
      <img class="car" alt="Voiture" style="" src="./assets/off-road.svg" />
      <button class="arrow-button">
        <img src="./assets/arrow.svg" height="50"/>
        </button>
    </div>
    <SpeechBubble/>
  </div>
</template>

<script>
import SpeechBubble from './components/SpeechBubble.vue'

export default {
  name: 'App',
  components: {
    SpeechBubble
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
.car {
  width: 50%;
  max-width: 300px;
  margin: 0px 40px;
}
</style>
