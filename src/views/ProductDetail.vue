<template>
 <div class="main__product-detail">
  <section class="main__section">
   <div class="product-detail__banner">
    <div class="product-detail__head" data-aos="fade-up">
     <div class="product-detail__brand">
      <img :src="selectData.logo" />
     </div>
     <div class="product-detail__subheading">{{ selectData.subheading }}</div>
    </div>
    <!-- <div class="product-detail__body desktop">
     <div class="product-detail__background">
      <img src="/src/assets/solva+.png" alt="" />
     </div>
    </div> -->
    <div class="scroll-indicator">
     <font-awesome-icon
      class="animate-bounce text-lg"
      :icon="['far', 'arrow-down']"
     />
    </div>
   </div>
  </section>
  <section class="main__section py-16 lg:py-20" data-aos="fade-left">
   <div class="space-y-6">
    <div class="main__underline w-0 mb-4" />
    <div class="product-detail__title pt-6">Product Solution</div>
    <div class="product-detail__description">
     {{ selectData.description }}
    </div>
    <div class="product-detail__list">
     <div
      class="product-detail__item"
      v-for="(item, idx) in selectData.features"
      :key="idx"
     >
      <div class="font-bold">{{ item.type }}</div>
      <span>{{ item.name }}</span>
     </div>
    </div>
   </div>
  </section>
  <section class="main__section space-y-24 py-16 lg:py-20">
   <CardOverview
    v-for="(item, idx) in selectData.cards"
    :key="idx"
    :placement="item.placement"
    :title="item.title"
    :desc="item.desc"
    :imageURL="item.imageURL"
   />
  </section>
  <section
   class="main__section mt-28 mb-20 sm:my-24 lg:mx-16 xl:mx-38"
   data-aos="fade-up"
  >
   <Contact />
  </section>
 </div>
</template>
<script>
// Solva Assets
import solvaLogo from "@/assets/solva_logo.svg";
import solvaCardOne from "@/assets/image/solva/solva-1.png";
import solvaCardTwo from "@/assets/image/solva/solva-2.png";
import solvaCardThree from "@/assets/image/solva/solva-3.png";

// Madoo Assets
import madooLogo from "@/assets/madoo_logo.svg";
import madooCardOne from "@/assets/image/madoo/madoo-1.png";
import madooCardTwo from "@/assets/image/madoo/madoo-2.png";

// Hotelis Assets
import hotelisLogo from "@/assets/hotelis_logo.svg";
import hotelisCardOne from "@/assets/image/hotelis/hotelis-1.png";
import hotelisCardTwo from "@/assets/image/hotelis/hotelis-2.png";
export default {
 data: () => ({
  products: [
   {
    name: "Solva",
    data: {
     logo: solvaLogo,
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
       imageURL: solvaCardOne,
      },
      {
       placement: "right",
       title: "Easy and intuitive program management",
       desc: `A loyalty  program  system  shouldn’t be managed by IT or your dev team. With our user friendly backoffice platform, changes are easy and intuitive for anyone on your team.`,
       imageURL: solvaCardTwo,
      },
      {
       placement: "left",
       title: "Monitoring your loyalty program with ease",
       desc: `Provide a key metrics data , so you can see how your loyalty program perform at a glance. Leveraging data insights to make an informed decision-making`,
       imageURL: solvaCardThree,
      },
     ],
    },
   },
   {
    name: "Madoo",
    data: {
     logo: madooLogo,
     subheading: "Point & Wallet Exchange",
     description: `Solution to increase the value of your loyalty program by exanding your reward catalouge `,
     features: [
      {
       type: "Services",
       name: "Point & Wallet Exchange",
      },
      {
       type: "Industry",
       name: "All Industry",
      },
     ],
     cards: [
      {
       placement: "left",
       title: "Increase your loyalty program value by expanding reward option ",
       desc: `With the Madoo app, your member can now convert their unused point balance to airline miles, hotel rewards, dining points and many more.`,
       imageURL: madooCardOne,
      },
      {
       placement: "right",
       title: "Hassle-Free Points Transfer",
       desc: `Your member can convert their unused  points between different loyalty program with ease.`,
       imageURL: madooCardTwo,
      },
     ],
    },
   },
   {
    name: "Hotelis",
    data: {
     logo: hotelisLogo,
     subheading: "Loyalty Solution For Hotel",
     description: `Hotelis is a loyalty solution designed for hotel groups with multiple properties. The platform is integrated to your booking engine and PMS, delivering a seamless experience for both your members and internal staff `,
     features: [
      {
       type: "Services",
       name: "Loyalty Solution for Hotel",
      },
      {
       type: "Industry",
       name: "Hotel",
      },
     ],
     cards: [
      {
       placement: "left",
       title: "Create a powerful & engaging mobile App",
       desc: `A comprehensive loyalty app that is fully customizable to your brand but already packed with features you need to engage with your customers. From redeeming point to make a booking.`,
       imageURL: hotelisCardOne,
      },
      {
       placement: "right",
       title: "Easy & Intuitive Backoffice platform",
       desc: `A loyalty  program  system  shouldn’t be managed by IT or your dev team. With our user friendly backoffice platform, changes are easy and intuitive for anyone on your team.`,
       imageURL: hotelisCardTwo,
      },
     ],
    },
   },
  ],
 }),
 computed: {
  selectData() {
   const select = this.products.filter(item => {
    return item.name === this.$route.params.name;
   });
   return select[0].data;
  },
 },
};
</script>
<style lang="scss">
.product {
 &-detail {
  &__banner {
   @apply flex items-center justify-center;
   height: calc(100vh - 16vh);
  }
  &__head {
   @apply relative z-10 w-full space-y-4 lg:w-2/4 py-10;
  }
  &__subheading {
   @apply text-center text-3xl;
  }
  &__body {
   @apply absolute right-0 top-0 h-full;
  }
  &__brand {
   @apply w-52 m-auto lg:w-80;
   img {
    @apply w-full h-full;
   }
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

  &__title {
   @apply font-bold text-2xl lg:text-4xl xl:text-5xl;
  }
  &__description {
   @apply w-full sm:w-3/4 lg:w-2/4;
  }
  &__list {
   @apply space-y-3;
  }
  &__item {
   @apply flex items-baseline space-x-8;
  }
 }
}
</style>
