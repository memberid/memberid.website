<template>
 <div class="footer">
  <div class="footer__socmed">
   <div
    class="footer__socmed-item"
    @click="goTo('https://www.linkedin.com/company/memberid')"
   >
    <font-awesome-icon :icon="['fab', 'linkedin']" />
   </div>
   <div
    class="footer__socmed-item"
    @click="goTo('https://www.instagram.com/loyalhackers/')"
   >
    <font-awesome-icon :icon="['fab', 'instagram']" />
   </div>
   <div
    class="footer__socmed-item"
    @click="goTo('https://www.facebook.com/memberidglobal/?ref=br_rs')"
   >
    <font-awesome-icon :icon="['fab', 'facebook-square']" />
   </div>
  </div>
  <div class="footer__copyright">© 2014 PT GLOBAL LOYAL SEJAHTERA</div>
 </div>
</template>
<script>
export default {
 methods: {
  goTo(name) {
   window.open(name, "_blank");
  },
 },
};
</script>
<style lang="scss">
.footer {
 @apply relative w-4/5 mx-auto py-4 2xl:w-2/3;
 height: 8vh;

 @screen sm {
  @apply flex items-center justify-between;
 }

 &__socmed {
  @apply flex items-center justify-center space-x-4 pb-2;

  @screen sm {
   @apply pb-0;
  }

  &-item {
   @apply font-bold cursor-pointer text-xl lg:text-2xl xl:text-3xl;
  }
 }

 &__copyright {
  @apply text-center font-bold text-base xl:text-lg 2xl:text-xl;
 }
}
</style>
