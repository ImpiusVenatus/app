<template>
  <div class="dropdown-wrapper" ref="dropDown" @click="toggleDropdown">
    <div class="dropdown-selected-option">
      <img
        v-if="mappedSelectedOption && mappedSelectedOption.icon"
        :src="mappedSelectedOption.icon"
        alt=""
      />
      <div v-if="mappedSelectedOption">{{ mappedSelectedOption.name }}</div>
      <IconArrowUp v-if="isDropDownVisible" />
      <IconArrowDown v-else />
    </div>
    <transition name="slide-fade">
      <div class="options-wrapper" v-if="isDropDownVisible">
        <div
          class="option"
          v-for="(option, index) in options"
          :key="index"
          @click="toggleOptionSelect(option)"
        >
          <img v-if="option.icon" :src="option.icon" alt="" />
          <div>{{ option.name || option }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import IconArrowDown from '../icons/IconArrowDown.vue'
import IconArrowUp from '../icons/IconArrowUp.vue'

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      default: null
    }
  },
  setup(props, { emit }) {
    const dropDown = ref(null)
    const selectedOption = ref(props.options[0] || null)
    const isDropDownVisible = ref(false)
    const toggleOptionSelect = (option) => {
      selectedOption.value = option
      emit('update:modelValue', option)
      isDropDownVisible.value = false
    }
    const closeDropDown = (element) => {
      if (!dropDown.value.contains(element.target)) {
        isDropDownVisible.value = false
      }
    }
    const toggleDropdown = () => {
      isDropDownVisible.value = !isDropDownVisible.value
    }
    onMounted(() => {
      window.addEventListener('click', closeDropDown)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('click', closeDropDown)
    })
    const mappedSelectedOption = computed(() => {
      return selectedOption.value || null
    })
    return {
      selectedOption,
      toggleOptionSelect,
      mappedSelectedOption,
      isDropDownVisible,
      dropDown,
      toggleDropdown
    }
  },
  components: { IconArrowDown, IconArrowUp }
}
</script>

<style>
.dropdown-wrapper {
  cursor: pointer;
  max-width: 200px;
  margin: 0 auto;
  position: relative;
}
.dropdown-selected-option {
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.dropdown-selected-option img {
  width: 25px;
}
.option:hover {
  background-color: #12171b;
  border-radius: var(--radius-size);
  transition: 0.3s ease-in-out;
}
.options-wrapper {
  position: absolute;
  top: 50px;
  right: -10px;
  background: #20262c;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-size);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  z-index: 1000;
}
.option {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
}
.option:hover {
  background-color: #12171b;
  border-radius: var(--radius-size);
  transition: 0.3s ease-in-out;
}
.option img {
  width: 25px;
}
.option:last-of-type {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 9.5, 8.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}
</style>
