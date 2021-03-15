<template>
 <div class="main__home">
  <section class="main__section glass space-y-6 lg:mb-12">
   <div class="jumbotron">
    <div class="jumbotron__header">
     <div class="main__underline w-0 mb-4 desktop" />
     <div class="jumbotron__title">Influencing Customer Behavior</div>
     <div class="jumbotron__lead">
      We help communicate your brand promise to your audience through
      personalized media contents and targeted digital campaigns.
     </div>
    </div>
    <div class="jumbotron__image">
     <img src="/src/assets/image/jumbotron.png" alt="" />
    </div>
   </div>

   <div class="card text-center">
    <div class="card__title px-6 font-bold text-lg lg:text-xl 2xl:text-2xl">
     Featured Products & Solutions
    </div>
    <div class="card__body">
     <div class="products__overview bg-white">
      <div class="products__item">
       <img src="/src/assets/madoo_logo.png" />
      </div>
      <div class="products__item">
       <img src="/src/assets/solva_logo.png" />
      </div>
      <div class="products__item">
       <img src="/src/assets/hotelis_logo.png" />
      </div>
      <div class="products__item">
       <img src="/src/assets/ts_logo.png" />
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="main__section py-16 lg:py-20 lg:mx-16 xl:mx-38">
   <CardOverview
    :title="cardLeft.title"
    :desc="cardLeft.desc"
    :imageURL="cardLeft.imageURL"
    :button="cardLeft.button"
   />

   <div class="features">
    <div class="card text-center">
     <div class="card__body">
      <ul
       class="space-y-8 sm:flex lg:justify-center lg:space-x-10 xl:space-x-16"
      >
       <li class="px-4 space-y-1 lg:text-xl">
        <font-awesome-icon
         class="pb-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
         :icon="['fad', 'users']"
        />
        <div class="font-bold xl:w-2/3 xl:m-auto">Total Members Managed</div>
        <div>2 Million+</div>
       </li>
       <li class="px-4 space-y-1 lg:text-xl">
        <font-awesome-icon
         class="pb-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
         :icon="['fad', 'handshake-alt']"
        />
        <div class="font-bold xl:w-2/3 xl:m-auto">Increased Wallet Share</div>
        <div>2 Million+</div>
       </li>
       <li class="px-4 space-y-1 lg:text-xl">
        <font-awesome-icon
         class="pb-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
         :icon="['fad', 'users']"
        />
        <div class="font-bold xl:w-2/3 xl:m-auto">Total Members Managed</div>
        <div>2 Million+</div>
       </li>
      </ul>
     </div>
    </div>
   </div>

   <CardOverview
    placement="right"
    :title="cardRight.title"
    :desc="cardRight.desc"
    :imageURL="cardRight.imageURL"
    :button="cardRight.button"
   />
  </section>

  <section class="main__section py-16 lg:py-20 lg:mx-16 xl:mx-38">
   <div class="profiles">
    <div class="mb-6 text-center text-2xl lg:text-4xl 2xl:text-5xl font-bold">
     Our Team
    </div>
    <div class="carousel__cards">
     <carousel class="carousel" ref="carousel">
      <slide
       class="carousel__slide"
       v-for="(profile, key) in profiles"
       :key="key"
      >
       <div class="carousel__item">
        <div class="card-profile">
         <div class="card-profile__item glass">
          <div class="card-profile__image">
           <img :src="`/src/assets/image/` + profile.image" />
          </div>
          <div class="card-profile__head">
           <div class="text-2xl font-bold">{{ profile.name }}</div>
           <div class="text-base font-light">{{ profile.title }}</div>
          </div>
          <div class="card-profile__bio">
           <div class="flex h-full justify-center items-center glass">
            <p v-html="profile.bio"></p>
           </div>
          </div>
         </div>
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

   <div class="brands pt-16 lg:pt-28">
    <div class="text-center font-bold text-lg lg:text-xl 2xl:text-2xl">
     Our Clients & Partners
    </div>
    <div class="carousel__brands">
     <carousel class="carousel" ref="carousel">
      <slide class="carousel__slide" v-for="(brand, key) in brands" :key="key">
       <div class="brands__item">
        <img :src="`/src/assets/image/brands/` + brand.image" />
       </div>
      </slide>

      <template #arrows="{ changeSlide }">
       <div class="carousel__navigation">
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
  </section>

  <section class="main__section mt-28 mb-20 sm:my-24 lg:mx-16 xl:mx-38">
   <Contact />
  </section>
 </div>
</template>
<script>
export default {
 name: "App",
 data: () => ({
  profiles: [
   {
    name: "Marianne Rumantir",
    title: "Chief Executive Officer",
    image: "marianne-rumantir.jpg",
    bio: `Marianne is an aviation geek and points obsessed traveler with extensive experience working as a senior marketing and loyalty professional in multinational companies in Indonesia (HSBC),
       Australia (NAB, JLL)  and the United States as well as establishing a number of hospitality and an e-commerce business in Australia and the US which has earned her several Awards.<br><br>
        Through her passion in travel and sports she co-created Travel Secrets (TS Media) with Luna Maya with the aim to help Indonesians become a positive influence in the society.`,
   },
   {
    name: "Robert Tedja",
    title: "Chief Operating Officer",
    image: "robert-tedja.jpg",
    bio: `With a strong background in consulting in Indonesia and Canada (Deloitte Consulting), strategy and analytics (CIBC). Robert is a seasoned strategist with a passion in technology and data analytics.<br><br>
      Robert’s past experiences include e-Payments business transformation roadmap development for a leading telecommunications company in Indonesia, including organizational alignment and product positioning strategy,
      channel strategy improvement, market research to size government accounting systems market in 4 countries across Southeast Asia and commercial due diligence.`,
   },
   {
    name: "Luna Maya",
    title: "Managing Partner",
    image: "luna-maya.jpg",
    bio: `Luna is a respected actress and entrepreneur with over 20 years of experience in the media and entertainment industry.<br><br>
      Her line of business in Luna Enterprises includes Luna Habit (Fashion), Nama Beauty (Cosmetics), Macama (F&B) and multiple products and brand collaborations in footwear, home accessories and hospitality.<br><br>
      As co-creator of Travel Secrets (TS Media) with her long-time friend Marianne, Luna brings in her expertise in content creation to serve brands and inspire the audience on a larger scale.  `,
   },
  ],
  brands: [
   {
    title: "Ismaya Group",
    image: "ismaya_group.png",
   },
   {
    title: "Union Group",
    image: "union_group.png",
   },
   {
    title: "Djarum",
    image: "djarum.png",
   },
   {
    title: "Syah Establishments",
    image: "syah_establishments.png",
   },
   {
    title: "Unilever",
    image: "unilever.png",
   },
   {
    title: "Plataran",
    image: "plataran.png",
   },
   {
    title: "fore",
    image: "fore.png",
   },
   {
    title: "Bag's City",
    image: "bags_city.png",
   },
   {
    title: "Burgreens",
    image: "burgreens.png",
   },
   {
    title: "Artotel",
    image: "artotel.png",
   },
   {
    title: "Qlue",
    image: "qlue.png",
   },
   {
    title: "Hunstreet",
    image: "huntstreet.png",
   },
  ],
  profilesCarouselSettings: {
   breakpoints: {
    1024: {
     itemsToShow: 3,
     snapAlign: "start",
    },
   },
  },
  brandsCarouselSettings: {
   breakpoints: {
    640: {
     itemsToShow: 5,
     snapAlign: "center",
    },
   },
  },
  cardLeft: {
   title: "Consulting Services",
   desc: `Our team of consultants and data analysts will help formulize your marketing strategy and loyalty program design using data-driven insight.
   `,
   imageURL: `/src/assets/image/consulting_image.png`,
   button: {
    title: "Get in Touch",
   },
  },
  cardRight: {
   title: "TS Media",
   desc: `Our content-driven production focuses on travel, lifestyle, culinary, sports, hobbies and finance.
   `,
   imageURL: `/src/assets/image/ts_image.png`,
   button: {
    title: "Get in Touch",
   },
  },
 }),
 methods: {},
};
</script>
<style lang="scss">
.jumbotron {
 @apply flex flex-col px-6 pt-6;

 @screen lg {
  @apply flex-row items-center pt-16 pr-0 pl-16;
 }

 @screen 2xl {
  @apply pt-24 pb-12 pl-28;
 }

 &__header {
  @apply text-center;

  @screen lg {
   @apply flex-1 text-left pr-16;
  }
 }

 &__title {
  @apply font-bold text-2xl pb-4 2xl:pb-12 lg:text-4xl xl:text-5xl xl:w-3/4;
 }

 &__lead {
  @screen 2xl {
   @apply w-3/4;
  }
 }

 &__image {
  @apply order-first;

  @screen lg {
   @apply flex-auto w-1/4 order-2;
  }

  @screen 2xl {
   width: 8%;
  }

  img {
   @apply h-full w-full;
  }
 }
}

.products__overview {
 @apply grid grid-cols-2 grid-rows-2 gap-5 items-center justify-items-center px-8 sm:px-14 xl:px-0 rounded-xl h-44 sm:h-32 2xl:h-36;

 @screen sm {
  @apply grid-cols-4 grid-rows-1;
 }

 &__item {
  @apply items-center w-20 sm:w-28 xl:w-36 2xl:w-40;

  img {
   @apply w-full h-full;
  }
 }
}

.features {
 @apply p-8 lg:py-20 xl:pb-32 2xl:pb-28;
 ul {
  @screen sm {
   @apply flex py-16 space-y-0;
  }
 }
}

.brands {
 @apply space-y-6;
 &__item {
  img {
   @apply h-40;
  }
 }
}
</style>
