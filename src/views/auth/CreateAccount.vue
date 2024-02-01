<template>
  <div class="register">
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from '@/components/auth/Register.vue'

export default {
  components: {
    'register-form': RegisterForm
  }
}
</script>

<style>
.register {
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
@media screen and (max-width: 600px) {
  .register {
    justify-content: start;
  }
}
</style>
