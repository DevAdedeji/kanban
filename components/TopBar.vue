<template>
  <nav
    class="w-full bg-white dark:bg-dark_gray h-24 flex items-center justify-between px-6 sticky top-0"
  >
    <div class="flex items-center gap-6">
      <div v-if="!showSidebar" class="p-6">
        <img v-if="!isDark" src="/logo_light.png" alt="Kanban logo" />
        <img v-if="isDark" src="/logo_dark.png" alt="Kanban logo" />
      </div>
      <h2
        v-if="activeBoard"
        class="text-black dark:text-white text-2xl font-semibold"
      >
        {{ activeBoard.name || "N/A" }}
      </h2>
    </div>
    <div v-if="activeBoard" class="flex items-center gap-6">
      <CustomKButton size="sm" type="primary" @click="toggleCreateTaskModal">
        <IconsPlusIcon />
        <p class="text-white text-sm">Add New Task</p>
      </CustomKButton>
      <button
        class="cursor-pointer p-2"
        type="button"
        aria-label="Toggle board option"
        @click="toggleBoardOptions"
      >
        <IconsDotY />
      </button>
    </div>
    <div
      v-if="showBoardOptions"
      ref="boardOptions"
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
import { onClickOutside } from "@vueuse/core";
defineProps({
  showSidebar: {
    type: Boolean,
  },
});
const colorMode = useColorMode();
const { toggleCreateTaskModal } = useCreateTaskModal();
const { activeBoard } = useBoard();

const showBoardOptions = ref<boolean>(false);
const boardOptions = ref<HTMLDivElement | null>(null);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

onClickOutside(boardOptions, (_event) => {
  showBoardOptions.value = false;
});

const toggleBoardOptions = () => {
  if (showBoardOptions.value) {
    showBoardOptions.value = false;
  } else {
    showBoardOptions.value = true;
  }
};
</script>
