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
    </div>
    <div class="card__name">
      <h2 class="card__nft-name">{{ nft.title }}</h2>
    </div>
    <div class="card__button-group">
      <div class="gradient-border"></div>
      <button class="card__buy-planet-btn">
        <span>Explore Now</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card__nft-img {
  position: relative;
}
.card__nft-img img {
  width: 200px;
}
.card__nft-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 6px;
  letter-spacing: -0.02em;
  color: #fff;
  text-align: center;
  padding: 0.8rem 0 1.2rem 0;
}
.card__button-group {
  position: relative;
  border-radius: 2rem;
}
.card__buy-planet-btn {
  background: #2d3337;
  border: none;
  padding: 0.8rem 2rem;
  width: 100%;
  transition: 0.3s ease-in-out;
  position: relative;
  border-radius: 2rem;
  border: 1px solid transparent;
}
.gradient-border {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background: linear-gradient(155deg, #00ff7250, transparent 45%, #00ff7250);
  border-radius: 2rem;
  transform: translate(-1px, -1px);
  z-index: 0;
  mask: radial-gradient(circle, white 100%, black 100%);
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
}
.card__buy-planet-btn:hover {
  cursor: pointer;
  background: #222528;
  transition: 0.3s ease-in-out;
  border: 1px solid #32393d;
}
.card__buy-planet-btn span {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
}
@media screen and (max-width: 600px) {
  .card__nft-img img {
    width: 200px;
  }
}
</style>
