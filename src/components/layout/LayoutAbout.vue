<template>
 <div class="about" data-aos="fade-up">
  <div class="about__head">
   <div
    class="main__underline w-1"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
   />
   <div
    class="about__logo"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-delay="100"
   >
    <transition name="fade">
     <img :class="aboutName" :src="logo" />
    </transition>
   </div>
   <div
    class="about__description"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-delay="300"
   >
    <p
     v-html="description"
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    />
   </div>
  </div>
 </div>
</template>
<script>
export default {
 props: ["name", "logo", "description"],
 computed: {
  aboutName() {
   console.log(this.description);
   return this.name === "Member.id" ? "invert" : "";
  },
 },
};
</script>
<style lang="scss">
.about {
 @apply flex items-center;
 height: calc(100vh - 16vh);
 &__head {
  @apply relative z-10 w-full lg:w-2/4 space-y-6 py-10;
 }
 &__body {
  @apply absolute right-0 top-0 h-full;
 }
 &__logo {
  @apply w-52 lg:w-80;
  img {
   @apply w-full h-full;
  }
 }
 &__list {
  @apply absolute z-50 flex items-center mt-8 space-x-8;
 }
 &__item {
  @apply w-28 opacity-40;
  transition: opacity 0.3s;
  &:hover,
  &.active {
   @apply opacity-100;
  }
 }
 &__description {
  @apply pt-4;
 }
 &__background {
  @apply w-2/3 h-full ml-auto;
  img {
   @apply rounded-xl;
   height: 100%;
   object-fit: cover;
   opacity: 0.1;
  }
 }
}
</style>
