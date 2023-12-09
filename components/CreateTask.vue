<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md"
      >
        <p class="text-lg text-black dark:text-white font-semibold">
          Add new Task
        </p>
        <form class="py-6 flex flex-col gap-6">
          <div class="form-box">
            <label for="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="e.g Take coffee break"
              class="text-black dark:text-white"
            />
          </div>
          <div class="form-box">
            <label for="desc">Description</label>
            <textarea
              id="desc"
              type="text"
              name="desc"
              cols="30"
              rows="5"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
              class="text-black dark:text-white"
            />
          </div>
          <div class="form-box">
            <label for="status">Status</label>
            <CustomKSelect :options="statusOptions" />
          </div>
          <CustomKButton type="primary" size="lg" class="w-full">
            <p class="text-white text-sm">Create Task</p>
          </CustomKButton>
        </form>
      </div>
    </template>
  </LazyCustomKModal>
</template>

<script setup lang="ts">
defineEmits(["close-modal"]);
const show = ref<boolean>(true);
const statusOptions = ref([
  {
    label: "Todo",
    value: "todo",
  },
  {
    label: "In Progress",
    value: "inprogrss",
  },
  {
    label: "Done",
    value: "done",
  },
]);
</script>
