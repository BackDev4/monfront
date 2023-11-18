<script>
import IndexBlock from "@/components/views/home/IndexBlock.vue";
import Reviews from "@/components/views/home/Reviews.vue"
import Services from "@/components/views/home/Services.vue";

export default {
  name: "HomePage",
  components: {
    Services,
    IndexBlock,
    Reviews,
  },
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  }

}
</script>

<template>
  <IndexBlock/>
  <Services/>
  <Reviews/>
</template>

<style scoped lang="scss">

</style>