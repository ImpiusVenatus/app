<script setup>
import IconList from '@/components/icons/IconList.vue'
</script>

<template>
  <div class="claim-section lifestory_card">
    <div class="claim-section__left">
      <h2 class="title">Claim your LIFC's</h2>
      <ul class="claim-section__list">
        <li class="claim-section__item"><IconList /> The tokens you've recieved</li>
        <li class="claim-section__item">
          <IconList /> Every planet you have (including staked plants)
        </li>
        <li class="claim-section__item"><IconList /> Your referral bonuses</li>
      </ul>
    </div>
    <div class="claim-section__right lifestory_card">
      <div class="claim-section__total">
        <h4 class="claim-section__total-title">Total LIFC</h4>
        <span class="claim-section__total-amount">4,356 LIFC</span>
      </div>
      <div class="claim-section__action">
        <h6 class="claim-section__claimable">50 LIFC To Claim</h6>
        <button class="claim-section__button">Claim</button>
      </div>
    </div>
  </div>
</template>

<style>
.claim-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
}
.claim-section__left {
  width: 30%;
}
.claim-section__left ul {
  padding-left: 0rem;
}
.claim-section__right {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
}
.claim-section__list {
  list-style: none;
  padding: 0;
}
.claim-section__item {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.claim-section__icon {
  padding-right: 0.5rem;
  width: 12px;
  height: 12px;
}
.claim-section__total {
  display: flex;
  flex-direction: column;
}
.claim-section__total-title {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  padding-bottom: 0.8rem;
}
.claim-section__total-amount {
  font-size: 28px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.02em;
}
.claim-section__action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.claim-section__claimable {
  color: #b2b2b2;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
}
.claim-section__button {
  background: #0caf60;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
  border: none;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .claim-section {
    flex-direction: column;
  }
  .claim-section__left,
  .claim-section__right {
    width: 100%;
  }
  .claim-section__left h2 {
    font-size: 20px;
  }
}
@media screen and (max-width: 768px) {
  .page_title,
  .title {
    font-size: 24px;
  }
}
@media screen and (max-width: 992px) {
  .claim-section__left {
    width: 50%;
  }
  .claim-section__right {
    justify-content: center;
    width: 50%;
    gap: 1.2rem;
  }
  .claim-section__right h4,
  .claim-section__right span {
    text-align: center;
  }
}
</style>
