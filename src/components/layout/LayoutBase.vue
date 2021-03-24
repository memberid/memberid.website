<template>
 <div class="viewport">
  <Header />
  <div class="main">
   <div class="main__wrapper">
    <div class="main__body">
     <transition name="fade">
      <router-view style="animation-duration: 0.5s" />
     </transition>
    </div>
   </div>
  </div>
  <Footer />
 </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
 async created() {
  await AOS.init({ duration: 600 });
 },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

#app {
 font-family: "Poppins", sans-serif;
 color: theme("colors.primary");
 @apply overflow-hidden sm:overflow-auto;
}

.viewport {
 @apply min-h-screen overflow-auto;
 background: #f8f8f8;
}

.main {
 &__wrapper {
  @apply flex items-center justify-center mx-auto w-4/5 2xl:w-2/3;
  min-height: calc(100vh - 18vh);
  @screen sm {
   min-height: calc(100vh - 16vh);
  }
 }

 &__body {
  @apply h-full w-full;
 }

 &__section {
  @apply relative h-full;
 }

 &__underline {
  @apply bg-white;
  position: relative;
  text-align: center;
  z-index: 2;

  &::before {
   @apply rounded-xl bg-primary h-2;
   content: "";
   width: calc(100% + 50px);
   position: absolute;
   bottom: 0;
   left: 0;
   z-index: -1;
  }
 }
}

.glass {
 @apply rounded-xl;
 position: relative;
 z-index: 1;
 background: inherit;
 overflow: hidden;
 box-shadow: 0 0 1rem 0 rgba(238, 237, 237, 0.5);

 &:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 50%),
   linear-gradient(
    169.15deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(238, 237, 237, 0.2) 96.79%
   );
  filter: blur(10px);
  margin: -20px;
 }
}

.scroll-indicator {
 position: absolute;
 bottom: 0;
 opacity: 0.8;
}

.card {
 @apply flex flex-wrap py-6 space-y-6;

 &__body {
  @apply w-full order-last space-y-8;
 }

 &__title {
  @apply w-full;
 }

 &__description {
  @apply space-y-2;
  p {
   @apply break-words;
  }
 }

 &__image {
  @apply w-full p-3;
  height: fit-content;
  img {
   @apply w-full rounded-xl;
   height: 100%;
   object-fit: cover;
   object-position: top left;
  }
 }

 &-profile,
 &-product {
  @apply rounded-xl;
  &__item {
   @apply flex items-center justify-center w-full p-3;
  }

  &__head {
   @apply w-full text-center text-white px-4;
   position: absolute;
   bottom: 2rem;
  }

  &:hover {
   .card-profile__bio {
    visibility: visible;
    opacity: 1;
    backdrop-filter: blur(6px) opacity(1);
   }
  }
 }

 &-profile {
  @apply w-full mb-8 sm:mb-0;
  &__image {
   height: 450px;
   width: 100%;
   @screen sm {
    height: 500px;
   }
   img {
    @apply w-full h-full object-cover rounded-xl;
    filter: grayscale(1) brightness(0.9);
   }
  }

  &__bio {
   @apply absolute h-full w-full;
   transition: opacity 0.3s, visibility 0.3s, backdrop-filter 0.3s;
   backdrop-filter: blur(6px) opacity(0);
   opacity: 0;
   visibility: hidden;
   p {
    @apply text-sm text-primary rounded-xl;

    overflow-y: auto;
    overflow-x: hidden;
    padding: 1rem 2rem;
    margin: 10px;
    height: 450px;
    @screen sm {
     height: 500px;
    }
   }
  }
 }
 &-product {
  .carousel__item & {
   @apply m-auto;
  }
 }
}

.carousel {
 @apply p-4 lg:p-0;
 &__item {
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 }

 &__slide {
  padding: 10px;
  flex: 0 0 100%;
  @screen lg {
   flex: 1 0 25%;
  }
 }

 &__navigation {
  &-right,
  &-left {
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
  }
  &-left {
   left: 0;
  }
  &-right {
   right: 0;
  }
 }

 &__pagination {
  &-button {
   @apply bg-primary opacity-50;
   &--active {
    @apply opacity-100;
   }
  }
 }

 &__brands {
  @apply bg-white px-4 rounded-xl sm:px-8;
  .carousel {
   @apply lg:px-6;
   &__slide {
    @apply p-4;
   }
  }
 }

 &__cards {
  @apply space-y-8 xl:space-x-8;
  @screen lg {
   @apply flex justify-between items-center space-y-0 space-x-8;
  }
  .carousel {
   &__item {
    max-width: 280px;
    @apply w-full sm:w-3/5 lg:w-full 2xl:w-4/5;
    @screen lg {
     max-width: 300px;
    }
   }
  }
 }
}

.carousel__disabled-desktop {
 @scren lg {
  transform: none !important;
 }
}
</style>
