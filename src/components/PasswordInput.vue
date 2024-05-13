<template>
  <section :class="sectionClass">
    <p class="password--display" v-if="mode === 'display'">
      {{ passwordOutput }}
    </p>
    <input
      class="password--input"
      placeholder="Enter your password"
      @focus="focused = true"
      @blur="focused = false"
      @input="checkPassword(enterendPassword)"
      v-model="enterendPassword"
      v-if="mode === 'input'"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapActions, mapGetters } from "vuex"

export default defineComponent({
  data() {
    return {
      focused: false,
      enterendPassword: "",
    }
  },
  computed: {
    sectionClass() {
      if (this.focused) {
        return "focused"
      }

      return ""
    },
    passwordOutput(): string {
      if (this.$store.state.password) {
        return this.$store.state.password
      }

      return "Click 'Generate' button below!"
    },
    ...mapGetters(["password", "mode"]),
  },
  methods: {
    ...mapActions(["checkPassword"]),
  },
})
</script>

<style scoped>
section {
  max-width: 500px;
  padding: 20px 30px;
  border-radius: 10px;
  background: var(--element-background);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin: 24px 10px 0;
}

section.focused,
section.focused > .password--input {
  background: var(--green-400);
  color: var(--zinc-950);
  font-weight: 500;
}

section.focused > .password--input::placeholder {
  color: var(--zinc-900);
}

.password--display {
  color: var(--primary-text);
}

.password--input {
  width: 100%;
}
</style>
