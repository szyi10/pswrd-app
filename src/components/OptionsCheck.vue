<template>
  <div>
    <p>Strength</p>
    <span :class="strength">{{ strengthText }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      strength: this.getRandomStrength(),
    }
  },
  computed: {
    strengthText() {
      if (this.strength) {
        return this.strength.charAt(0).toUpperCase() + this.strength.slice(1)
      }
    },
  },
  methods: {
    getRandomStrength() {
      const strengths = ["weak", "medium", "strong"]
      const randomNumber = Math.floor(Math.random() * strengths.length)

      return strengths[randomNumber]
    },
  },
})
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div p {
  color: var(--zinc-400);
  font-size: 14px;
}

span.weak {
  color: var(--green-500);
}

span.medium {
  color: var(--orange);
}

span.strong {
  color: var(--red);
}
</style>
