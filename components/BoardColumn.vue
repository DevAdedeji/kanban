<template>
  <div class="w-full">
    <!-- Title -->
    <div class="flex items-center gap-2">
      <div
        class="w-[15px] h-[15px] rounded-[50%]"
        :class="columnBulletStyle"
      ></div>
      <p class="uppercase text-sm text-medium_gray tracking-widest">
        {{ title }} ({{ cards.length }})
      </p>
    </div>
    <!-- List of tasks -->
    <draggable
      class="w-full min-h-[100vh] flex flex-col gap-4"
      :list="cards"
      :item-key="title"
      group="demo"
      @change="updateParent"
    >
      <template #item="{ element }">
        <BoardCard
          :id="element.id"
          :task="element"
          @click="toggleViewTask(element)"
        />
      </template>
    </draggable>
    <ViewTask
      v-if="showViewTaskModal && currentTask"
      :task="currentTask"
      @close-modal="showViewTaskModal = false"
      @delete-task="showDeleteModal = true"
    />
    <EditTask
      v-if="showEditTaskModal && currentTask"
      :task="currentTask"
      @close-modal="showEditTaskModal = false"
    />
    <CustomKDelete
      v-if="showDeleteModal && currentTask"
      :is-loading="deleting"
      title="Delete Task?"
      :desc="`Are you sure you want to delete the ‘${currentTask.title}’  This action cannot be reversed`"
      @close-modal="showDeleteModal = false"
      @delete="deleteTask(currentTask)"
    />
  </div>
</template>

<script setup lang="ts">
import { mergeProps } from "vue";
import { type Task } from "~/helper/type";
const props = defineProps({
  cards: {
    default: () => [],
    type: Array,
  },
  title: {
    default: "default Title",
    type: String,
  },
});
const emit = defineEmits(["change"]);

const { deleteTask, deleting } = useDeleteTask();
const { showDeleteModal, showViewTaskModal, showEditTaskModal } = useModal();

const currentTask = ref<Task | null>(null);

const columnBulletStyle = computed(() => {
  if (props.title === "To do") {
    return "bg-[#49C4E5]";
  } else if (props.title === "Dump") {
    return "bg-[#000000]";
  } else if (props.title === "Done") {
    return "bg-[#67E2AE]";
  } else {
    return "bg-[#8471F2]";
  }
});

const toggleViewTask = (val: Task) => {
  currentTask.value = val;
  showViewTaskModal.value = true;
};
const updateParent = (_e: Event) => {
  emit("change");
};
</script>
