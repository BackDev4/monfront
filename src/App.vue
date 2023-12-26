<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {},
  watch: {
    '$route.path'() {
      window.scrollTo({
        top: 0,
      });
    }
  }
}

</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #262626;

  &::-webkit-scrollbar {
    width: 6px;
    background: #FFFFFF;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #480c0c;
    border-radius: 6px;
  }
}

* {
  &::-webkit-scrollbar {
    width: 0;
  }
}

#app {
  min-height: 100vh;
  background: #F5F5F5;
}

ul[class],
ol[class] {
  list-style: none;
}

a {
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #262626;

  &:not([class]) {
    text-decoration-skip-ink: auto;
  }
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
  outline: none;
  border: none;
}

button {
  background: transparent;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
