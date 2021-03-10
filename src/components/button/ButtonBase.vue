<template>
 <button class="button__base" :class="classColor">
  <slot />
 </button>
</template>
<script>
export default {
 props: ["color"],
 computed: {
  classColor() {
   return this.color === "primary"
    ? "bg-primary text-white"
    : "bg-white text-primary";
  },
 },
};
</script>
<style lang="scss">
.button {
 &__base {
  @apply py-2 px-4 font-medium rounded-xl shadow-md;
 }
}
</style>
