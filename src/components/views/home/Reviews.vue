<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import {getReviews} from "@/api";
import ReviewModal from "@/components/views/home/ReviewModal.vue";

export default {
  components: {
    ReviewModal,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleScrollToReviews() {
      if (this.$refs.reviewsBlock) {
        this.$refs.reviewsBlock.scrollIntoView({behavior: 'smooth'});
      }
    },
  },
  data() {
    return {
      isModalVisible: false,
      reviews: [],
      reviewsBlock: null,
    }
  },
  computed: {
    getCountSlides() {
      switch (this.classes) {
        case 'little':
          if (this.pageWidth < 850) {
            return 1
          }
          if (this.pageWidth < 950) {
            return 1.25
          } else if (this.pageWidth < 1150) {
            return 1.25
          }

          return 1.5
        default:
          if (this.pageWidth < 850) {
            return 1
          }
          if (this.pageWidth < 950) {
            return 1.25
          } else if (this.pageWidth < 1150) {
            return 1.5
          }

          return 1.85
      }
    },
  },
 mounted() {
    getReviews().then(response => this.reviews = response.data)
  }
}

</script>
<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews__title reviews__title_mb-42">
        <h1>Отзывы</h1>
        <div class="reviews__title-right">
          <a @click="openModal">Добавить отзыв</a>
          <router-link to="/reviews">Больше отзывов</router-link>
        </div>
      </div>
    </div>
    <div>
      <review-modal :show="isModalVisible" @close="closeModal">
      </review-modal>
    </div>

    <Carousel class="reviews__carousel reviews__carousel_mt-40" ref="carousel" :autoplay="3000" :transition="500" :items-to-show="getCountSlides" :wrap-around="true">
      <Slide v-for="review in reviews" :key="review.id">
        <div class="reviews__item">
          <div class="reviews__up">
            <div class="avatar">
              <img
                  src="https://avatars.mds.yandex.net/i?id=93f81d25571553dc23a6be83f9361f9a5f988968-9741045-images-thumbs&n=13"
                  alt="">
            </div>
            <div class="reviews__description">
              <div class="reviews__quotes reviews__quotes_down">
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M29.4633 37.5398C30.6955 37.0714 32.6186 36.0424 34.0102 35.107C35.6751 33.9878 37.9626 31.8533 39.1018 30.3559C41.1479 27.6664 42.2184 24.9309 42.8334 20.819C43.2471 18.054 43.2765 17.352 43.3147 9.3265C43.3553 0.791172 43.3923 1.32692 42.7159 0.650674C42.0634 -0.00199294 42.4494 0.027342 34.5006 0.0273413C26.8234 0.0273406 27.0921 0.0116755 26.4579 0.495509C26.2959 0.619009 26.0621 0.892341 25.9383 1.10284L25.7133 1.48567L25.6907 8.75775L25.668 16.0298L25.8481 16.4484C26.0595 16.9398 26.6398 17.4875 27.078 17.6093C27.2577 17.6591 28.7549 17.6932 30.7758 17.6935L34.1716 17.694L34.1716 18.218C34.1716 19.4111 33.8314 21.4358 33.4056 22.7773C32.8395 24.5608 31.9758 25.9988 30.7246 27.2407C29.7039 28.254 28.5219 29.0587 26.8603 29.8717C25.6453 30.4661 25.463 30.6136 25.1292 31.2728C25.0408 31.4474 24.9819 31.7586 24.9789 32.0662C24.9748 32.5114 25.0303 32.6922 25.4407 33.5707C27.0025 36.9132 27.1303 37.1253 27.7827 37.4582C28.2611 37.7022 28.9481 37.7356 29.4633 37.5398ZM4.8206 37.6009C5.28244 37.5157 7.45402 36.453 8.62994 35.7368C12.1974 33.5641 14.9822 30.6532 16.6118 27.3934C17.8034 25.0098 18.3936 22.602 18.8093 18.4282C18.9198 17.319 18.9514 15.6606 18.9813 9.4105C19.0225 0.781505 19.0599 1.32792 18.3826 0.650671C17.73 -0.00191171 18.1156 0.0273399 10.1716 0.0273392C2.42852 0.0273385 2.69994 0.0105033 2.07027 0.529503C1.90511 0.66567 1.67286 0.972003 1.55411 1.21025L1.33827 1.64342L1.3401 8.85617C1.34194 15.9323 1.34519 16.0761 1.51169 16.444C1.70677 16.8751 2.00436 17.2108 2.42161 17.4707C2.70652 17.6482 2.79602 17.6533 6.29544 17.694L9.8776 17.7357L9.85219 18.4023C9.78644 20.1242 9.37077 22.1735 8.79344 23.6212C8.19986 25.1097 7.48894 26.1954 6.41011 27.2611C5.42827 28.2309 4.42585 28.922 2.85235 29.7137C1.34394 30.4726 0.922352 30.8223 0.751602 31.4563C0.549518 32.2067 0.65594 32.5848 1.65052 34.6523C2.20561 35.8062 2.69819 36.7147 2.88819 36.935C3.37085 37.4947 4.07719 37.7382 4.8206 37.6009Z"
                        fill="black"/>
                </svg>
              </div>
              <span v-html="review?.content"/>
              <div class="reviews__quotes reviews__quotes_up">
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M29.4633 37.5398C30.6955 37.0714 32.6186 36.0424 34.0102 35.107C35.6751 33.9878 37.9626 31.8533 39.1018 30.3559C41.1479 27.6664 42.2184 24.9309 42.8334 20.819C43.2471 18.054 43.2765 17.352 43.3147 9.3265C43.3553 0.791172 43.3923 1.32692 42.7159 0.650674C42.0634 -0.00199294 42.4494 0.027342 34.5006 0.0273413C26.8234 0.0273406 27.0921 0.0116755 26.4579 0.495509C26.2959 0.619009 26.0621 0.892341 25.9383 1.10284L25.7133 1.48567L25.6907 8.75775L25.668 16.0298L25.8481 16.4484C26.0595 16.9398 26.6398 17.4875 27.078 17.6093C27.2577 17.6591 28.7549 17.6932 30.7758 17.6935L34.1716 17.694L34.1716 18.218C34.1716 19.4111 33.8314 21.4358 33.4056 22.7773C32.8395 24.5608 31.9758 25.9988 30.7246 27.2407C29.7039 28.254 28.5219 29.0587 26.8603 29.8717C25.6453 30.4661 25.463 30.6136 25.1292 31.2728C25.0408 31.4474 24.9819 31.7586 24.9789 32.0662C24.9748 32.5114 25.0303 32.6922 25.4407 33.5707C27.0025 36.9132 27.1303 37.1253 27.7827 37.4582C28.2611 37.7022 28.9481 37.7356 29.4633 37.5398ZM4.8206 37.6009C5.28244 37.5157 7.45402 36.453 8.62994 35.7368C12.1974 33.5641 14.9822 30.6532 16.6118 27.3934C17.8034 25.0098 18.3936 22.602 18.8093 18.4282C18.9198 17.319 18.9514 15.6606 18.9813 9.4105C19.0225 0.781505 19.0599 1.32792 18.3826 0.650671C17.73 -0.00191171 18.1156 0.0273399 10.1716 0.0273392C2.42852 0.0273385 2.69994 0.0105033 2.07027 0.529503C1.90511 0.66567 1.67286 0.972003 1.55411 1.21025L1.33827 1.64342L1.3401 8.85617C1.34194 15.9323 1.34519 16.0761 1.51169 16.444C1.70677 16.8751 2.00436 17.2108 2.42161 17.4707C2.70652 17.6482 2.79602 17.6533 6.29544 17.694L9.8776 17.7357L9.85219 18.4023C9.78644 20.1242 9.37077 22.1735 8.79344 23.6212C8.19986 25.1097 7.48894 26.1954 6.41011 27.2611C5.42827 28.2309 4.42585 28.922 2.85235 29.7137C1.34394 30.4726 0.922352 30.8223 0.751602 31.4563C0.549518 32.2067 0.65594 32.5848 1.65052 34.6523C2.20561 35.8062 2.69819 36.7147 2.88819 36.935C3.37085 37.4947 4.07719 37.7382 4.8206 37.6009Z"
                        fill="black"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="reviews__down">
            <div class="reviews__down-left">
              <div class="reviews__name">{{ review?.name }}</div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination/>
      </template>
    </Carousel>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/home/_reviews";
</style>
