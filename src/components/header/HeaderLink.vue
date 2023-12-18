<script>
import router from '@/router';
import { mapMutations } from 'vuex';

export default {
  name: "HeaderLink",
  methods: {
    ...mapMutations(['SET_REF_NAME']),

    scrollTo(refName) {
      this.SET_REF_NAME(refName)
    }
  }
}

</script>

<template>
  <div class="header-link">
    <span class="header-link__title" @click="$router.push('/')">Главная</span>
  </div>
  <div class="header-link">
    <span class="header-link__title" @click="scrollTo('services')">Услуги</span>
  </div>
  <div class="header-link">
    <span class="header-link__title" @click="scrollTo('gallery')">Примеры работ</span>
  </div>
  <div class="header-link">
    <span class="header-link__title" @click="scrollTo('contacts')">Контакты</span>
  </div>
  <div class="header-link">
    <span class="header-link__title" @click="scrollTo('reviews')">Отзывы</span>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/header-link";
</style>