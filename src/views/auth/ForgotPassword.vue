<template>
  <div class="password">
    <forgotPassword-form></forgotPassword-form>
  </div>
</template>

<script>
import ForgotPasswordForm from '@/components/auth/ForgotPassword.vue'

export default {
  components: {
    'forgotPassword-form': ForgotPasswordForm
  }
}
</script>

<style>
.password {
  background-image: url(/images/authbg.png);
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
