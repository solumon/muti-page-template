<template>
    <div id="app">
        <div>HELLO 目录页</div>
        <div class="img-test">
            <img
                class="gif"
                src="./assets/test.gif"
                alt=""
            >
            <img
                class="jpg"
                src="./assets/test.jpg"
                alt=""
            >
            <img
                class="png"
                src="./assets/test.png"
                alt=""
            >
        </div>
        <div class="media-test">
            <audio
                class="mp3"
                src="./assets/test.mp3"
                controls
            />
            <audio
                controls
                :src="src"
            >
                <video
                    src="./assets/test.mp4"
                    controls
                />
            </audio>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        src() {
            return './8A6800CDGB2358645XXDFH/media/test.mp3'
        }
    },
    mounted() {
        // console.log('页面创建了')
    }
}
</script>

<style lang="scss">
.img-test {
    position: relative;
    display: flex;
    flex-direction: column;
    user-select: none;

    .gif {
        width: 300px;
        height: 300px;
    }

    .jpg,
    .png {
        width: 500px;
        height: 300px;
    }
}

.media-test {
    display: flex;
    flex-direction: column;

    video {
        width: 600px;
        height: 400px;
    }
}

</style>
