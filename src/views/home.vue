<template>
    <div class="content">
        <div class="decoration"></div>
        <div class="gallery square-thumbs half-bottom">
            
        </div>
    </div>
</template>
<script>
    import { carousel, slider } from 'vue-strap'

    export default {
        ready () {
            console.log('home')
        },
        components: {
            carousel,
            slider
        }
    }
</script>
<style>
    .gallery .preload-image {
        display: block;
    }
    .swiper-wrapper {
        transform: translate3d(-640px, 0px, 0px);
        transition-duration: 300ms;
    }
    .swiper-slide {
        width: 320px;
}
</style>
