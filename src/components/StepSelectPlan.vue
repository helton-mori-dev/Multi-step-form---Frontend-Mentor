<template>
  <div class="content">
    <h1 class="content__title">Select your plan</h1>
    <h2 class="content__subtitle">
      You have the option of monthly or yearly billing.
    </h2>
    <form>
      <div class="select__plan">
        <input type="radio" name="plan" value="arcade" id="arcade" />
        <label for="arcade">Arcade <span>$9/mo</span></label>
        <input type="radio" name="plan" value="advanced" id="advanced" />
        <label for="advanced">Advanced <span>$12/mo</span></label>
        <input type="radio" name="plan" value="pro" id="pro" />
        <label for="pro">Pro <span>$15/mo</span></label>
      </div>
      <div class="select__period">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
          Monthly Yearly
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "StepSelectPlan",
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
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
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
