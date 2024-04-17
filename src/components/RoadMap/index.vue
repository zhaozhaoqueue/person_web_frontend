<template>
    <ul id="line">
        <li>
            <div class="bullet-point"></div>
            <div class="log">
                <div class="msg">test</div>
                <div class="time">2024-1-1</div>
            </div>
        </li>
        <li>
            <div class="bullet-point"></div>
            <div class="log">
                <div class="msg">test</div>
                <div class="time">2024-1-1</div>
            </div>
        </li>
        <li>
            <div class="bullet-point"></div>
            <div class="log">
                <div class="msg">test</div>
                <div class="time">2024-1-1</div>
            </div>
        </li>
        <li>
            <div class="bullet-point"></div>
            <div class="log">
                <div class="msg">test</div>
                <div class="time">2024-1-1</div>
            </div>
        </li>
        <li>
            <div class="bullet-point"></div>
            <div class="log">
                <div class="msg">test</div>
                <div class="time">2024-1-1</div>
            </div>
        </li>
    </ul>
</template>

<script setup lang='ts' name="RoadMap">

</script>
<style scoped>
    #line {
        width: 180px;
        background-color: #00000038;
        border-radius: 10px;
        margin-top: 10px;
        padding: 20px 5px;
    }

    #line li {
        list-style: none;
        margin-left: 5px;
        border-left: 2px solid white;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin: 0 15px;
        padding-top: 5px;
        padding-left: 25px;
    }

    #line li .bullet-point {
        width: 8px;
        height: 8px;
        border-radius: 2px;
        background-color: white;
        position: absolute;
        top: 20px;
        left: -5px;
    }

    #line li:first-child .bullet-point{
        background-color: #aaffcd;
    }

    #line li .log div {
        text-align: start;
    }

</style>