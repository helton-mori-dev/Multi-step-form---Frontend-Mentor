<template>
  <div class="content">
    <h1 class="content__title">Pick add-ons</h1>
    <h2 class="content__subtitle">
      Add-ons help enhance your gaming experience.
    </h2>
    <div class="addons">
      <label class="addons__item" for="online">
        <input type="checkbox" class="check" id="online" />
        <label class="label" for="online">Online service</label
        ><span class="description">Access to multiplayer games</span>
        <span class="price"> +$1/mo </span>
      </label>
      <label class="addons__item" for="storage">
        <input type="checkbox" class="check" id="storage" /><label
          class="label"
          for="storage"
          >Larger storage</label
        ><span class="description">Extra 1TB of cloud save</span>
        <span class="price"> +$2/mo </span>
      </label>
      <label class="addons__item" for="profile">
        <input type="checkbox" class="check" id="profile" />
        <label class="label" for="profile">Customizable Profile</label
        ><span class="description">Custom theme on your profile</span>
        <span class="price"> +$2/mo </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepPickAddon",
};
</script>

<style scoped>
.addons {
  display: grid;
  grid-gap: 1rem;
  align-items: center;
}

.addons__item {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--DarkBlue);
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-areas:
    "check label price"
    "check description price";

  grid-template-columns: 1fr 8fr 2fr;
  cursor: pointer;
}

.check {
  grid-area: check;
  max-width: 24px;
}

.label {
  grid-area: label;
  padding-left: 1rem;
  font-weight: 600;
  color: var(--DarkBlue);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.description {
  grid-area: description;
  padding-left: 1rem;
  font-weight: 500;
  color: var(--CoolGray);
}

.price {
  display: grid;
  grid-area: price;
  color: var(--PurplishBlue);
  align-items: center;
}
</style>
