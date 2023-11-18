<script>

import {getServices} from "@/api";

export default {
  name: "Services",
  data() {
    return {
      services: [],
    }
  },
  mounted() {
    getServices().then(response => this.services = response.data)
  }
}
</script>

<template>
  <section class="our-services">
    <div class="our-services__container">
      <div class="our-services__title-div">
        <h2 class="our-services__title">Наши услуги</h2>
        <a href="#">Больше услуг</a>
      </div>
      <div class="our-services__content our-services__content_mt-42">
        <a class="router-link-active router-link-exact-active our-services__service" v-for="item in services"
           :key="item.id">
          <div class="our-services__picture">
            <img alt="service" :src="item.image">
            <!--          src="../../../assets/images/our-service.jpg"-->
          </div>
          <div class="our-services__info">
            <div class="our-services__info-title">{{ item.title }}</div>
            <div class="our-services__info-subtitle">{{ item.content }}</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
@import "@/assets/scss/home/ourServices";
</style>