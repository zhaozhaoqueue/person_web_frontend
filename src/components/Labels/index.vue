<template>
    <div class="content">
        <div>label-a</div>
        <div>label-b</div>
        <div>label-c</div>
        <div>label-d</div>
        <div>label-e</div>
    </div>
</template>

<script setup lang='ts' name="Labels">

</script>
<style scoped>
    .content {
        border: solid skyblue 1px;
        height: 60px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>