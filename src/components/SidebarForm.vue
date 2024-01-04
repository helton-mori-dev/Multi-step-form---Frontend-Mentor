<template>
  <section class="sidebar">
    <ul>
      <li v-for="(step, label, index) in steps" :key="index">
        <div class="sidebar__container">
          <span class="sidebar__number">{{ index }}</span>
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
};
</script>

<style scoped>
.sidebar__container {
  display: flex;
}
.sidebar__number {
  border: 1px solid #fff;
  border-radius: 100%;
  display: inline-block;
  aspect-ratio: 1/1;
  width: 20px;
  text-align: center;
}

.sidebar__info {
  display: flex;
  flex-direction: column;
}
</style>
