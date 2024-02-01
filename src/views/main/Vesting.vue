<template>
  <div class="vesting">
    <div class="vesting__heading">
      <h1 class="page_title">Vesting</h1>
      <p class="vesting__description">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>

    <div class="vesting__bottom-section">
      <ProgressBar />
      <div class="lifc-section">
        <div class="total-lifc-section lifestory_card">
          <h6>Total LIFC Recieved</h6>
          <span>400 / 2,000.000</span>
        </div>
        <div class="current-lifc-section lifestory_card">
          <h6>Current LIFC Releasable</h6>
          <span>1,999.600</span>
        </div>
        <div class="time-lifc-section lifestory_card">
          <h6>Time Left</h6>
          <span>13 Day's 05:23:42</span>
        </div>
      </div>
      <div class="counter-section lifestory_card">
        <div class="counter-text">Release LIFC</div>
        <Counter />
        <div>
          <button class="btn">Release</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/common/ProgressBar.vue'
import Counter from '@/components/common/MyCounter.vue'

export default {
  name: 'vestingPage',
  components: {
    ProgressBar,
    Counter
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.vesting {
  height: 100vh;
  text-align: left;
}
.vesting__heading {
  padding-top: 2rem;
}
.vesting__title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
}
.vesting__description {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding: 0.8rem 0;
}
.vesting__bottom-section {
  background: linear-gradient(135deg, #172023, #060707);
  padding: 1.2rem 2rem;
  border-radius: 1.2rem;
}
.lifc-section {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
}
.lifc-section h6 {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
}
.lifc-section span {
  font-size: 16px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  color: #fff;
}
.total-lifc-section,
.current-lifc-section,
.time-lifc-section {
  padding: 1.2rem;
  border-radius: 0.8rem;
  border: 1px solid #3b4246;
}
.counter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}
.counter-text {
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
}
@media screen and (max-width: 600px) {
  .vesting {
    padding-left: 0;
  }
  .vesting__heading {
    padding: 0 0.8rem;
  }
  .vesting__heading h1,
  .vesting__nft-title h2 {
    font-size: 20px;
  }
  .vesting__heading p {
    font-size: 14px;
  }
  .vesting__bottom-section {
    padding: 0 0.8rem;
  }
  .lifc-section {
    flex-direction: column;
    gap: 0.8rem;
  }
  .counter-section {
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
  }
}
</style>
