import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      // formData: {
      //   personalInfo: {},
      //   selectedPlan: [],
      //   pickedAddons: [],
      // },
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
    CHANGE_PLAN(state, payload) {
      console.log("selectedPlan", payload);
      state.selectedPlan = payload;
    },
    CHANGE_PERIOD(state, payload) {
      console.log("periodPlan", payload);
      state.periodPlan = payload;
    },
    CHANGE_ONLINE(state, payload) {
      console.log("onlineChange", payload);
      state.onlineService = payload;
    },
    CHANGE_STORAGE(state, payload) {
      console.log("largerStorage", payload);
      state.largerStorage = payload;
    },
    CHANGE_PROFILE(state, payload) {
      console.log("customizableProfile", payload);
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
