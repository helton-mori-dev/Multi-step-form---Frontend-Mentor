<template>
  <div class="container grid grid-tempate-area-main">
    <SidebarForm />
    <section class="grid__data">
      <component
        :is="currentStepComponent"
        @update-step="handleUpdateStep"
      ></component>

      <div class="navigation">
        <button
          class="navigation__button back"
          v-if="currentStepIndex > 0"
          @click="previousStep"
        >
          Back
        </button>
        <button
          class="navigation__button next"
          v-if="currentStepIndex < steps.length - 1"
          @click="nextStep"
        >
          Next
        </button>
      </div>
    </section>
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
    ...mapState(["currentStepIndex"]),
    steps() {
      return [
        "StepPersonalInfo",
        "StepSelectPlan",
        "StepPickAddon",
        "StepSummary",
      ];
    },
    currentStepComponent() {
      return this.steps[this.currentStepIndex];
    },
  },
  methods: {
    ...mapActions(["goToStep", "updateStepData"]),
    nextStep() {
      this.goToStep(this.currentStepIndex + 1);
    },
    previousStep() {
      this.goToStep(this.currentStepIndex - 1);
    },
    handleUpdateStep({ step, data }) {
      this.updateStepData({ step, data });
    },
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
  display: grid;
  grid-area: data;
  grid-template-rows: 4fr 1fr;
  align-self: center;
  justify-self: center;
  max-width: 80%;
}
.grid__footer {
  grid-area: footer;
}

.grid__buttons {
  grid-area: buttons;
}

.grid-tempate-area-main {
  grid-template-areas:
    "sidebar data"
    "sidebar buttons"
    "footer footer";
  grid-template-rows: 24fr 1fr;
}

.navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "back next";
  align-items: end;
}

.navigation__button {
  background-color: var(--DarkBlue);
  color: #fff;
  border-radius: 8px;
  padding: 0.75rem 0;
  width: 110px;
  height: 42px;
  border: none;
  transition: 0.3s all ease;
  cursor: pointer;
}

.navigation__button.next {
  grid-area: next;
  justify-self: end;
}

.navigation__button.back {
  grid-area: back;
}
</style>
