<template>
 <div class="main__product">
  <div class="main__section">
   <div class="pb-12 text-center text-2xl lg:text-4xl xl:text-5xl font-bold">
    Discover Our Products
   </div>
   <div class="carousel__cards">
    <carousel class="carousel" ref="carousel">
     <slide
      class="carousel__slide"
      v-for="(product, key) in products"
      :key="key"
     >
      <div class="block">
       <div class="carousel__item" @click="goToDetail(product.name)">
        <div class="card-product">
         <div class="card-product__item glass">
          <div class="card-product__image">
           <img :src="product.logoURL" />
          </div>
          <div class="absolute h-full w-full p-3">
           <div class="card-product__background" :class="product.name">
            <img :src="product.imageURL" />
           </div>
          </div>
         </div>
        </div>
       </div>
       <div
        class="w-3/4 xl:w-2/3 2xl:w-2/4 py-4 m-auto text-center text-base font-semibold"
       >
        {{ product.title }}
       </div>
      </div>
     </slide>

     <template #arrows="{ changeSlide }">
      <div class="carousel__navigation mobile">
       <font-awesome-icon
        class="carousel__navigation-left text-lg"
        :icon="['far', 'arrow-left']"
        @click="$refs.carousel.changeSlide(-1)"
       />
       <font-awesome-icon
        class="carousel__navigation-right text-lg"
        :icon="['far', 'arrow-right']"
        @click="$refs.carousel.changeSlide(1)"
       />
      </div>
     </template>
    </carousel>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 data: () => ({
  products: [
   {
    name: "Solva",
    title: "All in One Loyalty Solution",
    logoURL: "/src/assets/solva_logo.png",
    imageURL: "/src/assets/solva_image.png",
    data: {
     logo: "/src/assets/solva_logo.svg",
     subheading: "All in One Loyalty Solutions",
     description: `Solution to increase your customer loyalty and reward them with wide range
     of redemption options`,
     features: [
      {
       type: "Services",
       name: "Loyalty Solution",
      },
      {
       type: "Industry",
       name: "Food and Beverage,Retail & Services",
      },
     ],
     cards: [
      {
       placement: "left",
       title: "Create a loyalty app your customers will love",
       desc: `A comprehensive loyalty app that is fully customizable to your brand but already packed with features you need to engage with your customers.`,
       imageURL: `/src/assets/image/solva/solva-1.png`,
      },
      {
       placement: "right",
       title: "Easy and intuitive program management",
       desc: `A loyalty  program  system  shouldn’t be managed by IT or your dev team. With our user friendly backoffice platform, changes are easy and intuitive for anyone on your team.`,
       imageURL: `/src/assets/image/solva/solva-2.png`,
      },
      {
       placement: "left",
       title: "Monitoring your loyalty program with ease",
       desc: `Provide a key metrics data , so you can see how your loyalty program perform at a glance. Leveraging data insights to make an informed decision-making`,
       imageURL: `/src/assets/image/solva/solva-3.png`,
      },
     ],
    },
   },
   {
    name: "Madoo",
    title: "Points Wallet & Exchange",
    logoURL: "/src/assets/madoo_logo.png",
    imageURL: "/src/assets/madoo_image.png",
    data: {
     logo: "/src/assets/solva_logo.svg",
     subheading: "All in One Loyalty Solutions",
     description: `Solution to increase your customer loyalty and reward them with wide range
     of redemption options`,
     features: [
      {
       type: "Services",
       name: "Loyalty Solution",
      },
      {
       type: "Industry",
       name: "Food and Beverage,Retail & Services",
      },
     ],
     cards: [
      {
       placement: "left",
       title: "Create a loyalty app your customers will love",
       desc: `A comprehensive loyalty app that is fully customizable to your brand but already packed with features you need to engage with your customers.`,
       imageURL: `/src/assets/image/solva/solva-1.png`,
      },
      {
       placement: "right",
       title: "Easy and intuitive program management",
       desc: `A loyalty  program  system  shouldn’t be managed by IT or your dev team. With our user friendly backoffice platform, changes are easy and intuitive for anyone on your team.`,
       imageURL: `/src/assets/image/solva/solva-2.png`,
      },
      {
       placement: "left",
       title: "Monitoring your loyalty program with ease",
       desc: `Provide a key metrics data , so you can see how your loyalty program perform at a glance. Leveraging data insights to make an informed decision-making`,
       imageURL: `/src/assets/image/solva/solva-3.png`,
      },
     ],
    },
   },
   {
    name: "Hotelis",
    title: "Loyalty Solutions for Hotels",
    logoURL: "/src/assets/hotelis_logo.png",
    imageURL: "/src/assets/hotelis_image.png",
   },
   {
    name: "TS_Media",
    title: "Influencing Behaviour",
    logoURL: "/src/assets/ts_logo.png",
    imageURL: "/src/assets/ts_image.png",
   },
  ],
  productsCarouselSettings: {
   breakpoints: {
    1024: {
     itemsToShow: 4,
     snapAlign: "start",
    },
    700: {
     itemsToShow: 2,
     snapAlign: "start",
    },
   },
  },
 }),
 methods: {
  goToDetail(name) {
   this.$router.push({
    name: "Product Detail",
    params: { name: name },
   });
  },
 },
};
</script>
<style lang="scss">
.main {
 &__product {
  .vs-carousel__wrapper {
   @apply lg:overflow-hidden;
  }
  .carousel {
   &__slide {
    @screen sm {
     flex: 0 0 50%;
    }
    @screen lg {
     flex: auto;
     width: 25%;
    }
   }
  }
  .card {
   &-product {
    @apply shadow-md;
    min-width: 200px;
    height: 55vh;
    @screen md {
     min-width: 180px;
    }
    @screen xl {
     @apply w-20;
     min-width: 230px;
    }
    @screen 2xl {
     width: 320px;
    }
    &__item {
     @apply h-full w-full;
    }
    &__image {
     position: relative;
     z-index: 10;
     height: 100%;
     width: 100%;
     img {
      @apply w-full object-contain xl:object-none rounded-xl p-4;
      height: 50%;
     }
    }

    &__background {
     z-index: 5;
     height: 100%;
     width: 100%;

     &.Solva {
      background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 1.57%,
        #ffffff 100%
       ),
       rgba(103, 58, 183, 0.5);
     }

     &.Madoo {
      background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 1.57%,
        #ffffff 100%
       ),
       rgba(241, 195, 56, 0.5);
     }

     &.Hotelis {
      background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 1.57%,
        #ffffff 100%
       ),
       rgba(32, 131, 85, 0.5);
     }

     &.TS_Media {
      background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 1.57%,
        #ffffff 100%
       ),
       rgba(0, 0, 0, 0.5);
     }

     img {
      @apply rounded-xl;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: 50% 26vh;
      opacity: 0.25;
     }
    }
   }
  }
 }
}
</style>
