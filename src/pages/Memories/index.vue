<template>
    <div class="container">
        <input type="radio" name="slide" id="i1" checked>
        <label for="i1" class="card">
            <div class="index">1</div>
            <div class="desc">desc desc desc desc desc</div>
        </label>
        <input type="radio" name="slide" id="i2" checked>
        <label for="i2" class="card">
            <div class="index">2</div>
            <div class="desc">desc</div>
        </label>
        <input type="radio" name="slide" id="i3" checked>
        <label for="i3" class="card">
            <div class="index">3</div>
            <div class="desc">desc</div>
        </label>
        <input type="radio" name="slide" id="i4" checked>
        <label for="i4" class="card">
            <div class="index">4</div>
            <div class="desc">desc</div>
        </label>
        <input type="radio" name="slide" id="i5" checked>
        <label for="i5" class="card">
            <div class="index">5</div>
            <div class="desc">desc</div>
        </label>
    </div>
</template>

<script setup lang='ts' name="Memories">

</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .card {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        width: 70px;
        height: 500px;
        border-radius: 100px;
        border: 1px solid red;
        overflow: hidden;
    }

    .card .index {
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: grey;
        line-height: 50px;
    }
    input {
        display: none;
    }

    input:checked+label{
        width: 500px;
    }
</style>