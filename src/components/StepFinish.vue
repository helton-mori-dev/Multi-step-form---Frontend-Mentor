<template>
  <div class="content finish">
    <span class="finish__icon"></span>
    <h1 class="content__title center-text">Thank you!</h1>
    <h2 class="content__subtitle text-line-md center-text">
      Thank you! Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free to email us
      at support@loremgaming.com.
    </h2>
  </div>
</template>

<script>
export default {
  name: "StepFinish",
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
</style>
