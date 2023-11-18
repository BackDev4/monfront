<script>
import HeaderLink from "@/components/header/HeaderLink.vue";

export default {
  name: "Header",
  components: {HeaderLink}
}
</script>

<template>
  <header class="header" ref="header">
    <div class="container">
      <nav class="header__nav">
        <HeaderLink></HeaderLink>
      </nav>
    </div>
  </header>


</template>

<style scoped lang="scss">
@import "@/assets/scss/header";
</style>