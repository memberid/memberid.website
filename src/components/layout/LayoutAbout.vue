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
 min-height: calc(100vh - 23vh);
 @screen sm {
  min-height: calc(100vh - 16vh);
 }
 &__head {
  @apply relative z-10 w-full lg:w-2/4 space-y-6 py-0 sm:py-10;
 }
 &__logo {
  @apply w-52 lg:w-80;
  img {
   @apply w-full h-full;
  }
 }
 &__description {
  @apply pt-4;
 }
}
</style>
