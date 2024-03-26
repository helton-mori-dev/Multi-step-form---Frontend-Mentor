<template>
  <div class="container grid grid-tempate-area-main">
    <SidebarForm />
    <component :is="currentStep"></component>
    <StepPersonalInfo />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Footer from "./components/AttribuitionFooter.vue";
import SidebarForm from "./components/SidebarForm.vue";
import StepPersonalInfo from "./components/StepPersonalInfo.vue";
import StepSelectPlan from "./components/StepSelectPlan.vue";
import StepPickAddon from "@/components/StepPickAddon";
import StepSummary from "@/components/StepSummary";

export default {
  name: "App",
  components: {
    Footer,
    SidebarForm,
    StepPersonalInfo,
    StepSelectPlan,
    StepPickAddon,
    StepSummary,
  },
  computed: {
    ...mapState(["currentStep"]),
  },
  methods: {
    ...mapActions(["changeStep"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");

#app {
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eef5ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

.container {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
}

.grid {
  display: grid;
}

.grid__sidebar {
  grid-area: sidebar;
}

.grid__data {
  grid-area: data;
}

.grid__footer {
  grid-area: footer;
}

.grid-tempate-area-main {
  grid-template-areas:
    "sidebar data"
    "footer footer";
}
</style>
