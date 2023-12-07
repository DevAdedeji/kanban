<template>
  <div class="flex w-full h-full bg-lighter_gray dark:bg-light_black relative">
    <SideBar v-if="showSidebar" @close="showSidebar = false" />
    <div v-else class="fixed top-0 left-0 bottom-0">
      <button
        type="button"
        class="absolute bg-blue rounded-tr-[100px] rounded-br-[100px] h-[56px] w-[56px] flex items-center justify-center cursor-pointer bottom-10"
        aria-label="Show sidebar button"
        @click="showSidebar = true"
      >
        <img src="/eye.png" class="w-[16px] h-[10px]" />
      </button>
    </div>
    <div
      :class="showSidebar ? 'ml-[280px]' : ''"
      class="w-full overflow-hidden"
    >
      <TopBar :show-sidebar="showSidebar" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const showSidebar = ref<boolean>(true);
</script>

<style scoped>
/* Your component's CSS goes here */
</style>
