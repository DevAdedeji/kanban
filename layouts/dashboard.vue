<template>
  <div class="flex w-full h-full bg-lighter_gray dark:bg-light_black relative">
    <SideBar
      v-if="showSidebar"
      class="hidden sm:block"
      @close="showSidebar = false"
    />
    <div v-else class="fixed top-0 left-0 bottom-0">
      <button
        type="button"
        class="absolute bg-blue rounded-tr-[100px] rounded-br-[100px] h-[56px] w-[56px] flex items-center justify-center cursor-pointer bottom-10"
        aria-label="Show sidebar button"
        @click="showSidebar = true"
      >
        <img src="/eye.png" class="w-[16px] h-[10px]" alt="show sidebar icon" />
      </button>
    </div>
    <div
      :class="showSidebar ? 'ml-0 sm:ml-[250px] md:ml-[280px]' : ''"
      class="w-full overflow-hidden"
    >
      <TopBar :show-sidebar="showSidebar" />
      <slot />
    </div>
    <CreateBoard
      v-if="showCreateBoardModal"
      @close-modal="showCreateBoardModal = false"
    />
    <CustomKDelete
      v-if="showDeleteModal"
      title="Delete Board?"
      desc="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
      @close-modal="showDeleteModal = false"
    />
  </div>
</template>

<script lang="ts" setup>
const showSidebar = ref<boolean>(true);
const { showCreateBoardModal, showDeleteModal } = useModal();
</script>

<style scoped>
/* Your component's CSS goes here */
</style>
