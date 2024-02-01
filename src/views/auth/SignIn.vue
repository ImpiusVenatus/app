<template>
  <div class="login">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/Login.vue'

export default {
  components: {
    'login-form': LoginForm
  }
}
</script>

<style>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .login {
    justify-content: start;
  }
}
</style>
