<template>
    <div class="car-container">
        <img class="car" @click="on_click" :class="state_class" alt="Voiture" style="" src="../assets/off-road.svg" />
    </div>
</template>

<script>
export default {
    computed: {
        state_class: function(){
            return {
                "is-surprised": this.state === "surprised",
                "is-angry": this.state === "angry"
            }
        }
    },
    props: ["state", "on_click"]
}
</script>

<style scoped>
.car-container {
    margin: 0px 40px;
    width: 50%;
    max-width: 300px;
}

.car {
    width: 100%;
}

@keyframes surprised{
    0% {transform: scale(0.8)}
    25% {transform: scale(1.4)}
    50% {transform: scale(0.9)}
    75% {transform: scale(1.0)}
}

@keyframes angry{
    0% {transform: rotate(-5deg)}
    50% {transform: rotate(5deg)}
    100% {transform: rotate(-5deg)}
}

.car.is-surprised {
    animation: surprised 0.5s ease-in-out 0s 1 forwards;
}

.car.is-angry {
    animation: angry 0.2s ease-in-out 0s infinite forwards;
}
</style>