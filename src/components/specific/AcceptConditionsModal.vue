<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="conditions-modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <!--Modal Content-->
          <div class="modal-content">
            <h2>Please accept the following conditions</h2>
            <div class="conditions">
              <label>
                <input type="checkbox" v-model="readAndUnderstood" />
                I have read and understood the whitepaper.
              </label>
              <br />
              <label>
                <input type="checkbox" v-model="awareOfRisks" />
                I am aware of the risks related to the investment.
              </label>
            </div>
            <div class="buttons">
              <button @click="cancel" class="btn-grey">Cancel</button>
              <button
                @click="acceptAndSign"
                :disabled="!readAndUnderstood || !awareOfRisks"
                :class="{
                  'btn-enabled': readAndUnderstood && awareOfRisks,
                  'btn-disabled': !readAndUnderstood || !awareOfRisks
                }"
              >
                Accept and Sign
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ConditionsModal',
  data() {
    return {
      modalActive: true, // Set modalActive to true to show the modal by default
      readAndUnderstood: false,
      awareOfRisks: false
    }
  },
  methods: {
    cancel() {
      // Implement cancel method if needed
    },
    acceptAndSign() {
      // Implement acceptAndSign method if needed
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
.conditions-modal {
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 600;
}
.modal-inner {
  position: relative;
  padding: 2rem;
  background: #1c2229;
  border-radius: 1.2rem;
  border: 1px solid #2f343b;
}
.modal-content {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.modal-content h2 {
  color: #0daecf;
  font-weight: 800;
  text-align: center;
}
.conditions {
  margin: 1.2rem;
}
.buttons {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
}
.buttons button {
  width: 100%;
  border: none;
  padding: var(--btn-padding-size);
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  transition: 0.3s ease-in-out;
  position: relative;
  border-radius: 2rem;
}
.btn-enabled {
  background: var(--vt-c-green-dark);
  color: var(--color-text);
  cursor: pointer;
}
</style>
