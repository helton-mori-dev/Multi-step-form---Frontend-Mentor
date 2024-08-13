<template>
  <div class="content">
    <h1 class="content__title">Personal info</h1>
    <h2 class="content__subtitle">
      Please provide your name, email address, and phone number.
    </h2>
    <form
      action="#"
      method="post"
      class="content__form"
      @submit.prevent="validateForm"
      novalidate
    >
      <label for="name"
        >Name
        <span v-if="errorMsg.name" class="input__error">{{
          errorMsg.name
        }}</span>
      </label>

      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Name e.g. Stephen King"
        v-model="formName"
        @input="clearErrorMsg()"
      />

      <label for="email"
        >Email address
        <span v-if="errorMsg.email" class="input__error">{{
          errorMsg.email
        }}</span>
      </label>

      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="e.g. stephenking@lorem.com"
        v-model="formEmail"
      />

      <label for="phone"
        >Phone Number<span v-if="errorMsg.phone" class="input__error">{{
          errorMsg.phone
        }}</span></label
      >

      <input
        type="tel"
        id="phone"
        name="phone"
        required
        placeholder="e.g. +1 234 567 890"
        v-model="formPhone"
      />

      <!-- <input
        type="button"
        value="Next Step"
        class="input__submit"
        @click="submitStep"
      /> -->
    </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "StepPersonalInfo",
  props: ["initialData"],
  data() {
    return {
      errorMsg: {
        name: "",
        email: "",
        phone: "",
      },
      form: {
        name: "",
        email: "",
        phone: "",
      },
      personalInfo: this.initialData || {},
    };
  },
  computed: {
    ...mapState(["name", "email", "phone"]),
    formName: {
      get() {
        return this.name;
      },
      set(value) {
        this.CHANGE_NAME(value);
      },
    },
    formEmail: {
      get() {
        return this.email;
      },
      set(value) {
        this.CHANGE_EMAIL(value);
      },
    },
    formPhone: {
      get() {
        return this.phone;
      },
      set(value) {
        this.CHANGE_PHONE(value);
      },
    },
  },
  methods: {
    validateForm() {
      // let isValid = true;
      this.errorMsg.name = this.name ? "" : "This field is required";
      this.errorMsg.email = this.email.match(/^[^@]+@[^@]+\.[^@]+$/)
        ? ""
        : "The email field is not valid";
      this.errorMsg.phone = this.phone.match(/^\d{10,11}$/)
        ? ""
        : "The phone number is not valid";

      // isValid =
      //   !this.errorMsg.name && !this.errorMsg.email && !this.errorMsg.phone;

      // if (isValid) {
      //   this.nextStep();
      // }
    },
    ...mapActions(["changeStep"]),
    clearErrorMsg() {},
    nextStep() {
      this.changeStep("StepSelectPlan");
    },
    submitStep() {
      this.$emit("update-step", {
        step: "updatePersonalInfo",
        data: this.personalInfo,
      });
    },
    ...mapMutations(["CHANGE_NAME", "CHANGE_PHONE", "CHANGE_EMAIL"]),
  },
};
</script>

<style scoped>
.content__form {
  display: flex;
  flex-direction: column;
}

.content__form label {
  font-weight: 500;
  color: var(--DarkBlue);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.content__form input:not(input[type="submit"]) {
  border-radius: 5px;
  border-color: var(--LightGray);
  height: 3rem;
  border-style: solid;
  text-indent: 1rem;
  margin-bottom: 1.25rem;
  transition: 0.3s all ease;
  color: var(--DarkBlue);
  font-weight: 600;
  font-size: 1rem;
}

.content__form input:not(input[type="submit"]):hover {
  border-color: var(--DarkBlue);
}

.content__form label {
  pointer-events: none;
  position: relative;
}

.content__form input[type="submit"]:hover {
  opacity: 0.7;
}

.input__error {
  color: #f00;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 700;
}
</style>
