<template>
  <main class="w-full p-6 overflow-hidden">
    <p class="text-red text-sm pb-6 font-semibold tracking-wider">
      Note: Only drag and drop functionality is available for demo, create a new
      board to be able to use all functionalities
    </p>
    <div
      class="board-container overflow-x-auto min-h-screen no_style_scrollbar gap-6"
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
      title="Delete Modal?"
      desc="Are you sure you want to delete the ‘Demo’ project and its tasks? This action cannot be reversed."
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
