<template>
 <div class="card__overview" :class="classPlacement">
  <div class="card__title text-2xl lg:text-4xl xl:text-5xl font-bold">
   {{ title }}
  </div>
  <div class="card__body">
   <div class="card__description" v-html="desc"></div>
   <div class="card__button">
    <ButtonBase>{{ button.title }}</ButtonBase>
   </div>
  </div>

  <div class="card__image glass">
   <img :src="imageURL" />
  </div>
 </div>
</template>
<script>
export default {
 props: ["placement", "title", "desc", "button", "imageURL"],
 computed: {
  classPlacement() {
   return this.placement === "right" ? "right" : "left";
  },
 },
};
</script>
<style lang="scss">
.card {
 &__overview {
  @apply flex flex-wrap py-6 space-y-6;
  .card {
   &__image {
    @apply sm:w-full xl:w-10/12;
   }
  }

  @screen lg {
   @apply grid grid-flow-col grid-rows-1;
   grid-template-columns: repeat(2, minmax(0, 100%));

   .card {
    &__image {
     @apply ml-auto col-span-3 order-2 row-span-3;
     margin-top: 0 !important;
    }
    &__title {
     @apply row-end-1;
    }

    &__body {
     @apply col-span-1 order-1;
    }

    &__title,
    &__body {
     @apply pr-14;
    }
   }
  }

  @screen xl {
   grid-template-columns: repeat(2, minmax(0, 40%));
  }
 }
}
</style>
