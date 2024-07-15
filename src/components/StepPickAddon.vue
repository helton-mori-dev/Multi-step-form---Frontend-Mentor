<template>
  <div class="content">
    <h1 class="content__title">Pick add-ons</h1>
    <h2 class="content__subtitle">
      Add-ons help enhance your gaming experience.
    </h2>
    <div class="addons">
      <label
        class="addons__item"
        for="online"
        :class="{ active: this.$store.state.onlineService === true }"
      >
        <input
          type="checkbox"
          class="check"
          id="online"
          v-model="onlineChange"
        />
        <label class="label" for="online">Online service</label
        ><span class="description">Access to multiplayer games</span>
        <span class="price"> +$1/mo </span>
      </label>

      <label
        class="addons__item"
        for="storage"
        :class="{ active: this.$store.state.largerStorage === true }"
      >
        <input
          type="checkbox"
          class="check"
          id="storage"
          v-model="storageChange"
        /><label class="label" for="storage">Larger storage</label
        ><span class="description">Extra 1TB of cloud save</span>
        <span class="price"> +$2/mo </span>
      </label>

      <label
        class="addons__item"
        for="profile"
        :class="{ active: this.$store.state.customizableProfile === true }"
      >
        <input
          type="checkbox"
          class="check"
          id="profile"
          v-model="profileChange"
        />
        <label class="label" for="profile">Profile</label
        ><span class="description">Custom theme on your profile</span>
        <span class="price"> +$2/mo </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepPickAddon",
  data() {
    return {};
  },
  computed: {
    onlineChange: {
      get() {
        return this.$store.state.onlineService;
      },
      set(value) {
        this.$store.commit("CHANGE_ONLINE", value);
      },
    },
    storageChange: {
      get() {
        return this.$store.state.largerStorage;
      },
      set(value) {
        this.$store.commit("CHANGE_STORAGE", value);
      },
    },
    profileChange: {
      get() {
        return this.$store.state.customizableProfile;
      },
      set(value) {
        this.$store.commit("CHANGE_PROFILE", value);
      },
    },
  },
  methods: {},
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
  transition: 0.3s all ease;
}

.addons__item.active {
  background-color: var(--Magnolia);
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
