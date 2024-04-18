<template>
    <div class="content">
        <div>篮球</div>
        <div>篮球</div>
        <div>篮球</div>
        <div>篮球</div>
        <div>篮球</div>
    </div>
</template>

<script setup lang='ts' name="Labels">

</script>
<style scoped>
    .content {
        /* border: solid skyblue 1px; */
        background-color: #00000038;
        border-radius: 10px;
        width: 180px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 10px;
        padding: 10px 0;
    }
    .content div {
        background-color: #00000038;
        border-radius: 10px;
        width: 40px;
        font-size: 14px;
        margin: 10px 10px;
    }

</style>