<template>
  <div class="form">
    <!-- Company Logo -->
    <div class="logo">
      <img src="/images/logo.png" alt="Company Logo" />
    </div>

    <div class="heading">
      <!-- Welcome Back Text -->
      <h2>Welcome Back!</h2>

      <!--Forgot Password Text -->
      <p>Forgot Password</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="submitForm">
      <!-- Email Input -->
      <div class="email">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="Enter email address" required />
      </div>

      <!-- Submit Button -->
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'YourComponentName',
  setup() {
    const email = ref('')

    return {
      email
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
  padding-top: 0.4rem;
}
form {
  width: 450px;
  margin: 0 auto;
}
.email,
.password {
  padding-top: 2rem;
}
label {
  display: block;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  margin-bottom: 0.8rem;
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
