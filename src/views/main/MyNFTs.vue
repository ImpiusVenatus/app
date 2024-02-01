<template>
  <div class="mynft">
    <div class="mynft__heading">
      <h1 class="page_title">My NFTs</h1>
      <p class="mynft__description">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>

    <div class="mynft__bottom-section">
      <div class="mynft__nft-title">
        <h2 class="title">Buy NFT's</h2>
      </div>

      <!--Placeholder Card for Carousel-->
      <div class="mynft__nft-cards">
        <SafeCard v-for="nft in stakednfts" :key="nft.id" :nft="nft" />
      </div>

      <div class="mynft__nft-title">
        <h2 class="title">Staked Planets</h2>
      </div>

      <!--Placeholder Card for Carousel-->
      <div class="mynft__nft-cards">
        <NFTCard v-for="nft in nfts" :key="nft.id" :nft="nft" @open-modal="toggleModal" />
      </div>
    </div>
  </div>
</template>

<script>
import NFTCard from '@/components/cards/MyNFTCards/NFTCard.vue'
import SafeCard from '@/components/cards/SafeCards/SafeCard.vue'

export default {
  name: 'mynftPage',
  components: {
    NFTCard,
    SafeCard
  },
  data() {
    return {
      nfts: [
        {
          id: 1,
          image: '/images/nfts/nft1.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 2,
          image: '/images/nfts/nft2.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 3,
          image: '/images/nfts/nft3.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 4,
          image: '/images/nfts/nft4.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 5,
          image: '/images/nfts/nft5.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 6,
          image: '/images/nfts/nft6.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 7,
          image: '/images/nfts/nft7.png',
          title: 'Detroit Jupiter'
        },
        {
          id: 8,
          image: '/images/nfts/nft8.png',
          title: 'Detroit Jupiter'
        }
        // ... Add more NFT objects here
      ],
      stakednfts: [
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
  }
}
</script>

<style scoped>
.mynft {
  height: 100%;
  text-align: left;
}
.mynft__heading {
  padding-top: 2rem;
}
.mynft__description {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding: 0.8rem 0;
}
.mynft__bottom-section {
  background: linear-gradient(135deg, #172023, #060707);
  padding: 1.2rem 2rem;
  border-radius: 1.2rem;
}
.mynft__nft-cards {
  padding-top: 0.4rem;
  position: relative;
}
@media screen and (max-width: 600px) {
  .mynft {
    padding-left: 0;
  }
  .mynft__heading {
    padding: 0 0.8rem;
  }
  .mynft__heading h1,
  .mynft__nft-title h2 {
    font-size: 20px;
  }
  .mynft__heading p {
    font-size: 14px;
  }
  .mynft__bottom-section {
    padding: 0 0.8rem;
    background: none;
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
