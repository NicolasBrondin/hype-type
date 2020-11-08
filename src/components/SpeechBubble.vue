<template>
    <div class="bubble-container">
        Je suis la vieille voiture de ton oncle !
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .bubble-container {
        position: relative;
        display: inline-block;
        width: 400px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
        margin-top: 40px;
        background: #3498db;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-family: Roboto;
    }

    .bubble-container::before {
        position: absolute;
        content: "";
        top: -10px;
        left: calc(50% + 60px);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #3498db transparent;
    }
</style>