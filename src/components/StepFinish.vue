<template>
  <div class="content finish">
    <span class="finish__icon"></span>
    <h1 class="content__title center-text">Thank you!</h1>
    <h2 class="content__subtitle text-line-md center-text">
      Thanks for confirming your subscription {{ form.name }} ! We hope you have
      fun using our platform. An email was sent to
      <span class="finish__highlight">{{ form.email }}</span>
      with this transaction summary. If you ever need support, please feel free
      to email us at support@loremgaming.com.
    </h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "StepFinish",
  computed: {
    ...mapState(["form"]),
  },
};
</script>

<style scoped>
.finish {
  display: grid;
  align-content: center;
  margin-top: 4rem;
}

.finish__icon {
  margin: 1rem;
  align-self: center;
  justify-self: center;
}

.finish__icon:before {
  content: url(../assets/images/icon-thank-you.svg);
}

.finish__highlight {
  font-weight: bolder;
}
</style>
