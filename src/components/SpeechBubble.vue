<template>
    <div class="bubble-container" :style="'background-color:'+color">
        <span class="arrow"  :style="'border-color: transparent transparent '+color+' transparent'"></span>
        {{text}}
    </div>
</template>

<script>
export default {
    props: ["text", "color"]
}
</script>

<style scoped>
    .bubble-container {
        position: relative;
        display: inline-block;
        width: 400px;
        max-width: 100%;
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

    .arrow {
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