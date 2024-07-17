import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      // formData: {
      //   personalInfo: {},
      //   selectedPlan: [],
      //   pickedAddons: [],
      // },
      currentStepIndex: 1,
      selectedPlan: "arcade",
      periodPlan: true, //true == monthly, false == yearly
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
    CHANGE_PLAN(state, payload) {
      state.selectedPlan = payload;
    },
    CHANGE_PERIOD(state, payload) {
      state.periodPlan = payload;
    },
    CHANGE_ONLINE(state, payload) {
      state.onlineService = payload;
    },
    CHANGE_STORAGE(state, payload) {
      state.largerStorage = payload;
    },
    CHANGE_PROFILE(state, payload) {
      state.customizableProfile = payload;
    },
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
