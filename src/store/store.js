import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
      },
      currentStepIndex: 0,
      selectedPlan: "arcade",
      periodPlan: true, //true == monthly, false == yearly
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
      formDataIsValid: false,
    };
  },
  mutations: {
    SET_FORM_VALID(state, payload) {
      state.formDataIsValid = payload;
    },
    SET_FORM_DATA(state, payload) {
      state.formData = payload;
    },
    CHANGE_NAME(state, payload) {
      state.name = payload;
    },
    CHANGE_EMAIL(state, payload) {
      state.email = payload;
    },
    CHANGE_PHONE(state, payload) {
      state.phone = payload;
    },
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
    SET_CURRENT_STEP_INDEX(state, index) {
      state.currentStepIndex = index;
    },
  },
  actions: {
    updateStepData(context, { step, data }) {
      context.commit(step, data);
    },
    goToStep(context, index) {
      context.commit("SET_CURRENT_STEP_INDEX", index);
    },
    saveFormData({ commit }, formData) {
      console.log("formData", formData);
      commit("SET_FORM_DATA", formData);
    },
  },
});
