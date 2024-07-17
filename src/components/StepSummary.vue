<template>
  <div class="content">
    <h1 class="content__title">Finishing up</h1>
    <h2 class="content__subtitle">
      Double-check everything looks OK before confirming.
    </h2>

    <div class="summary">
      <div class="summary__plan">
        <h3 class="summary__plan-title">
          {{ selectedPlan }} ({{ periodPlan ? "Monthly" : "Yearly" }})
        </h3>
        <span class="summary__plan-select">
          <a href="#" class="summary__plan-button">Change</a>
          <span class="summary__plan-value">
            {{ planPrice }}
          </span>
        </span>
      </div>
      <div class="summary__addon">
        <div class="summary__addon-online" v-if="onlineService">
          <div class="summary__addon-line">
            <span class="summary__addon-label">Online Service</span
            ><span class="summary__addon-value">{{
              periodPlan ? `$${onlineMonth}/mo` : `$${onlineYear}/yr`
            }}</span>
          </div>
        </div>
        <div class="summary__addon-storage" v-if="largerStorage">
          <div class="summary__addon-line">
            <span class="summary__addon-label">Larger Storage</span>
            <span class="summary__addon-value">{{
              periodPlan ? `$${storageMonth}/mo` : `$${storageYear}/yr`
            }}</span>
          </div>
        </div>
        <div class="summary__addon-profile" v-if="customizableProfile">
          <div class="summary__addon-line">
            <span class="summary__addon-label">Customizable Profile</span>
            <span class="summary__addon-value"
              >{{
                periodPlan
                  ? `$${customizableMonth}/mo`
                  : `$${customizableYear}/yr`
              }}
            </span>
          </div>
        </div>
      </div>
      <div class="summary__total">
        <div class="summary__total-line">
          <span class="summary__total-label"
            >Total (per {{ periodPlan ? "month" : "year" }})</span
          >
          <span class="summary__total-value"
            >+{{ summaryTotal }}{{ periodPlan ? "mo" : "yr" }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "StepSummary",
  data() {
    return {
      arcadeMonth: 9,
      arcadeYear: 90,
      advancedMonth: 12,
      advancedYear: 120,
      proMonth: 15,
      proYear: 150,
      onlineMonth: 1,
      onlineYear: 10,
      storageMonth: 2,
      storageYear: 20,
      customizableMonth: 2,
      customizableYear: 20,
    };
  },
  computed: {
    ...mapState([
      "selectedPlan",
      "periodPlan",
      "onlineService",
      "largerStorage",
      "customizableProfile",
    ]),
    summaryTotal() {
      let total = 0;
      switch (this.selectedPlan) {
        case "arcade":
          total += this.periodPlan ? this.arcadeMonth : this.arcadeYear;

          break;

        case "advanced":
          total += this.periodPlan ? this.advancedMonth : this.advancedYear;

          break;

        case "pro":
          total += this.periodPlan ? this.proMonth : this.proYear;
          break;
      }

      if (this.onlineService) {
        total += this.periodPlan ? this.onlineMonth : this.onlineYear;
      }

      if (this.largerStorage) {
        total += this.periodPlan ? this.storageMonth : this.storageYear;
      }

      if (this.customizableProfile) {
        total += this.periodPlan ? this.storageMonth : this.storageYear;
      }
      return total;
    },
    planPrice() {
      const period = this.periodPlan ? "mo" : "yr";
      let price = 0;

      switch (this.selectedPlan) {
        case "arcade":
          price = this.periodPlan ? this.arcadeMonth : this.arcadeYear;
          break;
        case "advanced":
          price = this.periodPlan ? this.advancedMonth : this.advancedYear;
          break;
        case "pro":
          price = this.periodPlan ? this.proMonth : this.proYear;
          break;
      }

      return `$${price}/${period}`;
    },
  },
};
</script>

<style scoped>
.summary {
  padding: 1rem 1.5rem;
}

.summary__plan {
  border-bottom: 1px solid var(--LightGray);
}

.summary__plan-title {
  text-transform: capitalize;
  color: var(--DarkBlue);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.summary__plan-select {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1.5rem;
}

.summary__plan-button {
  color: var(--CoolGray);
}

.summary__plan-value {
  justify-self: end;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--DarkBlue);
  margin-top: -20px;
}

.summary__addon {
  margin-top: 1.25rem;
}

.summary__addon-line {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1.25rem;
}

.summary__addon-label,
.summary__total {
  color: var(--CoolGray);
}

.summary__addon-value {
  justify-self: end;
  color: var(--DarkBlue);
}

.summary__total-line {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
}
.summary__total-value {
  justify-self: end;
  color: var(--PurplishBlue);
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
