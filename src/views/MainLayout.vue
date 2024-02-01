<template>
  <suspense>
    <template #default>
      <div class="mainlayout">
        <NavBar class="mainlayout__sidebar" />
        <div class="mainlayout__content">
          <Topbar />
          <RouterView />
        </div>
      </div>
    </template>
    <template #fallback>
      <MyLoader />
    </template>
  </suspense>
</template>

<script>
import Topbar from '@/components/navigation/Topbar.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import MyLoader from '@/components/specific/MyLoader.vue';

export default {
  components: {
    Topbar,
    NavBar,
    MyLoader
  }
}
</script>

<style scoped>
.mainlayout {
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/images/mainbg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.mainlayout__sidebar {
  width: 250px;
}
@media screen and (max-width: 1140px) {
  .mainlayout__sidebar {
    width: 200px;
  }
}
.mainlayout__content {
  flex: 1;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
