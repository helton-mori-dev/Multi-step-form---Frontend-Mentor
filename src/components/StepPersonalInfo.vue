<template>
  <section class="content">
    <h1 class="content__title">Personal info</h1>
    <h2 class="content__subtitle">
      Please provide your name, email address, and phone number.
    </h2>
    <form action="#" method="post">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Name e.g. Stephen King"
      />

      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="e.g. stephenking@lorem.com"
      />

      <label for="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        placeholder="e.g. +1 234 567 890"
      />

      <input type="submit" value="Submit" />
    </form>
  </section>
</template>

<script>
export default {
  name: "StepPersonalInfo",
};
</script>

<style scoped></style>
