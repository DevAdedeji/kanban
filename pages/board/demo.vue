<template>
  <main class="w-full p-6 overflow-hidden">
    <div class="container overflow-auto min-h-[100vh] no_style_scrollbar gap-6">
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
  </main>
</template>

<script lang="ts" setup>
import { dummyData, columns } from "../../helper/data";
definePageMeta({
  layout: "default",
});
const { showCreateTaskModal } = useCreateTaskModal();
const { openBoard } = useBoard();
onBeforeMount(() => {
  openBoard(dummyData.value);
});
</script>

<style scoped>
.container {
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
</style>
