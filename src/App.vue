<template>
  <Footer />
</template>

<script>
import Footer from "./components/AttribuitionFooter.vue";
export default {
  name: "App",
  components: { Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");

#app {
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --CoolGray: hsl(231, 11%, 63%);
  --LightGray: hsl(229, 24%, 87%);
  --Magnolia: hsl(217, 100%, 97%);
  --Alabaster: hsl(231, 100%, 99%);
  --White: hsl(0, 0%, 100%);
  --DarkBlue: hsl(213, 96%, 18%);
  --PurplishBlue: hsl(243, 100%, 62%);
  --PastelBlue: hsl(228, 100%, 84%);
  --LightBlue: hsl(206, 94%, 87%);
  --StrawberryRed: hsl(354, 84%, 57%);
}
</style>
