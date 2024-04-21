<template>
    <div class="navigator">
        <div @click="showTech"  id="tech" :class="{active: is_active('tech')}">technical</div>
        <div @click="showMemories"  id="mem" :class="{active: is_active('mem')}">memories</div>
    </div>
    <RouterView class="content"></RouterView>
</template>

<script setup lang='ts' name="ShowMe">
    import {ref} from 'vue'
    import { useRouter, RouterView } from 'vue-router'
    const router = useRouter()

    let active_ele = ref('tech')

    function showTech() {
        router.push({
            name: 'technical'
        })
        active_ele.value = 'tech'
    }

    function showMemories() {
        router.push({
            name: 'memories'
        })
        active_ele.value = 'mem'
    }

    function is_active(ele_id: string){
        if (ele_id == active_ele.value){
            return 'active'
        }
    }

</script>
<style scoped>
.navigator {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-self: flex-start;

    div {
        margin-left: 20px;
        border: solid 1px grey;
        padding: 10px;
        border-radius: 5px;
    }

    div:hover {
        cursor: pointer;
    }
}
.content{
    height: 500px;
    width: 100%;
    margin-top: 50px;
}

.active {
    background-color: green;
}

</style>