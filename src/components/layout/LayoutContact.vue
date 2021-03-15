<template>
 <div class="contact__banner">
  <div class="contact__banner-head">
   <div class="contact__banner-title">
    Questions? We’ll put you on the right path
   </div>
  </div>
  <div class="contact__banner-body">
   <div class="contact__banner-text">
    Ask about our products, services, media sponsorships, collaboration, rate
    cards and our friendly team will help you with your needs.
   </div>
   <div class="contact__banner-button">
    <ButtonBase color="primary">Talk To Us</ButtonBase>
   </div>
  </div>
 </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.contact {
 &__banner {
  @apply space-y-2 text-center m-auto sm:w-2/3 lg:w-1/2;

  &-title {
   @apply font-semibold text-lg;
  }

  &-body {
   @apply space-y-10;
  }

  &-text {
   @apply text-sm;
  }
 }

 &__body {
  @apply space-y-10;
 }
}
</style>
