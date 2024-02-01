<template>
  <div class="buy-section lifestory_card">
    <h2 class="title">Buy Tokens</h2>
    <div class="buy-section__converter">
      <div class="buy-section__input-group">
        <div class="buy-section__input-block">
          <input type="text" class="buy-section__input" placeholder="0" />
          <drop-down
            class="buy-section__select-option"
            :options="options"
            v-model="parentSelectedOption"
          />
        </div>
      </div>
      <div class="buy-section__convert-icon">
        <IconConvert />
      </div>
      <div class="buy-section__input-group">
        <div class="buy-section__input-block">
          <input type="text" class="buy-section__input" placeholder="0" />
          <div class="buy-section__select-option">
            <img src="/images/lifestoryIcon.png" class="buy-section__currency-icon" />
            <span>LIFC</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconConvert from '@/components/icons/IconConvert.vue'
import DropDown from '@/components/specific/DropDown.vue'

import { ref } from 'vue'

export default {
  name: 'BuySection',
  components: {
    IconConvert,
    DropDown
  },
  setup() {
    const options = ref([
      {
        name: 'ETH',
        value: 'etherium',
        icon: '/images/etherium.png'
      },
      {
        name: 'USDC',
        value: 'usdc',
        icon: '/images/usdc.png'
      }
    ])

    const parentSelectedOption = ref(null)

    return {
      options,
      parentSelectedOption
    }
  }
}
</script>

<style scoped>
.buy-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--gap-section) 0;
}
.buy-section__title h2 {
  font-size: 25px;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #fff;
}
.buy-section__converter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
}
.buy-section__convert-icon svg {
  color: transparent;
}
.buy-section__input-group {
  width: 40%;
  background: #20262c;
  border: 1px solid #32393d;
  border-radius: 10px;
}
.buy-section__input {
  width: 80%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 0.4rem 1.2rem;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.02em;
}
.buy-section__input-block {
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px 10px;
}
.buy-section__input-block input {
  outline: none;
}
.buy-section__select-option {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  padding: 5px 10px;
  width: 115px;
  border-left: 1px solid #32393d;
}
.buy-section__arrow {
  width: 15px;
  transform: translateY(-2px);
}
@media screen and (max-width: 600px) {
  .buy-section__title h2 {
    font-size: 20px;
  }
  .buy-section__converter {
    flex-direction: column;
    width: 100%;
  }
  .buy-section__input-group {
    width: 100%;
  }
}
@media screen and (max-width: 992px) {
  .buy-section__input-group {
    width: 100%;
  }
  .buy-section__converter {
    flex-direction: column;
    width: 100%;
  }
}
</style>
