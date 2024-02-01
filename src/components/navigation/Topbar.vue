<template>
  <div class="navbar">
    <div class="navbar__search-bar">
      <input type="text" class="" placeholder="Search here" spellcheck="false" />
      <!-- Use IconSearch component here -->
      <IconSearch class="search-icon" />
    </div>
    <Hamburger />
    <div class="navbar__value-display">
      Value: <span class="navbar__value-display--amount">$20.00</span>
    </div>
    <div class="navbar__value-display">
      Amount LIFC: <span class="navbar__value-display--amount">40 LIFC</span>
    </div>
    <div class="navbar__metamask-connect" ref="modal">
      <div class="metamask-connect__content" @click="toggleModal">
        <div class="navbar__metamask-icon">
          <IconMetamask />
        </div>
        <button class="navbar__connect-button">0x25Ae ... 86F5 <IconArrowDown /></button>
      </div>

      <!-- Modal content goes here -->
      <AccountModal :modalActive="modalActive" @close="toggleModal" />
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/navigation/Hamburger.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import AccountModal from '@/components/specific/AccountModal.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'
import IconMetamask from '../icons/IconMetamask.vue'

export default {
  name: 'TopSection',
  components: {
    Hamburger,
    IconArrowDown,
    IconSearch,
    AccountModal,
    IconMetamask
  },
  setup() {
    const modal = ref(null)
    const modalActive = ref(false)

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }
    const closeDropDown = (element) => {
      if (!modal.value.contains(element.target)) {
        console.log('Clicked outside')
        modalActive.value = false
      }
    }
    onMounted(() => {
      window.addEventListener('click', closeDropDown)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('click', closeDropDown)
    })

    return {
      modalActive,
      toggleModal,
      modal
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  padding: 0.8rem 0;
  user-select: none;
}
.navbar__search-bar {
  flex: 1;
  position: relative;
}
.search-icon {
  position: absolute;
  top: 16px;
  left: 16px;
}
.navbar__search-bar input {
  background: #11191f;
  border-style: none;
  border: 1px solid rgba(255, 255, 255, 0.19);
  width: 100%;
  border-radius: 10px;
  padding: 0 3rem;
  margin-right: 2rem;
  height: 55px;
}
.navbar__search-bar input::placeholder {
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
  color: #8d9293;
}
.navbar__search-bar input:focus {
  outline: none;
  color: #fff;
}
.navbar__search-bar svg {
  color: transparent;
}
.navbar__value-display {
  color: #fff;
  font-weight: 600;
  text-align: right;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.02em;
  margin: 0 1rem;
}
.navbar__value-display--amount {
  color: #00ff72;
  background: rgba(255, 255, 255, 0.03);
  padding: 15px 30px 15px 30px;
  border-radius: 1.2rem;
  margin-left: 0.8rem;
  font-weight: 600;
}
.navbar__metamask-connect {
  display: flex;
  align-items: center;
  background: #201b28;
  margin-left: 1rem;
  border-radius: 2rem;
  position: relative;
}
.navbar__metamask-connect:hover {
  cursor: pointer;
}
.metamask-connect__content {
  display: flex;
  padding: 0.5rem;
}
.navbar__metamask-icon {
  display: flex;
  background: #00ff72;
  border-radius: 2rem;
  border: 6px solid #19312d;
  padding: 0.4rem;
}
.navbar__connect-button {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
}
.navbar__connect-button:hover {
  cursor: pointer;
}
@media screen and (max-width: 1140px) {
  .navbar__value-display--amount {
    padding: 15px 20px 15px 20px;
    border-radius: 1.2rem;
    margin-left: 0.4rem;
  }
  .navbar__value-display {
    margin: 0 0.4rem;
  }
  input {
    width: 70% !important;
  }
}
@media screen and (max-width: 600px) {
  .navbar {
    padding: 0.8rem;
  }
  input {
    width: 70% !important;
  }
  .navbar__value-display,
  .navbar__metamask-connect {
    display: none;
  }
}
</style>
