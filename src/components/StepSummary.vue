<template>
  <div class="content">
    <h1 class="content__title">Finishing up</h1>
    <h2 class="content__subtitle">
      Double-check everything looks OK before confirming.
    </h2>

    <div class="summary">
      <div class="summary__plan">
        <h3 class="summary__plan-title">
          {{ $store.state.typePlan || "Arcade" }}
        </h3>
        <a href="#" class="summary__plan-button">Change</a>
      </div>
      <div class="summary__addon">
        <div class="summary__addon-online" v-if="$store.state.onlineService">
          <div class="summary__addon-line">
            <span>Online Service</span><span>+1/mo</span>
          </div>
        </div>
        <div class="summary__addon-storage" v-if="$store.state.largerStorage">
          <div class="summary__addon-line">
            <span>Larger Storage</span><span>+2/mo</span>
          </div>
        </div>
        <div
          class="summary__addon-profile"
          v-if="$store.state.customizableProfile"
        >
          <div class="summary__addon-line">
            <span>Customizable Profile</span><span>+2/mo</span>
          </div>
        </div>
      </div>
      <div class="summary__total">Total (per month/year)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepSummary",
};
</script>

<style scoped>
.summary__plan {
  border-bottom: 1px solid var(--LightGray);
}
</style>
