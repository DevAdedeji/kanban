<template>
  <main class="w-full p-6 overflow-hidden">
    <div
      v-if="activeBoard"
      class="board-container overflow-auto min-h-[100vh] no_style_scrollbar gap-6"
    >
      <!-- Columns -->
      <BoardColumn
        v-for="column in columns"
        :key="column.id"
        class="flex flex-col gap-4"
        :title="column.title"
        :cards="activeBoard[column.id]"
      />
    </div>
    <EditBoard
      v-if="showEditBoardModal"
      @close-modal="showEditBoardModal = false"
    />
    <CreateTask
      v-if="showCreateTaskModal"
      @close-modal="showCreateTaskModal = false"
    />
    <CustomKDelete
      v-if="showDeleteModal && activeBoard"
      :is-loading="deleting"
      title="Delete Modal?"
      :desc="`Are you sure you want to delete the ‘${activeBoard.name}’ and its tasks? This action cannot be reversed`"
      @close-modal="showDeleteModal = false"
      @delete="deleteBoard"
    />
  </main>
</template>

<script lang="ts" setup>
import { columns } from "~/helper/data";
definePageMeta({
  layout: "dashboard",
  middleware: ["user"],
});
const { showCreateTaskModal, showEditBoardModal, showDeleteModal } = useModal();
const { boards, activeBoard } = useBoard();
const { deleteBoard, deleting } = useDeleteBoard();
const route = useRoute();
const router = useRouter();
const toast = useToast();

watch(boards, () => {
  const id = route.params.id;
  if (boards.value) {
    const board = boards.value.find((board) => Number(board.id) === Number(id));
    if (board) {
      activeBoard.value = board;
    } else {
      toast.add({
        title: "Board not found",
        icon: "i-heroicons-x-circle",
      });
      router.push("/board/demo");
    }
  }
});

onBeforeMount(() => {
  const id = route.params.id;
  if (boards.value) {
    const board = boards.value.find((board) => Number(board.id) === Number(id));
    if (board) {
      activeBoard.value = board;
    }
  }
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
