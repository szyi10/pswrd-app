<template>
  <section>
    <OptionsGenerate v-if="mode === 'display'" />
    <OptionsCheck v-if="mode === 'input'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from "vuex"

import OptionsGenerate from "./OptionsGenerate.vue"
import OptionsCheck from "./OptionsCheck.vue"

export default defineComponent({
  components: {
    OptionsGenerate,
    OptionsCheck,
  },
  computed: {
    ...mapGetters(["mode"]),
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
  margin-top: 8px;
}
</style>
