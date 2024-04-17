<template>
    <div class="container">
        <div class="main-content">
            <div class="summary">
                <!-- <div>头像</div> -->
                <Avatar/>
                <!-- <div>坐标</div> -->
                <Location/>
                <!-- <div>总结</div> -->
                <Labels/>
                <!-- <div>release</div> -->
                <RoadMap/>
            </div>
            <div class="info">
                <!-- <div>职业及个人描述</div> -->
                <BriefIntro/>
                <!-- <div>社交媒体链接区</div> -->
                <SocialMedia/>
                <ShowMe/>
            </div>
        </div>

        <div class="footer">
            底部组件
        </div>
    </div>
</template>

<script setup lang="ts" name="App">
    import Avatar from '@/components/Avatar/index.vue'
    import Labels from '@/components/Labels/index.vue'
    import Location from '@/components/Location/index.vue'
    import RoadMap from '@/components/RoadMap/index.vue'
    import BriefIntro from '@/components/BriefIntro/index.vue'
    import SocialMedia from '@/components/SocialMedia/index.vue'
    import ShowMe from '@/components/ShowMe/index.vue'

</script>


<style scoped>
.container {
    margin: auto;
    width: 1280px;
}

.main-content {
    border: dashed skyblue 5px;
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
}

.summary {
    border: dashed purple 5px;
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.info {
    border: dashed purple 5px;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3%;
    padding: 10px 0;
    border: solid grey 5px;
    text-align: center;
}
</style>
