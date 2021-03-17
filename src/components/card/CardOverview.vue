<template>
 <div class="card__overview" :class="classPlacement">
  <div
   class="card__title text-2xl lg:text-4xl xl:text-5xl font-bold"
   :data-aos="placement === 'right' ? 'fade-right' : 'fade-left'"
   data-aos-delay="10"
  >
   {{ title }}
  </div>
  <div
   class="card__body"
   :data-aos="placement === 'right' ? 'fade-right' : 'fade-left'"
  >
   <div class="card__description" v-html="desc"></div>
   <div class="card__button" v-if="button">
    <ButtonBase :to="button.to" :href="button.href">{{
     button.title
    }}</ButtonBase>
   </div>
  </div>

  <div class="card__image glass" data-aos="fade-up">
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
  @apply flex flex-wrap py-6 space-y-6 gap-x-10 xl:gap-x-0;
  .card {
   &__image {
    @apply sm:w-full xl:w-10/12;
   }
  }

  &.right {
   .card {
    &__image {
     @apply lg:order-first lg:ml-0;
    }
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
   grid-template-columns: repeat(2, minmax(0, 80%));
  }
 }
}
</style>
