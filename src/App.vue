<template>
 <transition
  enter-active-class="fadeIn"
  leave-active-class="fadeOut"
  mode="out-in"
 >
  <router-view style="animation-duration: 0.5s" />
 </transition>
</template>
<script>
export default {};
</script>
<style></style>
