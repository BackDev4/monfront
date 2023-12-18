<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination} from 'vue3-carousel';
import {getGallery} from "@/api";


export default {
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  props: {
    pageWidth: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
      // 'small'
    },
    title: {
      type: String,
      default: 'Примеры работ'
    }
  },
  data() {
    return {
      gallery: [],
    }
  },
  computed: {
    getCountSlides() {
      const getCount = (firstNum, secondNum) => {
        return !this.type ? firstNum : this.type === 'small' ? secondNum : 0
      }

      const getWidthValid = (firstNum, secondNum) => {
        return this.pageWidth < firstNum || this.pageWidth < secondNum && this.type === 'small'
      }

      if (this.pageWidth < 598) {
        return 1
      } else if (getWidthValid(900, 1180)) {
        return 2
      } else if (this.pageWidth < 1220) {
        return 3
      }

      return getCount(4, 3)
    }
  },
  mounted() {
    getGallery().then(response => this.gallery = response.data)
  }
}
</script>

<template>
  <div class="our-certificates">
    <h2 class="our-certificates__title" v-if="title">{{ title }}</h2>
    <div class="our-certificates__content our-certificates__content_mt-50" v-if="gallery?.length">
      <Carousel class="our-certificates__carousel" ref="carousel" :items-to-show="getCountSlides" :autoplay="3000" :transition="500" :wrap-around="true">
        <Slide v-for="item in gallery" :key="item.id">
          <div class="our-certificates__item">
            <img alt="certificate" :src="item.image"> 
          </div>
        </Slide>
        <template #addons>
          <Pagination/>
        </template>
      </Carousel>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "@/assets/scss/home/_gallery";
</style>