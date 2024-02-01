<template>
  <div class="hamburger" :class="{ 'burger-active': burgerActive }">
    <div class="burger-button" @click="toggleModal" :class="{ cross: burgerActive }">
      <span class="burger-bar burger-bar--1"></span>
      <span class="burger-bar burger-bar--2"></span>
      <span class="burger-bar burger-bar--3"></span>
    </div>
    <transition name="burger-animation">
      <div v-show="burgerActive" class="burger">
        <transition name="burger-animation-inner">
          <div v-show="burgerActive" class="burger-inner">
            <div class="navbar__metamask-connect">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="navbar__metamask-account">
                    <IconMetamask />
                    <span>0x25Ae ... 86F5</span>
                  </div>
                  <span class="language-select">En <IconArrowRight /></span>
                </div>
                <div class="modal-body">
                  <div class="modal-balance">
                    <h4>4,356 LIFC</h4>
                    <h6>$73.83</h6>
                  </div>
                  <div class="modal-btn">
                    <button class="copy-btn"><IconCopy /></button>
                    <button class="logout-btn"><IconPower /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar__menu">
              <router-link
                :to="item.route"
                v-for="item in items"
                :key="item.id"
                class="navbar__item"
                :class="{ active: $route.path === item.route }"
              >
                <img :src="item.image" />
                <span>{{ item.label }}</span>
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import IconMetamask from '@/components/icons/IconMetamask.vue'
import IconCopy from '@/components/icons/IconCopy.vue'
import IconPower from '@/components/icons/IconPower.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

export default {
  name: 'HamBurger',
  setup() {
    const burgerActive = ref(false)
    const items = ref([
      { id: 1, image: 'images/navigation/category.png', route: '/dashboard', label: 'Dashboard' },
      { id: 2, image: 'images/navigation/shop.png', route: '/shop', label: 'Shop' },
      { id: 3, image: 'images/navigation/mynfts.png', route: '/mynfts', label: 'My NFTs' },
      {
        id: 4,
        image: 'images/navigation/timeline.png',
        route: '/mytimeline',
        label: 'My Timeline'
      },
      { id: 5, image: 'images/navigation/safe.png', route: '/mysafe', label: 'My Safe' },
      { id: 6, image: 'images/navigation/vesting.png', route: '/vesting', label: 'Vesting' },
      { id: 7, image: 'images/navigation/mytokens.png', route: '/mytokens', label: 'My Tokens' },
      { id: 8, image: 'images/navigation/myskins.png', route: '/myskins', label: 'My Skins' },
      { id: 9, image: 'images/navigation/logout.png', route: '/login', label: 'Logout' }
    ])
    const toggleModal = () => {
      burgerActive.value = !burgerActive.value
    }
    return {
      burgerActive,
      items,
      toggleModal
    }
  },
  components: {
    IconMetamask,
    IconCopy,
    IconPower,
    IconArrowRight
  }
}
</script>

<style scoped>
.burger-animation-enter-active,
.burger-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.burger-animation-enter-from,
.burger-animation-leave-to {
  opacity: 0;
}
.burger-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.burger-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.burger-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.burger-animation-inner-leave-to {
  transform: scale(0.8);
}
.burger {
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 300px;
  z-index: 999;
}
.burger-button {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: end;
  background: #11191f;
  padding: 1.2rem;
  border: 1px solid #32393d;
  border-radius: 1.2rem;
}
.burger-bar--1 {
  display: inline-block;
  width: 30px;
  height: 3px;
  background: #fff;
  transition: 0.3s ease-in-out;
}
.burger-bar--2 {
  width: 22px;
  display: inline-block;
  height: 3px;
  background: #fff;
  transition: 0.3s ease-in-out;
}
.burger-bar--3 {
  width: 15px;
  display: inline-block;
  height: 3px;
  background: #fff;
  transition: 0.3s ease-in-out;
}
.cross .burger-bar--1 {
  transform: rotate(-45deg) translate(-5px, 6px);
  transition: 0.3s ease-in-out;
}
.cross .burger-bar--2 {
  opacity: 0;
}
.cross .burger-bar--3 {
  transform: rotate(45deg) translate(-7px, -9px);
  width: 30px;
  transition: 0.3s ease-in-out;
}
.burger-inner {
  width: 350px;
  background: linear-gradient(180deg, #111316, #121d1b, #111316);
  border: 1px solid #32393d;
  border-radius: 1.2rem;
  margin-right: 1.2rem;
}
.navbar__menu {
  margin: 0 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.navbar__item {
  position: relative;
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.navbar__item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 255, 114, 0.1) 2%, rgba(0, 255, 114, 0.00104167) 40%);
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.5s ease-in-out;
  border-radius: 0.4rem;
  z-index: 0;
}
.navbar__item.active::before {
  transform: scaleX(1);
}
.active {
  border-left: 1px solid rgba(0, 255, 114, 1);
  border-radius: 0.4rem;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 114, 0.1) 3.48%,
    rgba(0, 255, 114, 0.00104167) 92.51%
  );
}
.navbar__item.active span,
.navbar__item:hover span {
  font-weight: 600;
}
.navbar__item span {
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  position: relative; /* Ensure the link text is above the pseudo-element */
  z-index: 1;
}
.navbar__metamask-connect {
  padding: 1.2rem;
}
.navbar__metamask-connect span {
  padding-left: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.navbar__metamask-account {
  display: flex;
  align-items: center;
}
.burger-button {
  z-index: 999;
}
.hamburger::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: none;
}
.burger-active::before {
  display: block;
}

.account-modal {
  position: absolute;
  top: 70px;
  right: 100px;
  z-index: 600;
}
.modal-inner {
  position: relative;
  padding: 10px 20px;
  width: 150%;
  background: #1c2229;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1.2rem;
  border: 1px solid #2f343b;
}
.modal-inner:after {
  content: '';
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #1c2229;
  transform: rotate(0deg);
  right: 20px;
  top: -12px;
}
.modal-content {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.modal-content h4 {
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__metamask-icon {
  display: flex;
}
.copy-btn {
  background-color: #25282f;
  border: 1px solid #2f343b;
  border-radius: 0.4rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.copy-btn svg {
  color: transparent;
}
.logout-btn {
  background-color: #0caf60;
  border: 1px solid #2f343b;
  border-radius: 0.4rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logout-btn svg {
  color: transparent;
}
.modal-body {
  display: flex;
  align-items: end;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 1.2rem;
  border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff25 51.17%,
      rgba(255, 255, 255, 0) 99.23%
    )
    1;
}
.modal-balance {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.modal-balance h4 {
  font-family: 'Mona Sans', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.02em;
}
.modal-balance h6 {
  font-family: 'Mona Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
}
.modal-btn {
  display: flex;
  height: 30px;
  gap: 1.2rem;
}
.language-select-option {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0.4rem 0.4rem 0.4rem;
}
.language-select-option span {
  font-family: 'Mona Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: #a5a7aa;
}
.language-select {
  display: flex;
  align-items: center;
}

@media screen and (min-width: 600px) {
  .hamburger {
    display: none;
  }
}
</style>
