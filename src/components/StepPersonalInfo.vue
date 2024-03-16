<template>
  <section class="grid__data">
    <div class="content">
      <h1 class="content__title">Personal info</h1>
      <h2 class="content__subtitle">
        Please provide your name, email address, and phone number.
      </h2>
      <form action="#" method="post" class="content__form">
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

        <input type="submit" value="Next Step" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "StepPersonalInfo",
};
</script>

<style scoped>
.grid__data {
  display: flex;
  align-items: center;

  justify-content: center;
}
.content {
  max-width: 80%;
}

.content__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--DarkBlue);
  margin-bottom: 1rem;
}

.content__subtitle {
  color: var(--CoolGray);
  margin-bottom: 2rem;
}

.content__form {
  display: flex;
  flex-direction: column;
}

.content__form label {
  font-weight: 500;
  color: var(--DarkBlue);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

.content__form input:not(input[type="submit"]) {
  border-radius: 5px;
  border-color: var(--LightGray);
  height: 2rem;
  border-style: solid;
  text-indent: 0.5rem;
  margin-bottom: 1.25rem;
}

.content__form input[type="submit"] {
  margin-top: 3rem;
  background-color: var(--DarkBlue);
  color: #fff;
  border-radius: 4px;
  padding: 1rem 0;
  width: 30%;
  align-self: flex-end;
}
</style>
