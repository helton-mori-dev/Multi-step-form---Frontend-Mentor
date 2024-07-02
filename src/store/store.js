import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      formData: {
        personalInfo: {},
        selectedPlan: [],
        pickedAddons: [],
      },
      currentStepIndex: 1,
      selectedPlan: "arcade",
      periodPlan: true, //true == monthly, false == yearly
      onlineService: true,
      largerStorage: true,
      // customizableProfile: true,
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

    PUSH_PLAN_DATA(state, payload) {
      state.selectedPlan = payload.plan;
      state.periodPlan = payload.period;
    },
    PUSH_ADDONS_DATA(state, payload) {
      state.onlineService = payload.online;
      state.largerStorage = payload.storage;
      state.customizableProfile = payload.profile;
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
