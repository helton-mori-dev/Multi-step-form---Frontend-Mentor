<template>
  <div class="content">
    <h1 class="content__title">Personal info</h1>
    <h2 class="content__subtitle">
      Please provide your name, email address, and phone number.
    </h2>
    <form action="#" class="content__form">
      <template v-for="field in formFields" :key="field.id">
        <label :for="field.id">
          {{ field.label }}
          <transition name="content">
            <span v-if="errorMsg[field.name]" class="input__error">
              {{ errorMsg[field.name] }}
            </span>
          </transition>
        </label>
        <input
          :type="field.type"
          :id="field.id"
          :name="field.name"
          :placeholder="field.placeholder"
          v-model="form[field.id]"
          @blur="validateField(field.id)"
          required
        />
      </template>
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
      personalInfo: this.initialData || {},
      formFields: [
        {
          label: "Name",
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name e.g. Stephen King",
        },
        {
          label: "Email address",
          type: "email",
          id: "email",
          name: "email",
          placeholder: "e.g. stephenking@lorem.com",
        },
        {
          label: "Phone Number",
          type: "tel",
          id: "phone",
          name: "phone",
          placeholder: "e.g. +1 234 567 890",
        },
      ],
    };
  },
  computed: {
    ...mapState(["form"]),
  },
  methods: {
    ...mapActions(["changeStep", "saveFormData"]),
    ...mapMutations(["SET_FORM_VALID"]),
    validateField(field) {
      if (field === "name") {
        this.errorMsg.name = this.form.name.trim()
          ? null
          : "The name field is mandatory";
      } else if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!this.form.email.trim()) {
          this.errorMsg.email = "The email field is mandatory";
        } else if (!emailRegex.test(this.form.email)) {
          this.errorMsg.email = "The email field is invalid";
        } else {
          this.errorMsg.email = null;
        }
      } else if (field === "phone") {
        const phoneRegex = /^\+?[0-9\s]+$/;

        if (!this.form.phone.trim()) {
          this.errorMsg.phone = "The phone number is mandatory";
        } else if (!phoneRegex.test(this.form.phone)) {
          this.errorMsg.phone = "The phone number is invalid";
        } else {
          this.errorMsg.phone = null;
        }
      }

      if (!this.errorMsg.name && !this.errorMsg.email && !this.errorMsg.phone) {
        this.SET_FORM_VALID(true);
      } else {
        this.SET_FORM_VALID(false);
      }
    },
    validateAllFields() {
      this.validateField("name");
      this.validateField("email");
      this.validateField("phone");
    },
    clearErrorMsg() {
      this.errorMsg = { name: "", email: "", phone: "" };
    },
    submitStep() {
      this.clearErrorMsg();

      if (this.validateForm()) {
        this.saveFormData({
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
        });
      }

      this.SET_FORM_VALID(true);
    },
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
