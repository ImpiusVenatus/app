<template>
  <div class="form">
    <!-- Company Logo -->
    <div class="logo">
      <img src="/images/logo.png" alt="Company Logo" />
    </div>

    <div class="heading">
      <!-- Welcome Back Text -->
      <h2>Welcome Back!</h2>

      <!-- Login with Email Text -->
      <p>Login with your email</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="submitForm">
      <!-- Email Input -->
      <div class="email">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="Enter email address" required />
      </div>

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

      <div class="checkbox">
        <!-- Stay Logged In Checkbox -->
        <div class="logged-in-checkbox">
          <input id="stayLoggedIn" v-model="stayLoggedIn" type="checkbox" />
          <label for="stayLoggedIn">Stay Logged In</label>
        </div>

        <!-- Forgot Password Link -->
        <a href="/forgotPassword">Forgot Password?</a>
      </div>

      <!-- Submit Button -->
      <button type="submit">Login</button>

      <!-- Or Text -->
      <p>Or log in with</p>

      <!-- Social Login Buttons -->
      <div class="social-buttons">
        <button>Continue with Google</button>
        <button>Continue with MetaMask</button>
        <button>Continue with WalletConnect</button>
      </div>

      <!-- Sign Up Link -->
      <div class="sign-up-link">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue'

export default {
  components: {
    IconEye,
    IconEyeSlash
  },
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const passwordVisible = ref(false)
    const stayLoggedIn = ref(false)

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value
    }

    return {
      name,
      email,
      password,
      passwordVisible,
      stayLoggedIn,
      togglePasswordVisibility
    }
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
  overflow: auto;
  text-align: center;
  margin: 0.5rem;
}
.form .logo {
  width: 100%;
}
.form img {
  width: 120px;
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
  font-size: 24px;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: 0em;
  color: #fff;
  padding-top: 0.4rem;
}
form {
  width: 450px;
  margin: 0 auto;
}
.email,
.password {
  padding-top: 0.4rem;
}
label {
  display: block;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
}
input {
  width: 100%;
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
input[type='checkbox'] {
  margin-top: 5px;
}
input::placeholder {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: #fff;
}
input[type='checkbox'] {
  width: 15px;
  padding: 0;
  margin: 0;
}
.password {
  position: relative;
}
.password span {
  position: absolute;
  right: 15px;
  bottom: 7px;
}
.checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.8rem;
}
.logged-in-checkbox {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
a {
  color: #0caf60;
}
.checkbox a {
  text-decoration: underline;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
}
button {
  background: #0caf60;
  color: white;
  padding: 18px 0;
  margin-top: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4rem;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
button:hover {
  opacity: 0.8;
}
form p {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
}
a:hover {
  text-decoration: none;
}
.social-buttons button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.19);
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
  .email,
  .password {
    padding-top: 0.8rem;
  }
  button {
    padding: 18px 22px;
  }
}
</style>
