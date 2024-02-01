<script setup>
import { toRefs, defineEmits } from 'vue'

const props = defineProps({
  nft: {
    type: Object,
    required: true
  }
})

const { nft } = toRefs(props)

const emits = defineEmits(['open-modal'])

const openModal = () => {
  emits('open-modal', nft.value.id)
}
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
      <button class="btn" @click="openModal">Buy Planet</button>
      <div class="card__price--dollar">$4,925</div>
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
  color: #fff;
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
  color: #fff;
}
.card__nft-name {
  color: #fff;
}
.card__button-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0.8rem 0;
}
.card__buy-planet-btn:hover {
  cursor: pointer;
  background: #222528;
  transition: 0.3s ease-in-out;
  border: 1px solid #32393d;
}
.card__buy-planet-btn span {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
}
.card__price--dollar {
  font-size: 16px;
  font-weight: 600;
}
@media screen and (max-width: 600px) {
  .card {
    width: 190px;
    margin-right: 10px;
  }
  .card__nft-img img {
    width: 165px;
  }
  .card__avatar img {
    width: 50px;
  }
  .card__price span {
    font-size: 10px;
  }
  .card__price img {
    width: 25px;
  }
  .card__username {
    font-size: 12px;
  }
  .card__nft-name {
    font-size: 16px;
  }
  .card__button-group {
    gap: 0.4rem;
  }
  .card__buy-planet-btn {
    padding: 0.8rem;
    font-size: 16px;
  }
  .card__buy-planet-btn span {
    font-size: 14px;
  }
}
</style>
