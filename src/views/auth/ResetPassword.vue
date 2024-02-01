<template>
  <div class="reset">
    <resetPassword-form></resetPassword-form>
  </div>
</template>

<script>
import ResetPasswordForm from '@/components/auth/ResetPassword.vue'

export default {
  components: {
    'resetPassword-form': ResetPasswordForm
  }
}
</script>

<style>
.reset {
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
