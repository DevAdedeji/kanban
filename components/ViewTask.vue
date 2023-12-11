<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md flex flex-col gap-4"
      >
        <div class="flex items-center justify-between relative">
          <h1 class="text-lg font-semibold">{{ task.title }}</h1>
          <button
            class="cursor-pointer p-2 dropdown_toggler"
            type="button"
            aria-label="Toggle board option"
            @click="toggleBoardOptions"
          >
            <IconsDotY />
          </button>
          <div
            v-if="showBoardOptions"
            class="absolute right-4 top-10 shadow-2xl z-50"
          >
            <ul
              class="bg-white dark:bg-dark_gray shadow-xl p-4 rounded flex flex-col gap-2"
            >
              <li>
                <button
                  class="text-medium_gray text-sm"
                  @click="toggleEditTaskModal"
                >
                  Edit Task
                </button>
              </li>
              <li @click="$emit('delete-task')">
                <button class="text-red text-sm">Delete Task</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-xs text-medium_gray">Description:</span>
          <p class="text-medium_gray text-base">{{ task.description }}</p>
        </div>
        <div class="form-box">
          <label for="status">Status</label>
          <CustomKSelect
            :options="statusOptions"
            :value="status"
            :error="false"
            @select="statusSelected"
          />
        </div>
      </div>
    </template>
  </LazyCustomKModal>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import { type Task } from "../helper/type";
const props = defineProps({
  task: {
    type: (Object as PropType<Task>) || null,
    required: true,
  },
});
defineEmits(["close-modal", "delete-task"]);

const { updateTaskStatus } = useEditTask();
const { showEditTaskModal, showViewTaskModal } = useModal();

interface Option {
  value: string;
  label: string;
}

const show = ref<boolean>(true);
const showBoardOptions = ref<boolean>(false);
const status = ref<Option | null>(null);
const statusOptions = ref([
  {
    label: "To do",
    value: "todo",
  },
  {
    label: "In progress",
    value: "inprogress",
  },
  {
    label: "Done",
    value: "done",
  },
  {
    label: "Dump",
    value: "dump",
  },
]);

const toggleBoardOptions = () => {
  if (showBoardOptions.value) {
    showBoardOptions.value = false;
  } else {
    showBoardOptions.value = true;
  }
};

const toggleEditTaskModal = () => {
  showEditTaskModal.value = true;
  showViewTaskModal.value = true;
};

const statusSelected = (val: Option) => {
  status.value = val;
  updateTaskStatus(props.task, status.value.value);
};

onBeforeMount(() => {
    console.log(props.task);
  const currentStatus = statusOptions.value.find(
    (status: Option) => status.value === props.task.status,
  );
  if (currentStatus) {
    status.value = currentStatus;
  }
});

const handleOnClickOutside = (event: MouseEvent) => {
  const classList = (event.target as HTMLElement).classList;
  if (!classList.contains("dropdown_toggler")) {
    const classListArray = Array.from(classList);
    if (classListArray && classListArray.length > 0) {
      const hasDropdownClass = classListArray.some((classItem) =>
        classItem.includes("dropdown"),
      );
      if (!hasDropdownClass) {
        showBoardOptions.value = false;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("click", handleOnClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleOnClickOutside);
});
</script>
