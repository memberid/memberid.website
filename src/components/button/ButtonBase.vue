<template>
 <button class="button__base" :class="classColor" @click="goTo">
  <slot />
 </button>
</template>
<script>
export default {
 props: ["color", "href", "to"],
 computed: {
  classColor() {
   return this.color === "primary"
    ? "bg-primary text-white"
    : "bg-white text-primary";
  },
 },
 methods: {
  goTo() {
   if (this.href) {
    window.open(this.href, "_blank");
   } else if (this.to) {
    this.$router.push({
     name: this.to,
    });
   }
  },
 },
};
</script>
<style lang="scss">
button {
 @apply focus:outline-none;
}
.button {
 &__base {
  @apply py-2 px-4 font-medium rounded-xl shadow-md;
 }
}
</style>
