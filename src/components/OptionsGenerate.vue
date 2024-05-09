<template>
  <div class="slider">
    <div class="slider__label">
      <label for="length">Length</label>
      <span>{{ options.length }}</span>
    </div>
    <input
      class="slider__input"
      type="range"
      min="8"
      max="24"
      :value="options.length"
      @input="changeLength"
    />
  </div>
  <div class="modifiers">
    <h3>Modifiers</h3>
    <div class="options">
      <div class="option">
        <input
          type="checkbox"
          name="numbers"
          checked="true"
          v-model="numbersSelected"
        />
        <label for="numbers" :class="numbersClass">Numbers</label>
      </div>
      <div class="option">
        <input
          type="checkbox"
          name="specials"
          checked="true"
          v-model="specialsSelected"
        />
        <label for="specials" :class="specialsClass">Special Characters</label>
      </div>
    </div>
    <button @click="setPassword(passwordOptions)">Generate</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters, mapActions } from "vuex"

export default defineComponent({
  data() {
    return {
      numbersSelected: true,
      specialsSelected: true,
    }
  },
  computed: {
    numbersClass() {
      if (this.numbersSelected) {
        return "selected"
      }
      return ""
    },
    specialsClass() {
      if (this.specialsSelected) {
        return "selected"
      }
      return ""
    },
    passwordOptions() {
      const options = this.options

      return {
        length: options.length,
        numbers: options.numbers,
        symbols: options.specials,
      }
    },
    ...mapGetters(["options"]),
  },
  methods: {
    changeLength(e: Event) {
      const element = e.target as HTMLInputElement
      const value = parseInt(element.value)

      this.$store.state.options.length = value
    },
    ...mapActions(["toggleNumbers", "toggleSpeicals", "setPassword"]),
  },
  watch: {
    numbersSelected() {
      this.toggleNumbers()
    },
    specialsSelected() {
      this.toggleSpeicals()
    },
  },
})
</script>

<style scoped>
.slider {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.slider__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.slider__label label {
  color: var(--zinc-400);
  font-size: 14px;
}

.slider__label span {
  color: var(--green-500);
  font-weight: 500;
}

.slider__input {
  width: 100%;
  margin: 4px 0;
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
}

.slider__input:focus {
  outline: none;
}

.slider__input::-webkit-slider-runnable-track {
  background: var(--button-background);
  border: none;
  border-radius: 6px;
  height: 8px;
  cursor: pointer;
}

.slider__input::-webkit-slider-thumb {
  margin-top: -5px;
  width: 20px;
  height: 20px;
  background: var(--green-500);
  border: none;
  border-radius: 100%;
  cursor: w-resize;
  -webkit-appearance: none;
}

.modifiers {
  margin-top: 12px;
}

.modifiers h3 {
  color: var(--zinc-400);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
}

.modifiers button {
  margin-top: 20px;
  width: 100%;
  padding: 12px 20px;
  background: var(--primary-text);
  color: var(--background);
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.modifiers button:hover {
  background: var(--generate-hover);
}

.options {
  display: flex;
  align-items: center;
  gap: 12px;
}

.option {
  display: flex;
  align-items: center;
}

.option label {
  font-size: 14px;
  color: var(--red);
}

.option label.selected {
  color: var(--green-500);
}

.option input {
  accent-color: var(--green-500);
  margin-right: 4px;
  color: currentColor;
  width: 20px;
  height: 20px;
  border: 2px solid var(--red);
  border-radius: 6px;
  transform: translateY(0.075em);
  display: grid;
  place-items: center;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}

.option input::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  transform: scale(0);
  transition: 0.12s all ease-in-out;
  box-shadow: inset 1em 1em var(--primary-text);
  background-color: var(--primary-text);
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.option input:checked {
  background: var(--element-background);
  border-color: var(--primary-text);
}

.option input:checked::before {
  transform: scale(1);
}

body.dark .option input::before {
  box-shadow: inset 1em 1em var(--green-500);
  background-color: var(--green-500);
}

body.dark .option input:checked {
  border-color: var(--green-500);
}
</style>
