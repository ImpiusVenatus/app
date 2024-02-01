<template>
  <div class="safe">
    <div class="safe__heading">
      <h1 class="page_title">My Safe</h1>
      <p class="safe__description">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>

    <div class="safe__bottom-section">
      <h2 class="title">Buy NFT's</h2>

      <div class="safe__nft-cards">
        <div class="stake__button" @click="toggleModal">
          <StakeButton />
        </div>
        <!-- Modal -->
        <div>
          <!-- Modal content goes here -->
          <StakeModal
            :modalActive="modalActive"
            title="Stake your planets"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            @close-modal="toggleModal"
          >
            <div class="modal-content">
              <div class="stake-modal__slider">
                <h4>My Planets</h4>
                <!--Placeholder Card for Carousel-->
                <div class="stake__nft-cards">
                  <ModalCard v-for="nft in nfts" :key="nft.id" :nft="nft" />
                </div>
              </div>

              <div class="stake-modal__timeframe">
                <h4>Select Timeframe</h4>
                <div class="stake-modal__button-group">
                  <button
                    :class="{ active: selectedOption === 'oneYear' }"
                    @click="selectOption('oneYear')"
                  >
                    One Year
                  </button>
                  <button
                    :class="{ active: selectedOption === 'twoYear' }"
                    @click="selectOption('twoYear')"
                  >
                    Two Year
                  </button>
                  <button
                    :class="{ active: selectedOption === 'threeYear' }"
                    @click="selectOption('threeYear')"
                  >
                    Three Year
                  </button>
                </div>
              </div>

              <div class="stake-modal__stake-planet">
                <div class="price">
                  <h4>1800 LIFC</h4>
                  <p>For staking this planet for a year</p>
                </div>
                <div>
                  <button class="btn">Stake Planet</button>
                </div>
              </div>
            </div>
          </StakeModal>
        </div>
        <Card v-for="nft in nfts" :key="nft.id" :nft="nft" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/SafeCards/SafeCard.vue'
import StakeButton from '@/components/cards/SafeCards/StakeCard.vue'
import StakeModal from '@/components/common/ModalView.vue'
import ModalCard from '@/components/cards/ModalCards/ModalNFTCard.vue'

import { ref } from 'vue'

export default {
  name: 'safePage',
  components: {
    ModalCard,
    Card,
    StakeButton,
    StakeModal
  },
  data() {
    return {
      selectedOption: 'oneYear',
      nfts: [
        {
          id: 1,
          image: '/images/nfts/nft1.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 2,
          image: '/images/nfts/nft2.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 3,
          image: '/images/nfts/nft3.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 4,
          image: '/images/nfts/nft4.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 5,
          image: '/images/nfts/nft5.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 6,
          image: '/images/nfts/nft6.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 7,
          image: '/images/nfts/nft7.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        },
        {
          id: 8,
          image: '/images/nfts/nft8.png',
          price: 40,
          avatar: '/images/avatar/Avatar.png',
          username: 'SoulCurry',
          title: 'Detroit Jupiter'
        }
        // ... Add more NFT objects here
      ]
    }
  },
  setup() {
    const modalActive = ref(false)

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }
    return {
      modalActive,
      toggleModal
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
    }
  }
}
</script>

<style scoped>
.safe {
  height: 100%;
  text-align: left;
}
.safe__heading {
  padding-top: 2rem;
}
.safe__description {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding: 0.8rem 0;
}
.safe__bottom-section {
  background: linear-gradient(135deg, #172023, #060707);
  padding: 1.2rem 2rem;
  border-radius: 1.2rem;
}
.safe__nft-cards {
  padding-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
}
.modal-content {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.stake__nft-cards {
  padding-top: 0.4rem;
  position: relative;
}
.modal-content h4 {
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
}
.stake-modal__timeframe {
  border: 1px solid #32393d;
  width: 100%;
  border-radius: 0.8rem;
  padding: 0.8rem 2rem;
  display: inline-block;
  background: linear-gradient(90deg, #171e1c, #1d2a28, #171e1c);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
}
.stake-modal__button-group {
  display: flex;
  gap: 1.2rem;
}
.stake-modal__stake-planet {
  border: 1px solid #32393d;
  width: 100%;
  border-radius: 0.8rem;
  padding: 0.8rem 2rem;
  display: inline-block;
  background: linear-gradient(90deg, #171e1c60, #1d2a2860, #171e1c70);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
.stake-modal__stake-planet .price {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.stake-modal__button-group button {
  background: #171717;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0.4rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.stake-modal__button-group .active {
  background-color: #00ff72;
}
.price h4 {
  color: #00ff72;
}
.price p {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
}
.stake-modal__slider {
  padding: 1.2rem 0;
}
@media screen and (max-width: 600px) {
  .safe {
    padding-left: 0;
  }
  .safe__heading {
    padding: 0 0.8rem;
  }
  .safe__heading h1,
  .safe__nft-title h2 {
    font-size: 20px;
  }
  .safe__heading p {
    font-size: 14px;
  }
  .safe__bottom-section {
    padding: 0 0.8rem;
    background: none;
  }
  .stake-modal h2,
  .stake-modal__timeframe h4 {
    font-size: 18px;
  }
  .stake-modal .stake-modal__header p {
    font-size: 12px;
    line-height: 16px;
  }
  .stake-modal__slider h4 {
    font-size: 15px;
  }
  .stake-modal__button-group {
    gap: 0.4rem;
  }
  .stake-modal__button-group button {
    font-size: 10px;
    padding: 0.4rem 1.2rem;
  }
  .stake-modal__timeframe {
    padding: 0.8rem;
    flex-direction: column;
    gap: 0.4rem;
  }
  .stake-modal__stake-planet {
    flex-direction: column;
  }
  .stake-modal__stake-planet h4 {
    font-size: 14px;
  }
}

.carousel__slide {
  padding: 10px;
  text-align: left;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  position: absolute;
  color: #fff;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: #fff;
}

.carousel__next {
  top: -20px;
  right: 40px;
}

.carousel__prev {
  top: -20px;
  right: 80px;
  left: inherit;
}
</style>
