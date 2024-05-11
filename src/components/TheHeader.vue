<template>
  <header>
    <div class="header__text">
      <h2>pswrd</h2>
      <p>Check your password or generate new one in pswrd app!</p>
    </div>
    <div class="header__controls">
      <button @click="toggleTheme">Dark Mode</button>
      <button v-if="mode === 'input'" @click="displayMode">
        Generate Password
      </button>
      <button v-if="mode === 'display'" @click="inputMode" disabled>
        Check Password
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters, mapActions } from "vuex"

export default defineComponent({
  computed: {
    ...mapGetters(["mode"]),
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark")
    },
    ...mapActions(["displayMode", "inputMode"]),
  },
})
</script>

<style scoped>
header {
  max-width: 500px;
  padding: 20px 30px;
  border-radius: 10px;
  background: var(--element-background);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin: 0 10px;
}

header button:disabled {
  color: var(--zinc-400);
  cursor: not-allowed;
}

.header__text {
  text-align: center;
}

.header__text h2 {
  margin: 8px;
  font-size: 36px;
  color: var(--primary-text);
  font-weight: 900;
  letter-spacing: 0.03em;
}

.header__text p {
  font-size: 14px;
  color: var(--zinc-400);
  max-width: 75%;
  margin: 0 auto;
  margin-bottom: 16px;
}

.header__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
</style>
