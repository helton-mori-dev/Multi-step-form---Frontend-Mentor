<template>
  <section class="sidebar__container grid__sidebar">
    <ul class="sidebar__list">
      <li v-for="(step, label, index) in steps" :key="index">
        <div class="sidebar__content">
          <span
            class="sidebar__number"
            :class="{ current__selected: currentStepIndex === index }"
            >{{ index + 1 }}</span
          >

          <span class="sidebar__info">
            <span class="sidebar__label">{{ label }}</span>
            <span class="sidebar__step"> {{ step }}</span>
          </span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SidebarForm",
  data() {
    return {
      steps: {
        "step 1": "Your info",
        "step 2": "Select plan",
        "step 3": "Add-ons",
        "step 4": "Summary",
      },
    };
  },
  computed: {
    ...mapState({
      currentStepIndex: (state) => state.currentStepIndex,
    }),
  },
};
</script>

<style scoped>
.sidebar__container {
  background: url("@/assets/images/bg-sidebar-desktop.svg") no-repeat top left;
  background-size: 100%;
  background-clip: border-box;
  display: block;
  width: 275px;
  height: 570px;
}
.sidebar__list {
  padding: 2rem 0 0 2rem;
}
.sidebar__content {
  display: flex;
  color: #fff;
  text-transform: uppercase;
}
.sidebar__number {
  border: 1px solid #ccc;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  text-align: center;
  line-height: 25px;
  font-size: 0.85rem;
  font-weight: 700;
  transition: 0.3s all ease;
}
.sidebar__info {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 16px;
  margin: 0 0 24px;
}
.sidebar__label {
  color: #aaa;
  font-size: 0.7rem;
  padding: 0 0 4px;
}

.sidebar__step {
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 600;
}

.current__selected {
  background-color: #bce3ff;
  color: #04264a;
}

@media screen and (max-width: 769px) {
  .sidebar__container {
    background-image: url("@/assets/images/bg-sidebar-desktop.svg");
    background-position: center 90%;
    background-size: cover;
    width: 100%;
    height: 230px;
    position: relative;
  }
  .sidebar__list {
    padding: 2rem 0 0 2rem;
    display: grid;
    grid-template-columns: 40px 40px 40px 40px;
    justify-content: center;
  }

  .sidebar__info {
    display: none;
  }
}
</style>
