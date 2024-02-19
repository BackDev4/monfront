<script>

import { getServices } from "@/api";

export default {
  name: "Services",
  data() {
    return {
      services: [],
      currentPage: 1,
      totalPages: 0
    };
  },
  methods: {
    async loadServices(page) {
      try {
        const response = await getServices(page);
        this.services = response.data; // Используем массив данных напрямую
        this.currentPage = response.current_page;
        this.totalPages = response.last_page;
      } catch (error) {
        console.error('Ошибка загрузки услуг:', error);
      }
    },
    loadPreviousPage() {
      if (this.currentPage > 1) {
        this.loadServices(this.currentPage - 1);
      }
    },
    loadNextPage() {
      if (this.currentPage < this.totalPages) {
        this.loadServices(this.currentPage + 1);
      }
    }
  },
  mounted() {
    this.loadServices(this.currentPage);
  }
};
</script>

<template>
  <section class="our-services">
    <div class="our-services__container">
      <div class="our-services__title-div">
        <h2 class="our-services__title">Наши услуги</h2>
      </div>
      <div class="our-services__content our-services__content_mt-42">
        <!-- Используем услуги из массива services -->
        <div v-for="item in services" :key="item.id" class="our-services__service">
          <div class="our-services__picture">
            <img :src="item.image" alt="service">
          </div>
          <div class="our-services__info">
            <div class="our-services__info-title">{{ item.title }}</div>
            <div class="our-services__info-subtitle">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="loadPreviousPage" :disabled="currentPage === 1">
        <i class="fas fa-chevron-left"></i> <!-- Иконка "назад" -->
      </button>
      <span>Страница {{ currentPage }} из {{ totalPages }}</span>
      <button @click="loadNextPage" :disabled="currentPage === totalPages">
        <i class="fas fa-chevron-right"></i> <!-- Иконка "дальше" -->
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home/ourServices";
</style>
