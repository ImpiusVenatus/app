<template>
  <nav class="navbar">
    <a class="navbar__logo" href="/">
      <img height="50" src="/images/logo.png" />
    </a>
    <div class="navbar__menu">
      <router-link
        :to="item.route"
        v-for="item in items"
        :key="item.id"
        class="navbar__item"
        :class="{ active: $route.path === item.route }"
      >
        <img :src="item.image" />
        <span>{{ item.label }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const items = ref([
      { id: 1, image: 'images/navigation/category.png', route: '/dashboard', label: 'Dashboard' },
      { id: 2, image: 'images/navigation/shop.png', route: '/shop', label: 'Shop' },
      { id: 3, image: 'images/navigation/mynfts.png', route: '/mynfts', label: 'My NFTs' },
      {
        id: 4,
        image: 'images/navigation/timeline.png',
        route: '/mytimeline',
        label: 'My Timeline'
      },
      { id: 5, image: 'images/navigation/safe.png', route: '/mysafe', label: 'My Safe' },
      { id: 6, image: 'images/navigation/vesting.png', route: '/vesting', label: 'Vesting' },
      { id: 7, image: 'images/navigation/mytokens.png', route: '/mytokens', label: 'My Tokens' },
      { id: 8, image: 'images/navigation/myskins.png', route: '/myskins', label: 'My Skins' },
      { id: 9, image: 'images/navigation/logout.png', route: '/login', label: 'Logout' }
    ])

    return {
      items
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(180deg, #111316, #121d1b, #111316);
  user-select: none;
}
.navbar__logo {
  display: flex;
  margin: 2rem;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.navbar__menu {
  margin: 0 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.navbar__item {
  position: relative;
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.navbar__item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 255, 114, 0.1) 2%, rgba(0, 255, 114, 0.00104167) 40%);
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.5s ease-in-out;
  border-radius: 0.4rem;
  z-index: 0;
}
.navbar__item.active::before {
  transform: scaleX(1);
}
.navbar__item:hover::before {
  left: 0; /* Slide in on hover */
}
.active {
  border-left: 1px solid rgba(0, 255, 114, 1);
  border-radius: 0.4rem;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 114, 0.1) 3.48%,
    rgba(0, 255, 114, 0.00104167) 92.51%
  );
}
.navbar__item.active span,
.navbar__item:hover span {
  font-weight: 600;
}
.navbar__item span {
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  position: relative; /* Ensure the link text is above the pseudo-element */
  z-index: 1;
}
@media screen and (max-width: 600px) {
  .navbar {
    display: none;
  }
}
</style>
