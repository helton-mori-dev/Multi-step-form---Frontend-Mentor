import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      formData: {
        personalInfo: {},
        selectedPlan: [],
        pickedAddons: [],
      },
      currentStepIndex: 2,
      selectedPlan: "arcade",
      periodPlan: true, //false == monthly, true == yearly
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    };
  },
  mutations: {
    // updataPersonalInfo(state, info) {
    //   state.formData.personalInfo = info;
    // },
    // selectPlan(state, plan) {
    //   state.formData.selectedPlan = plan;
    // },
    // pickAddons(state, addons) {
    //   state.formData.pickedAddons = addons;
    // },
    setCurrentStepIndex(state, index) {
      state.currentStepIndex = index;
    },
  },
  actions: {
    updateStepData({ commit }, { step, data }) {
      commit(step, data);
    },
    goToStep({ commit }, index) {
      commit("setCurrentStepIndex", index);
    },
  },
});
