<template>
    <div class="navigator">
        <div @click="showTech" class="item">technical</div>
        <div @click="showMemories" class="item">memories</div>
    </div>
    <RouterView class="content"></RouterView>
</template>

<script setup lang='ts' name="ShowMe">
    import { useRouter, RouterView } from 'vue-router'
    const router = useRouter()

    function showTech() {
        router.push({
            name: 'technical'
        })
    }

    function showMemories() {
        router.push({
            name: 'memories'
        })
    }

</script>
<style scoped>
.navigator {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-self: flex-start;

    .item {
        margin-left: 20px;
        background-color: grey;
        padding: 10px;
        border-radius: 5px;
    }
}
.content{
    height: 500px;
    width: 100%;
    margin-top: 50px;
}
</style>