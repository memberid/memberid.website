<template>
 <div class="main__about">
  <div class="main__section">
   <div
    class="about"
    v-for="(item, idx) in abouts"
    :key="idx"
    v-show="selected === item.name"
   >
    <div class="about__head">
     <div class="main__underline w-1" />
     <div class="about__logo">
      <transition name="fade">
       <img
        :class="item.name === 'Member.id' ? 'invert' : ''"
        :src="item.logo"
       />
      </transition>
     </div>
     <div class="about__description">
      <p v-html="item.description" />

      <div class="about__list">
       <div
        class="about__item"
        v-for="itemAbout in abouts"
        @click="selected = itemAbout.name"
        :class="selected === itemAbout.name ? 'active' : ''"
       >
        <img
         :class="itemAbout.name === 'Member.id' ? 'invert' : ''"
         :src="itemAbout.logo"
        />
       </div>
      </div>
     </div>
    </div>
    <div class="about__body desktop">
     <div class="about__background">
      <img src="/src/assets/image/mid_image.jpg" alt="" />
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 data: () => ({
  selected: "Member.id",
  abouts: [
   {
    name: "Member.id",
    logo: "/src/assets/Logo.svg",
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
    logo: "/src/assets/ts_logo.svg",
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
  @apply relative flex items-center mt-8 space-x-8;
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
