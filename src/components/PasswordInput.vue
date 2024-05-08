<template>
  <section :class="sectionClass">
    <p class="password--display" v-if="mode === 'display'">{{ password }}</p>
    <input
      class="password--input"
      placeholder="Enter your password"
      @focus="focused = true"
      @blur="focused = false"
      v-if="mode === 'input'"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from "vuex"

export default defineComponent({
  computed: {
    sectionClass() {
      if (this.focused) {
        return "focused"
      }

      return ""
    },
    ...mapGetters(["password", "mode"]),
  },
  data() {
    return {
      focused: false,
    }
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
  margin-top: 24px;
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
