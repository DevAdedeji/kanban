<template>
  <div class="h-[200vh]"></div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
const router = useRouter();
onBeforeMount(() => {
  router.push("/board/demo");
});
</script>

<style scoped>
/* Your component's CSS goes here */
</style>
