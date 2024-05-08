<template>
  <TheHeader />
  <PasswordInput />
  <PasswordOptions />
</template>
<script lang="ts">
import { defineComponent } from "vue"

import TheHeader from "./components/TheHeader.vue"
import PasswordInput from "./components/PasswordInput.vue"
import PasswordOptions from "./components/PasswordOptions.vue"

export default defineComponent({
  components: {
    TheHeader,
    PasswordInput,
    PasswordOptions,
  },
})
</script>
