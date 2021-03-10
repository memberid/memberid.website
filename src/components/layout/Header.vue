<template>
 <div class="nav">
  <div class="nav__brand">
   <router-link to="/">
    <img class="invert" src="/src/assets/Logo.svg" alt="" />
   </router-link>
  </div>
  <div class="nav__links">
   <router-link to="/product"> Product </router-link>
   <router-link to="/about"> About Us </router-link>
   <router-link to="/contact"> Contact </router-link>
  </div>
  <div class="nav__menu" @click="openMenu(true)">
   <font-awesome-icon :icon="['fad', 'bars']" />
  </div>
  <template v-if="isMenu">
   <div class="menu">
    <div class="menu__wrapper">
     <div class="menu__navigation">
      <div class="menu__close" @click="openMenu(false)">
       <font-awesome-icon :icon="['fad', 'times']" />
      </div>
     </div>
     <div class="menu__list">
      <router-link to="/product"> Product </router-link>
      <router-link to="/about"> About Us </router-link>
      <router-link to="/contact"> Contact </router-link>
     </div>
    </div>
   </div>
  </template>
 </div>
</template>
<script>
export default {
 data() {
  return {
   isMenu: false,
  };
 },
 methods: {
  openMenu(event) {
   this.isMenu = event;
  },
 },
};
</script>
<style lang="scss">
.nav {
 @apply flex items-center justify-between mx-auto w-4/5 2xl:h-24 2xl:w-2/3;
 height: 8vh;

 &__brand {
  img {
   @apply w-24 xl:w-28 2xl:w-36;
  }
 }

 &__menu {
  @apply text-lg sm:hidden;
 }

 &__links {
  @apply hidden text-base space-x-6 font-bold sm:block xl:text-lg 2xl:text-xl;
 }
}
.menu {
 position: absolute;
 background: rgba(0, 0, 0, 0.5);
 height: 100%;
 width: 100%;
 top: 0;
 left: 0;
 z-index: 1002;

 &__wrapper {
  height: 100%;
  background: white;
  width: 80%;
  border-radius: 0 10px 10px 0;
  padding: 1.25rem;
 }

 &__navigation {
  position: relative;
 }

 &__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
 }

 &__close {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  z-index: 1001;
 }
}
</style>
