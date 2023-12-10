<template>
  <main class="w-full p-6 overflow-hidden">
    <div
      class="board-container overflow-x-auto min-h-[100vh] no_style_scrollbar gap-6"
    >
      <!-- Columns -->
      <BoardColumn
        v-for="column in columns"
        :key="column.id"
        class="flex flex-col gap-4"
        :title="column.title"
        :cards="dummyData[column.id]"
      />
    </div>
    <CreateTask
      v-if="showCreateTaskModal"
      @close-modal="showCreateTaskModal = false"
    />
    <EditBoard
      v-if="showEditBoardModal"
      @close-modal="showEditBoardModal = false"
    />
    <CustomKDelete
      v-if="showDeleteModal"
      title="Delete Task?"
      desc="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
      @close-modal="showDeleteModal = false"
    />
  </main>
</template>

<script lang="ts" setup>
import { dummyData, columns } from "~/helper/data";
definePageMeta({
  layout: "dashboard",
  middleware: ["user"],
});
const { showCreateTaskModal, showEditBoardModal, showDeleteModal } = useModal();
const { openBoard } = useBoard();
onBeforeMount(() => {
  openBoard(dummyData.value);
});
</script>

<style scoped>
.board-container {
  display: grid;
  grid-template-columns: repeat(4, 300px);
}
.no_style_scrollbar::-webkit-scrollbar {
  display: none;
}

.no_style_scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (max-width: 700px) {
  .board-container {
    grid-template-columns: repeat(4, 280px);
  }
}
</style>
