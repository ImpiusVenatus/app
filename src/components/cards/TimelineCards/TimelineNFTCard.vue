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
    </div>
    <div class="card__name">
      <h2 class="card__nft-name">{{ nft.title }}</h2>
    </div>
    <div class="card__button-group">
      <div class="gradient-border"></div>
      <button class="btn-grey" @click="openModal">Explore Now</button>
    </div>
  </div>
</template>

<style scoped>
.card__nft-name {
  font-size: 20px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
  text-align: center;
  padding: 0.8rem 0 1.2rem 0;
}
.card__button-group {
  position: relative;
  border-radius: 2rem;
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
@media screen and (max-width: 600px) {
  .card {
    margin-right: 0.8rem;
  }
  .card__nft-img img {
    width: 150px;
  }
  .card__name h2 {
    font-size: 16px;
  }
}
</style>
