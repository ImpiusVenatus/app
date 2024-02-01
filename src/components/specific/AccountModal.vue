<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="account-modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <!--Modal Content-->
          <div class="modal-content">
            <div class="modal-header">
              <div class="navbar__metamask-connect">
                <div class="navbar__metamask-icon">
                  <IconMetamask />
                </div>
              </div>
              <span>0x25Ae ... 86F5</span>
              <button class="copy-btn"><IconCopy /></button>
              <button class="logout-btn"><IconPower /></button>
            </div>
            <div class="modal-balance">
              <h4>4,356 LIFC</h4>
              <h6>$73.83</h6>
            </div>
            <div class="language-select-option">
              <span>Language</span>
              <span class="language-select">En <IconArrowRight /></span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import IconCopy from '@/components/icons/IconCopy.vue'
import IconPower from '@/components/icons/IconPower.vue'
import IconMetamask from '@/components/icons/IconMetamask.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

export default {
  name: 'AccountModal',
  components: {
    IconCopy,
    IconPower,
    IconMetamask,
    IconArrowRight
  },
  props: ['modalActive'],
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }
    return {
      close
    }
  }
}
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
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
.modal-balance {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
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
</style>
