<script>
import {defineComponent} from 'vue'
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {Footer, Header},
  data() {
    return {
      height: 100,
    }
  },
  methods: {
    setHeaderHeight(height) {
      this.height = height
    }
  }
})

</script>

<template>
  <div :style="`padding-top: ${height}px;`">
    <Header @set-header-height="setHeaderHeight"/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">

</style>