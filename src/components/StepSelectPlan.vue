<template>
  <div class="content">
    <h1 class="content__title">Select your plan</h1>
    <h2 class="content__subtitle">
      You have the option of monthly or yearly billing.
    </h2>
    <form>
      <div class="select-plan">
        <label class="select-plan__option" for="arcade">
          <input
            type="radio"
            name="plan"
            value="arcade"
            id="arcade"
            v-model="type"
          />
          <label for="arcade">Arcade <span class="price">$9/mo</span></label>
          <span class="benefit">2 months free</span>
        </label>
        <label class="select-plan__option" for="advanced">
          <input
            type="radio"
            name="plan"
            value="advanced"
            id="advanced"
            v-model="type"
          />
          <label for="advanced"
            >Advanced <span class="price">$12/mo</span></label
          >
          <span class="benefit">2 months free</span>
        </label>
        <label class="select-plan__option" for="pro">
          <input type="radio" name="plan" value="pro" id="pro" v-model="type" />
          <label for="pro">Pro <span class="price">$15/mo</span></label>
          <span class="benefit">2 months free</span>
        </label>
      </div>
      <div class="select__period">
        <span class="period period__monthly checked">Monthly</span>
        <label class="period__switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span class="period period__yearly">Yearly</span>
      </div>
      <button @click.prevent="refreshPlanData()">push</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "StepSelectPlan",
  data() {
    return { type: "arcade", period: "monthly" };
  },
  computed: {
    ...mapState([""]),
  },
  methods: {
    ...mapMutations(["PUSH_PLAN_DATA"]),
    refreshPlanData() {
      this.PUSH_PLAN_DATA({
        plan: this.type,
        period: this.period,
      });
    },
  },
};
</script>

<style scoped>
.select-plan {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  margin-bottom: 2rem;
}

.select-plan__option {
  box-shadow: 0 0 0 1px var(--CoolGray);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--DarkBlue);
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s all ease;
}

.select-plan__option.selected {
  background-color: var(--Magnolia);
}

.select-plan__option:hover {
  box-shadow: 0 0 0 1px var(--DarkBlue);
}

.select-plan__option label {
  display: grid;
  align-items: start;
  position: relative;
  cursor: pointer;
}

.select-plan__option label::before {
  margin-bottom: 3rem;
}

.select-plan__option label[for="arcade"]::before {
  content: url(../assets/images/icon-arcade.svg);
}

.select-plan__option label[for="advanced"]::before {
  content: url(../assets/images/icon-advanced.svg);
}

.select-plan__option label[for="pro"]::before {
  content: url(../assets/images/icon-pro.svg);
}

.select-plan__option span {
  display: block;
  font-weight: 400;
  margin-top: 8px;
  color: var(--CoolGray);
}

.select-plan__option .benefit {
  color: var(--DarkBlue);
  font-size: 0.9rem;
  display: none;
}

.select-plan__option input {
  /* display: none; */
}

.select__period {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr 2fr;
  justify-content: center;
  align-items: center;
}

.period {
  color: var(--LightGray);
  font-weight: 600;
}

.period.checked {
  color: var(--DarkBlue);
}

.period__switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  justify-self: center;
}

.period__monthly {
  justify-self: end;
}

.period__switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--DarkBlue);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider:before {
  transform: translateX(16px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 100%;
}
</style>
