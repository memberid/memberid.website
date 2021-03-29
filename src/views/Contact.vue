<template>
 <div class="main__contact">
  <section class="main__section">
   <div class="contact">
    <div class="contact__head pb-12">
     <div class="pb-4 text-center text-2xl lg:text-4xl xl:text-5xl font-bold">
      Contact
     </div>
     <div class="w-3/4 m-auto text-xl">
      Get in touch and let us know how we can help
     </div>
    </div>
    <div class="contact__body">
     <!-- <div class="contact__form">
      <form action="#">
       <div class="form__group">
        <label for="customerName">Name </label
        ><input id="customerName" name="customerName" required type="text" />
       </div>

       <div class="form__group">
        <label for="customerEmail">Email</label>
        <input id="customerEmail" name="customerEmail" required type="email" />
       </div>
       <ButtonBase>SUBMIT</ButtonBase>
      </form>
     </div> -->
     <div class="contact__list">
      <div
       class="contact__item"
       v-for="(item, idx) in contact"
       :key="idx"
       data-aos="fade-up"
       :data-aos-delay="100 * (idx + 2)"
      >
       <!-- <div class="text-4xl font-bold">
        {{ item.title }}
       </div> -->
       <font-awesome-icon
        class="text-6xl xl:text-7xl"
        :icon="['fad', 'mailbox']"
       />
       <div class="pt-1.5 text-4xl" v-html="item.subtitle" />
      </div>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>
<script>
export default {
 data: () => ({
  contact: [
   {
    title: "Email",
    subtitle: "info@member.id",
   },
   //    {
   //     title: "Address",
   //     subtitle: `Member.id <br>
   // The Maja Building`,
   //    },
   //    {
   //     title: "Phone Number",
   //     subtitle: `( 021 ) 27934599`,
   //    },
  ],
 }),
};
</script>
<style lang="scss">
.contact {
 height: calc(100vh - 25vh);
 &__head {
  @apply text-center;
 }
 &__list {
  @apply w-2/3 sm:w-full lg:w-2/3 m-auto block sm:flex justify-between text-center space-y-16 sm:space-y-0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 }
 &__item {
  @apply w-full flex items-center justify-center space-x-10;
 }
 &__form {
  @apply w-2/3 m-auto;
 }
}
</style>
