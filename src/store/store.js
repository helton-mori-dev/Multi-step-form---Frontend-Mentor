import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentStep: "StepPersonalInfo",
      plan: 1,
      frequency: 1,
      addOns: [],
    };
  },
  mutations: {
    SET_CURRENT_STEP(state, newStep) {
      state.currentStep = newStep;
    },
  },
  actions: {
    changeStep({ commit }, newStep) {
      commit("SET_CURRENT_STEP", newStep);
    },
  },
});
