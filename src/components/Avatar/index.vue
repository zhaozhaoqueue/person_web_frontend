<template>
    <div class="avatar"></div>
</template>

<script setup lang='ts' name="Avatar">

</script>
<style scoped>
    .avatar {
        background-image: url('../../assets/avatar_1.jpeg');
        background-repeat: no-repeat;
        background-position: center;
        width: 180px;
        height: 180px;
        margin: 20px;
        border: 1px solid pink;
        background-size: 200px;
        border-radius: 100px;
        transition: 0.3s linear;
    }
    .avatar:hover {
        box-shadow: 0 0 30px red;
    }

</style>