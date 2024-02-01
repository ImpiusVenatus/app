<template>
  <div>
    <div>
      <p class="title">{{ percentage }}% Releasable</p>
    </div>
    <div class="progress-bar-wrapper">
      <div class="progress-bar-counter" :style="{ width: `${percentage}%` }"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ProgressBar',
  setup() {
    const percentage = ref('10.00')

    return {
      percentage
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  padding: 2rem 0;
}
.progress-bar-wrapper {
  background: #212830;
  border-radius: 2rem;
}
.progress-bar-counter {
  background: #0caf60;
  height: 15px;
  border-radius: 2rem;
  transition: width 0.5s ease;
}
@media screen and (max-width: 600px) {
  .title {
    font-size: 18px;
    padding-bottom: 0.4rem;
  }
}
</style>
