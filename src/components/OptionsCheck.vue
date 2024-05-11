<template>
  <div class="title">
    <p>Strength</p>
    <span :class="strength">{{ strengthText }}</span>
  </div>
  <div class="list">
    <div class="requirement done">
      <span></span>
      <p>At least 8 characters</p>
    </div>
    <div class="requirement done">
      <span></span>
      <p>At least 1 UPPERCASE letter</p>
    </div>
    <div class="requirement done">
      <span></span>
      <p>At least 1 lowercase letter</p>
    </div>
    <div class="requirement not">
      <span></span>
      <p>At least 1 special character</p>
    </div>
    <div class="requirement not">
      <span></span>
      <p>At least 1 number</p>
    </div>
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
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title p {
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

.list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
}

.requirement {
  display: flex;
  align-items: center;
  gap: 8px;
}

.requirement span {
  position: relative;
  background: var(--zinc-300);
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.requirement p {
  color: var(--primary-text);
  font-size: 14px;
}

.requirement.done span::before {
  content: "\2713";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--green-500);
  background: var(--element-background);
  font-weight: 800;
}
/* 
.requirement.done p {
  color: var(--green-500);
} */

.requirement.not span::before {
  content: "\00d7";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--red);
  font-size: 20px;
  background: var(--element-background);
  font-weight: 600;
}

/* .requirement.not p {
  color: var(--red);
} */
</style>
