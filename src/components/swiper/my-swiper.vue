<template>
    <div>
        <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination"; 
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Autoplay,Navigation,Pagination,Scrollbar,
} from "swiper/modules";


const modules = [Autoplay, Pagination, Navigation, Scrollbar];
</script>

<style lang="scss" scoped>

</style>