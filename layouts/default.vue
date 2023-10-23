<template>
  <div class="flex w-full h-full bg-lighter_gray dark:bg-light_black">
    <SideBar v-if="showSidebar" @close="showSidebar = false" />
    <div v-else class="fixed top-0 left-0 bottom-0">
      <div
        class="absolute bg-blue rounded-tr-[100px] rounded-br-[100px] h-[56px] w-[56px] flex items-center justify-center cursor-pointer bottom-10"
        @click="showSidebar = true"
      >
        <img src="/eye.png" />
      </div>
    </div>
    <div :class="showSidebar ? 'ml-[300px]' : ''">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const showSidebar = ref<Boolean>(true);
</script>

<style scoped>
/* Your component's CSS goes here */
</style>
