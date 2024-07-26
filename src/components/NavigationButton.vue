<template>
  <div class="navigation" v-if="currentStepIndex < 4">
    <button
      class="navigation__button back"
      v-if="currentStepIndex > 0"
      @click="previousStep"
    >
      Go Back
    </button>
    <button
      class="navigation__button next"
      v-if="currentStepIndex < steps.length - 1"
      @click="nextStep"
    >
      {{ currentStepIndex == "3" ? "Confirm" : "Next Step" }}
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "NavigationButton",
  computed: {
    ...mapState(["currentStepIndex"]),
    steps() {
      return [
        "StepPersonalInfo",
        "StepSelectPlan",
        "StepPickAddon",
        "StepSummary",
        "StepFinish",
      ];
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

<style scoped>
.navigation {
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "back next";
  align-items: end;
  justify-self: center;
  width: 80%;
}

.navigation__button {
  border-radius: 8px;
  padding: 0.75rem 0;
  width: 110px;
  height: 42px;
  border: none;
  transition: 0.3s all ease;
  cursor: pointer;
  font-weight: 700;
}

.navigation__button:hover {
  opacity: 0.7;
}

.navigation__button.next {
  background-color: var(--DarkBlue);
  color: #fff;
  grid-area: next;
  justify-self: end;
}

.navigation__button.back {
  background-color: #fff;
  color: var(--CoolGray);
  grid-area: back;
}

.navigation__button.back:hover {
  color: var(--DarkBlue);
}
</style>
