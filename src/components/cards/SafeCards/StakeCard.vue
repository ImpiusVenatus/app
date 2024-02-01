<template>
  <div class="my-staked-planets__stake-btn">
    <div class="my-staked-planets__stake-btn__plus-icon">
      <IconPlus />
    </div>
    <h4 class="my-staked-planets__stake-btn__title">Stake your planet to earn LIFC Rewards</h4>
  </div>
</template>

<script>
import IconPlus from '@/components/icons/IconPlus.vue'

export default {
  components: { IconPlus }
}
</script>

<style scoped>
.my-staked-planets__stake-btn {
  background: #1b2126;
  text-align: center;
  border: 2px dashed #11ae5f;
  width: 260px;
  height: 380px;
  margin: 0 0.8rem 1.2rem 0;
  border-radius: 1.2rem;
  cursor: pointer;
}
.my-staked-planets__stake-btn__plus-icon {
  height: 70%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff25 51.17%,
      rgba(255, 255, 255, 0) 99.23%
    )
    1;
  margin-bottom: 2rem;
  margin: 1.2rem auto;
}
.my-staked-planets__stake-btn__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  padding: 0 1.2rem 0 1.2rem;
  color: #fff;
}
</style>
