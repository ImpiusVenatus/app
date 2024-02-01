<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

export default {
  setup() {
    const counter = useCounterStore()

    const count = computed(() => counter.count)

    return {
      count,
      increment: counter.increment,
      decrement: counter.decrement
    }
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  width: 50%;
  border: 1px solid #32393d;
  border-radius: 0.4rem;
  background: #1c222a30;
}
.counter button {
  background: transparent;
  border: 1px solid #32393d;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .counter {
    width: 100%;
    flex-direction: row;
  }
}
</style>
