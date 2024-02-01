<template>
  <div class="form">
    <!-- Company Logo -->
    <img src="/images/logo.png" alt="Company Logo" />

    <!-- Welcome Here Text -->
    <h2>Welcome Here</h2>

    <!-- Login with Email Text -->
    <p>Sign up your account</p>

    <!-- Form -->
    <form @submit.prevent="submitForm">
      <!-- Password Input -->
      <div class="password">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="Enter Password"
          required
        />
        <span @click="togglePasswordVisibility">
          <IconEye v-if="passwordVisible" />
          <IconEyeSlash v-else />
        </span>
      </div>

      <!-- Confirm Password Input -->
      <div class="password">
        <label for="password">Confirm Password</label>
        <input
          id="password"
          v-model="confirmPassword"
          :type="confirmPasswordVisible ? 'text' : 'password'"
          placeholder="Enter Password"
          required
        />
        <span @click="toggleConfirmPasswordVisibility">
          <IconEye v-if="confirmPasswordVisible" />
          <IconEyeSlash v-else />
        </span>
      </div>

      <!-- Submit Button -->
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue'

export default {
  components: {
    IconEye,
    IconEyeSlash
  },
  setup() {
    const state = reactive({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      stayLoggedIn: false,
      passwordVisible: false,
      confirmPasswordVisible: false
    })

    const togglePasswordVisibility = () => {
      state.passwordVisible = !state.passwordVisible
    }

    const toggleConfirmPasswordVisibility = () => {
      state.confirmPasswordVisible = !state.confirmPasswordVisible
    }

    return { ...state, togglePasswordVisibility, toggleConfirmPasswordVisibility }
  }
}
</script>

<style scoped>
.form {
  background: linear-gradient(91.71deg, #00000010 -40.38%, #00000010 55.05%, #00000010 115.46%),
    linear-gradient(0deg, #00000004, #00000010);
  padding: 2rem 3rem;
  backdrop-filter: blur(100px);
  border-radius: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.19);
  overflow: hidden;
  margin: 0.5rem;
}
h2 {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #0caf60;
  padding-top: 2rem;
}
p {
  font-size: 28px;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: 0em;
  color: #fff;
  padding-top: 1.2rem;
}
form {
  width: 450px;
  margin: 0 auto;
}
.email,
.password,
.name {
  padding-top: 2rem;
}
label {
  display: block;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
}
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 0.4rem;
  padding: 1.2rem 1rem;
  color: #fff;
}
input:focus {
  outline: none;
  color: #fff;
}
input::placeholder {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: #fff;
}
.password {
  position: relative;
}
.password span {
  position: absolute;
  right: 15px;
  bottom: 7px;
}
a {
  color: #0caf60;
}
button {
  background: #0caf60;
  color: white;
  padding: 23px 22px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4rem;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.02em;
}
button:hover {
  opacity: 0.8;
}
a:hover {
  text-decoration: none;
}
.social-buttons button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 4rem;
  padding: 1.2rem 1rem;
  backdrop-filter: blur(160px);
}
.sign-up-link p {
  color: #fff;
}
svg:hover {
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  form {
    width: 300px;
  }
  .form {
    margin: 2rem;
  }
  .password {
    padding-top: 0.8rem;
  }
  button {
    padding: 18px 22px;
  }
}
</style>
