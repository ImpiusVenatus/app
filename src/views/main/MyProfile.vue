<template>
  <div class="profile">
    <div class="profile__heading">
      <h2 class="page_title">My profile</h2>
      <p class="profile__description">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>

    <div class="profile__bottom-section">
      <div class="profile__info">
        <div class="profile__info-heading">
          <div>
            <h2>Credentials</h2>
          </div>
          <div>
            <div class="edit__button" @click="toggleModal">
              <IconEdit />
              <span>Edit</span>
            </div>
            <!-- Modal -->
            <div>
              <!-- Modal content goes here -->
              <Modal
                :modalActive="modalActive"
                title="Edit Profile"
                description=""
                @close-modal="toggleModal"
              >
                <div class="modal-content">
                  <div class="profile__info-details">
                    <div class="column-one">
                      <div class="first-name">
                        <label>First Name</label>
                        <span>Joshua</span>
                      </div>
                      <div class="email">
                        <label>Email</label>
                        <span>Joshuacyril723@gmail.com</span>
                      </div>
                    </div>

                    <div class="column-two">
                      <div class="last-name">
                        <label>Last Name</label>
                        <span>Cyril</span>
                      </div>
                      <div class="twitter">
                        <label>Twitter Handle</label>
                        <span>@joshuacyril2752</span>
                      </div>
                    </div>

                    <div class="column-three">
                      <div class="user-id">
                        <label>User ID</label>
                        <span>732753</span>
                      </div>
                      <div class="language">
                        <label>Language</label>
                        <span>FR</span>
                      </div>
                    </div>
                  </div>

                  <div class="edit-form">
                    <form>
                      <div class="form-name">
                        <!--First Name Input-->
                        <div class="form__first-name">
                          <label for="first-name">First Name</label>
                          <input id="first-name" type="text" placeholder="Joshua" />
                        </div>

                        <!--Last Name Input-->
                        <div class="form__last-name">
                          <label for="last-name">Last Name</label>
                          <input id="last-name" type="text" placeholder="Joshua" />
                        </div>
                      </div>

                      <div class="form-contact">
                        <!--Email Input-->
                        <div class="form__email">
                          <label for="email">Email</label>
                          <input id="email" type="text" placeholder="Joshuacyril723@gmail.com" />
                        </div>

                        <!--Twitter Input-->
                        <div class="form__twitter">
                          <label for="twitter">Twitter Handle</label>
                          <input id="twitter" type="text" placeholder="@joshuacyril2752" />
                        </div>
                      </div>
                    </form>
                  </div>

                  <!--Language Dropdown Menu-->
                  <div class="select-language" @click="toggleDropdown">
                    <div class="custom-dropdown">
                      <div class="custom-language">
                        <img :src="selectedLanguageFlag" alt="" />
                        {{ selectedLanguage }}
                      </div>
                      <transition name="fade">
                        <div
                          v-show="isDropdownOpen"
                          :class="{ 'dropdown-list': true, open: isDropdownOpen }"
                        >
                          <div
                            v-for="language in languages"
                            :key="language.id"
                            @click="selectLanguage(language)"
                          >
                            <img :src="language.image" /> {{ language.language }}
                          </div>
                        </div>
                      </transition>
                      <IconArrowUp v-if="isDropdownOpen" />
                      <IconArrowDown v-else />
                    </div>
                  </div>
                  <button class="btn update-btn">Update Credentials</button>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        <div class="profile__info-details">
          <div class="column-one">
            <div class="first-name">
              <label>First Name</label>
              <span>Joshua</span>
            </div>
            <div class="email">
              <label>Email</label>
              <span>Joshuacyril723@gmail.com</span>
            </div>
          </div>

          <div class="column-two">
            <div class="last-name">
              <label>Last Name</label>
              <span>Cyril</span>
            </div>
            <div class="twitter">
              <label>Twitter Handle</label>
              <span>@joshuacyril2752</span>
            </div>
          </div>

          <div class="column-three">
            <div class="user-id">
              <label>User ID</label>
              <span>732753</span>
            </div>
            <div class="language">
              <label>Language</label>
              <span>FR</span>
            </div>
          </div>
        </div>
      </div>

      <div class="referral">
        <div class="referral-code">
          <h4>Referral Code</h4>
          <span>5555BEE</span>
        </div>
        <div>
          <button class="btn">Copy Code</button>
        </div>
      </div>

      <div class="profile__nft-title">
        <h2 class="profile__nft-title-text">My Planets</h2>
      </div>

      <!--Placeholder Card for Carousel-->
      <div class="mynft__nft-cards">
        <Card v-for="nft in nfts" :key="nft.id" :nft="nft" />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/common/ModalView.vue'
import Card from '@/components/cards/ProfileCards/ProfileNFTCard.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'

import { ref } from 'vue'
import IconEdit from '@/components/icons/IconEdit.vue'

export default {
  name: 'profilePage',
  components: {
    Card,
    Modal,
    IconArrowDown,
    IconArrowUp,
    IconEdit
  },
  data() {
    return {
      selectedOption: 'oneYear',
      isDropdownOpen: false,
      selectedLanguage: 'English',
      selectedLanguageFlag: '/images/flags/uk.png',
      languages: [
        {
          id: 1,
          image: '/images/flags/uk.png',
          language: 'English'
        },
        {
          id: 2,
          image: '/images/flags/spain.png',
          language: 'Spanish'
        },
        {
          id: 3,
          image: '/images/flags/france.png',
          language: 'French'
        }
      ], // Add your languages here
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
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectLanguage(language) {
      this.selectedLanguage = language.language
      this.selectedLanguageFlag = language.image
      this.isDropdownOpen = false
      // You can emit an event here to notify the parent component about the selected language
    }
  }
}
</script>

<style scoped>
.profile {
  height: 100%;
  text-align: left;
}
.profile__heading {
  padding-top: 2rem;
}
.profile__title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
}
.profile__description {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding: 0.8rem 0;
}
.profile__bottom-section {
  background: linear-gradient(135deg, #172023, #060707);
  padding: 1.2rem 2rem;
  border-radius: 1.2rem;
}
.profile__nft-title {
  padding-top: 2rem;
}
.profile__nft-title-text {
  color: #fff;
}
.profile__info {
  background: #1c222a30;
  border: 1px solid #3d4248;
  border-radius: 1.2rem;
}
.profile__info-heading {
  padding-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff25 51.17%,
      rgba(255, 255, 255, 0) 99.23%
    )
    1;
}
.profile__info h2 {
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;
}
.profile__info-details {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2rem;
}
.profile__info-details label,
form label {
  color: #a5a7aa;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  display: block;
  padding-top: 0.8rem;
}
.profile__info-details span {
  font-size: 16px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  display: inline-block;
  width: 100%;
}
.email,
.twitter,
.language {
  padding-top: 2rem;
}
.column-one,
.column-two,
.column-three {
  width: 33%;
}
.column-one,
.column-two {
  border-right: 1px solid transparent;
  border-image: linear-gradient(to bottom, #20262d, #30353b, #20262d) 1;
}
.column-two,
.column-three {
  padding-left: 1.2rem;
}
.modal-content {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.edit__button {
  cursor: pointer;
  color: #00ff72;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.edit__button svg {
  color: transparent;
}
.stake-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
}
.stake-modal .stake-modal__header p {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 0.8rem;
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
.referral {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1.2rem 2rem;
  background: #11191f30;
  border-style: none;
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 1.2rem;
}
.referral-code {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.referral-code h4 {
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  padding-right: 1.2rem;
  border-right: 1px solid transparent;
  border-image: linear-gradient(to bottom, #20262d, #30353b, #20262d) 1;
}
.referral-code span {
  font-size: 20px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
}
.form__first-name,
.form__last-name,
.form__email,
.form__twitter {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.form-name,
.form-contact {
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
}
.edit-form {
  padding: 2rem;
}
.edit-form input {
  margin-top: 0.4rem;
  height: 55px;
  border-radius: 10px;
  padding: 0 0.8rem;
  background: #11191f30;
  border-style: none;
  border: 1px solid rgba(255, 255, 255, 0.19);
}
.edit-form input::placeholder {
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
  color: #8d9293;
}
.edit-form input:focus {
  outline: none;
  color: #fff;
}
.stake-modal__slider {
  padding: 1.2rem 0;
}
.select-language {
  margin: 0 2rem;
  padding: 1.2rem 2rem;
  background: #11191f30;
  border-style: none;
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 1.2rem;
  cursor: pointer;
}
.custom-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  display: flex;
  justify-content: space-between;
}
.custom-dropdown svg {
  color: #fff;
}
.custom-language {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.dropdown-list {
  position: absolute;
  top: 200%;
  left: 0;
  width: 100%;
  z-index: 400;
  display: none;
  background: #11191f;
  border-radius: 1.2rem;
}
.dropdown-list.open {
  display: block;
}
.dropdown-list div {
  padding: 1.2rem;
  border-bottom: 1px solid #32393d;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
}
.dropdown-list div:last-child {
  border-bottom: none;
}
.custom-dropdown img,
.dropdown-list img {
  width: 40px;
}
.update-btn {
  width: 300px;
  margin: 2rem auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 600px) {
  .profile {
    padding-left: 0;
  }
  .profile__heading {
    padding: 0 0.8rem;
  }
  .profile__heading h1,
  .profile__nft-title h2 {
    font-size: 20px;
  }
  .profile__heading p {
    font-size: 14px;
  }
  .profile__bottom-section {
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
