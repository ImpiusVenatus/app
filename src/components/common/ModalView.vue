<script setup>
import IconClose from '@/components/icons/IconClose.vue'

const emit = defineEmits(['close', 'close-modal'])

const props = defineProps({
  modalActive: Boolean,
  title: String,
  description: String
})

const emitCloseEvent = () => {
  emit('close-modal')
}
</script>

<template>
  <transition name="modal-animation">
    <div v-show="props.modalActive" class="stake-modal">
      <transition name="modal-animation-inner">
        <div v-show="props.modalActive" class="modal-inner">
          <div class="modal-heading">
            <div>
              <!--Title-->
              <h2 v-if="title">{{ props.title }}</h2>
              <!--Description-->
              <p v-if="description">{{ props.description }}</p>
            </div>
            <div class="close-button" @click="emitCloseEvent">
              <button><IconClose /> <span>Close</span></button>
            </div>
          </div>
          <!--Modal Content-->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

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
.stake-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 800;
}
.modal-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff25 51.17%,
      rgba(255, 255, 255, 0) 99.23%
    )
    1;
}
.modal-heading h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 14px;
}
.modal-heading p {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 0.8rem;
}
.modal-inner {
  position: relative;
  width: 80%;
  height: 90%;
  background-color: #fff;
  padding: 40px 20px;
  background: url(/images/modalbg.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  overflow: auto;
}
.close-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.8rem;
}
.close-button button {
  background-color: #1b1f23;
  border: 1px solid #32393d;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
}
.close-button span {
  border-radius: 2rem;
  display: inline-block;
  font-size: 16px;
  letter-spacing: 0.08rem;
  font-weight: 600;
  padding-top: 2px;
}
@media only screen and (max-width: 600px) {
  .modal-heading {
    display: none;
  }
}
</style>
