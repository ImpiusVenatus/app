<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  nft: {
    type: Object,
    required: true
  }
})

const { nft } = toRefs(props)
</script>

<template>
  <div class="nft_card">
    <div class="card__nft-img">
      <img :src="nft.image" />
      <div class="card__price">
        <img src="/images/lifc.png" />
        <span>{{ nft.price }} LIFC</span>
      </div>
      <div class="card__avatar">
        <img :src="nft.avatar" />
      </div>
    </div>
    <div class="card__name">
      <div class="card__verified-name">
        <h4 class="card__username">{{ nft.username }}</h4>
        <img src="/images/confirmed.png" alt="" />
      </div>
      <h2 class="card__nft-name">{{ nft.title }}</h2>
    </div>
    <div class="card__button-group">
      <div class="card__deadline">
        <h4>Available in</h4>
        <p>352 Days 11.51:32</p>
      </div>
      <button class="btn_disabled">Claim</button>
    </div>
  </div>
</template>

<style scoped>
.card__nft-img {
  position: relative;
}
.card__nft-img .card__price {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  bottom: 15px;
  left: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 0.4rem;
  border-radius: 12px;
}
.card__nft-img .card__avatar {
  position: absolute;
  bottom: -12%;
  right: 6px;
}
.card__price img {
  background: #000;
  padding: 0.4rem;
  border-radius: 50%;
}
.card__price span {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
}
.card__verified-name {
  display: flex;
  padding-top: 0.8rem;
  align-items: center;
  gap: 0.4rem;
}
.card__verified-name img {
  width: 15px;
  height: 15px;
}
.card__username {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
}
.card__button-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0.8rem 0;
}
.card__deadline {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.card__deadline h4 {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
}
.card__deadline p {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #fff;
}
</style>
