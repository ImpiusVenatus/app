<template>
  <div class="authlayout">
    <div class="authlayout__content">
      <RouterView />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.authlayout {
  display: flex;
  background-image: url(/images/auth/authbg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.authlayout__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
