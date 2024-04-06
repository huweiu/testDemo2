<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <swiperCom/> -->
    <dialogCom/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import swiperCom from '@/components/swiper/index.vue'
import dialogCom from '@/components/dialog/index.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    swiperCom,
    dialogCom
  }
}
</script>
