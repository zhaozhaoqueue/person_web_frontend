<template>
    <div class="container">
        <div class="bg"></div>
        <div class="content">
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
    height: 100vh;
}

.bg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url('./assets/background.jpg');
    background-size: cover;
    backdrop-filter: blur(5px);
    opacity: 0.5;
    background-attachment: fixed;
}

.content {
    border: dashed skyblue 5px;
    width: 80%;
    height: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;
}

.summary {
    border: dashed purple 5px;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.info {
    border: dashed purple 5px;
    width: 63%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
