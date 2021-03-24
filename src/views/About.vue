<template>
 <div class="main__about">
  <div class="main__section">
   <div class="about__list">
    <div
     class="about__item"
     v-for="(itemAbout, idx) in abouts"
     :key="idx"
     @click="selectAbout(itemAbout.name)"
     :class="selected === itemAbout.name ? 'active' : ''"
    >
     <ButtonBase
      ><img
       class="h-full w-full"
       :class="itemAbout.name === 'Member.id' ? 'invert' : ''"
       :src="itemAbout.logo"
     /></ButtonBase>
    </div>
   </div>
   <AboutItem
    v-for="(item, idx) in abouts"
    :key="idx"
    :name="item.name"
    :logo="item.logo"
    :description="item.description"
    v-show="selected === item.name"
   />
   <!-- <div
    class="about"
    v-for="(item, idx) in abouts"
    :key="idx"
    v-show="selected === item.name"
   >
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
       <img
        :class="item.name === 'Member.id' ? 'invert' : ''"
        :src="item.logo"
       />
      </transition>
     </div>
     <div
      class="about__description"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="300"
     >
      <p
       v-html="item.description"
       data-aos="fade-up"
       data-aos-anchor-placement="top-center"
      />
     </div>
    </div>

   </div> -->
   <div
    class="about__body desktop"
    data-aos="fade-left"
    data-aos-anchor-placement="top-center"
   >
    <div class="about__background">
     <img :src="imageBackground" alt="" />
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import AOS from "aos";
import imageBackground from "@/assets/image/mid_image.jpg";
import memberLogo from "@/assets/Logo.svg";
import tsLogo from "@/assets/ts_logo.svg";
export default {
 data: () => ({
  isShow: true,
  selected: "Member.id",
  imageBackground: imageBackground,
  abouts: [
   {
    name: "Member.id",
    logo: memberLogo,
    description: `Data-driven loyalty consulting and technology firm providing businesses
       with long-term loyalty solutions and rewarding customer experience.
       <br /><br />
       Our company was built by a team of people who gets geeky about collecting
       points, we are avid travelers and consumers who have experienced
       first-hand the benefits of staying loyal to a brand.
       <br /><br />
       We feel that other people should be able to experience the same
       advantage. That’s why member.id was conceived. Our mission is to change
       the loyalty landscape in Indonesia by offering capabilities ranging from
       loyalty program strategy development, design, management and analytics.`,
    background: "/src/assets/image/mid_image.jpg",
   },
   {
    name: "TS Media",
    logo: tsLogo,
    description: ` Created out of our passion for travel and sharing inspiring stories, TS
       Media was established to inspire, educate and entertain audiences of
       different segments of travel, culinary, lifestyle, hobbies, sports and
       finance.
       <br /><br />
       By collaborating with different brands and talents, together we can
       create quality contents and targeted digital campaigns by focusing on
       awareness, activation and retention.`,
    background: "/src/assets/image/mid_image.jpg",
   },
  ],
 }),
 computed: {
  selectedAbout() {
   return this.abouts.filter(item => {
    return item.name === this.selected;
   });
  },
 },
 methods: {
  async selectAbout(name) {
   this.isShow = false;
   this.selected = name;
   this.isShow = true;
  },
 },
};
</script>
<style lang="scss">
.about {
 &__body {
  @apply absolute right-0 top-0 h-full;
 }
 &__list {
  @apply relative sm:absolute z-50 flex items-center mt-0 sm:mt-8 space-x-12;
 }
 &__item {
  @apply opacity-40;
  transition: opacity 0.3s;
  &:hover,
  &.active {
   @apply opacity-100;
  }
  button {
   @apply w-32 h-10;
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
}
</style>
