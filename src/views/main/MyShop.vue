<script setup>
import BuyCard from '@/components/specific/BuyCard.vue'
import Card from '@/components/cards/ShopCards/ShopNFTCard.vue'
import Modal from '@/components/common/ModalView.vue'
import IconFavorite from '@/components/icons/IconFavorite.vue'
import { ref } from 'vue'

const nfts = ref([
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
])

const modalActive = ref(false)

const toggleModal = () => {
  modalActive.value = !modalActive.value
}
</script>

<template>
  <div class="shop">
    <div class="shop__heading">
      <h1 class="page_title">Shop</h1>
      <p class="shop__description">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>

    <div class="shop__bottom-section">
      <BuyCard />

      <h2 class="title">Buy NFT's</h2>

      <div class="shop__nft-cards">
        <Card v-for="nft in nfts" :key="nft.id" :nft="nft" @open-modal="toggleModal" />
      </div>

      <Modal
        :modalActive="modalActive"
        title="Buy Planet"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        @close-modal="toggleModal"
      >
        <div class="modal-content">
          <div class="nft-details">
            <div class="modal-img">
              <img src="/images/shop/NFTImage.png" alt="" />
            </div>

            <div class="details-section">
              <div class="username-section">
                <div class="avatar">
                  <img src="/images/avatar/Avatar.png" alt="" class="avatar-img" />
                  <span>SoulCurry</span>
                  <img src="/images/confirmed.png" alt="" />
                </div>
                <button><IconFavorite /> Save as favourite</button>
              </div>

              <div class="title-section">
                <h2>Detroit Jupiter</h2>
              </div>

              <div class="price-section">
                <div class="lifc-price">
                  <div class="lifc-price-icon">
                    <img src="/images/lifestoryIcon.png" alt="" />
                  </div>
                  2494
                </div>
                <div class="dollar-price">$4,925</div>
              </div>

              <div class="description-section">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. . Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  cupidatat non proident.
                </p>
              </div>

              <div class="buy-btn-section">
                <button>Select & Buy</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<style scoped>
.shop {
  height: 100%;
  text-align: left;
}
.shop__heading {
  padding-top: 2rem;
}
.shop__title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
}
.shop__description {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding: 0.8rem 0;
}
.shop__bottom-section {
  background: linear-gradient(135deg, #172023, #060707);
  padding: 1.2rem 2rem;
  border-radius: 1.2rem;
}
.shop__nft-title {
  padding-top: 2rem;
}
.shop__nft-cards {
  padding-top: 0.4rem;
}

/*Modal Content CSS*/
.nft-details {
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.modal-img,
.details-section {
  flex: 1;
}
.modal-img img {
  width: 100%;
}
.username-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.username-section .avatar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.avatar-img {
  width: 40px;
}
.username-section button {
  background-color: #1b1f23;
  border: 1px solid #32393d;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0.4rem 1.2rem;
  gap: 0.4rem;
  cursor: pointer;
}
.username-section button:hover {
  cursor: pointer;
  background: #11ae5f;
  transition: 0.3s ease-in-out;
}
.title-section h2 {
  font-size: 40px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: -0.02em;
  padding: 1.2rem 0;
}
.price-section {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 0;
}
.lifc-price {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.02em;
}
.lifc-price-icon {
  display: flex;
  background: #000;
  padding: 0.4rem;
  border-radius: 50%;
}
.dollar-price {
  font-size: 20px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.08em;
}
.description-section {
  padding: 1.2rem 0;
}
.description-section h4 {
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
}
.description-section p {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.02em;
  width: 90%;
  padding-top: 0.8rem;
}
.buy-btn-section {
  display: inline-block;
}
.buy-btn-section button {
  background: #11ae5f;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
  transition: 0.3s ease-in-out;
  border: 1px solid transparent;
  color: #fff;
}
.buy-btn-section button:hover {
  cursor: pointer;
  background: #222528;
  transition: 0.3s ease-in-out;
  border: 1px solid #32393d;
}
@media screen and (max-width: 992px) {
  .nft-details {
    flex-direction: column;
    gap: 0.4rem;
  }
  .details-section {
    text-align: center;
  }
  .price-section {
    justify-content: center;
  }
  .username-section {
    justify-content: center;
    gap: 2rem;
    padding: 0.8rem;
  }
  .title-section h2 {
    font-size: 28px;
    line-height: 10px;
    padding: 0.8rem 0;
  }
}
@media screen and (max-width: 600px) {
  .shop {
    padding-left: 0;
  }
  .shop__heading {
    padding: 0 0.8rem;
  }
  .shop__heading h1,
  .shop__nft-title h2 {
    font-size: 20px;
  }
  .shop__heading p {
    font-size: 14px;
  }
  .shop__bottom-section {
    padding: 0 0.8rem;
    background: none;
  }
}
</style>
