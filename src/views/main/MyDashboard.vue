<template>
  <div>
    <div class="dashboard">
      <div class="dashboard__heading">
        <h1 class="page_title">Dashboard</h1>
        <p class="dashboard__description">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>

      <div class="dashboard__bottom-section">
        <ClaimCard />
        <BuyCard />
        <div class="chart">
          <img src="/images/Chart.png" alt="" class="chart__image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyCard from '@/components/specific/BuyCard.vue'
import ClaimCard from '@/components/cards/DashboardCards/ClaimCard.vue'

import { ref } from 'vue'

export default {
  components: {
    BuyCard,
    ClaimCard
  },
  setup() {
    const parentSelectedOption = ref(null)

    return {
      parentSelectedOption
    }
  }
}
</script>

<style scoped>
.dashboard {
  height: 100%;
  text-align: left;
}
.dashboard__heading {
  padding-top: 2rem;
}
.dashboard__description {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding: 0.8rem 0;
}
.dashboard__bottom-section {
  background: linear-gradient(135deg, #172023, #060707);
  padding: 1.2rem 2rem;
  border-radius: 1.2rem;
}
.chart {
  padding: 2rem 0;
}
.chart__image {
  width: 100%;
}
@media screen and (max-width: 600px) {
  .dashboard {
    padding-left: 0;
  }
  .dashboard__bottom-section {
    padding: 0.8rem;
    background: none;
  }
  .dashboard__heading {
    padding: 0.8rem;
  }
  .dashboard__title {
    font-size: 20px;
  }
  .dashboard__description {
    font-size: 14px;
  }
  .chart img {
    width: 380px;
    height: 300px;
  }
}
@media screen and (max-width: 768px) {
  .page_title,
  .title {
    font-size: 24px;
  }
  .dashboard__description {
    font-size: 14px;
    padding: 0.4rem 0;
  }
}
</style>
