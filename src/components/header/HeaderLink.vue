<script>
export default {
  name: "HeaderLink"
}
</script>

<template>
  <div class="header-link">
    <a @click="$router.push('/')" class="header-link__title" href="#">Главная</a>
  </div>
  <div class="header-link">
    <a class="header-link__title" href="#">Услуги</a>
  </div>
  <div class="header-link">
    <a class="header-link__title" href="#">Примеры работ</a>
  </div>
  <div class="header-link">
    <a class="header-link__title" href="#">Контакты</a>
  </div>
  <div class="header-link">
    <a class="header-link__title" href="#">Отзывы</a>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/header-link";
</style>