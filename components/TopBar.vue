<template>
  <nav
    class="w-full bg-white dark:bg-dark_gray h-24 flex items-center justify-between px-6 sticky top-0"
  >
    <div class="flex items-center gap-6">
      <div v-if="!showSidebar" class="p-6">
        <img v-if="!isDark" src="/logo_light.png" alt="Kanban logo" />
        <img v-if="isDark" src="/logo_dark.png" alt="Kanban logo" />
      </div>
      <h2 class="text-black dark:text-white text-2xl font-semibold">
        Platform Launch
      </h2>
    </div>
    <div class="flex items-center gap-6">
      <CustomKButton size="sm" type="primary" @click="toggleCreateTaskModal">
        <img src="@/assets/icons/plus.svg" />
        <p class="text-white text-sm">Add New Task</p>
      </CustomKButton>
      <button
        class="cursor-pointer"
        type="button"
        aria-label="Toggle board option"
        @click="showBoardOptions = !showBoardOptions"
      >
        <img src="@/assets/icons/dots-y.svg" />
      </button>
    </div>
    <div
      v-if="showBoardOptions"
      class="bg-white dark:bg-dark_gray absolute right-6 top-24 shadow p-4 rounded"
    >
      <ul class="flex flex-col gap-2">
        <li>
          <button class="text-medium_gray text-sm">Edit board</button>
        </li>
        <li><button class="text-red text-sm">Delete board</button></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  showSidebar: {
    type: Boolean,
  },
});
const colorMode = useColorMode();
const { toggleCreateTaskModal } = useCreateTaskModal();

const showBoardOptions = ref<boolean>(false);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
