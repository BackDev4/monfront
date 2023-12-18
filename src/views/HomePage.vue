<script>
import IndexBlock from "@/components/views/home/IndexBlock.vue";
import Reviews from "@/components/views/home/Reviews.vue"
import Services from "@/components/views/home/Services.vue";
import Gallery from "@/components/views/home/Gallery.vue";
import Contacts from "@/components/views/home/Contacts.vue";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  components: {
    Contacts,
    Gallery,
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
  computed: {
    ...mapState(['refName']),
  },
  watch: {
    refName() {
      const element = document.querySelector(`#${this.refName}`);
      console.log('element', element)
      element.scrollIntoView({ block: 'center', behavior: 'smooth' })

    }
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  }

}
</script>

<template>
  <IndexBlock/>
  <Gallery id="gallery"/>
  <Services id="services"/>
  <Reviews id="reviews"/>
  <Contacts id="contacts"/>
</template>

<style scoped lang="scss">

</style>