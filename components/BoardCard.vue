<template>
  <div
    class="bg-white shadow-xl dark:bg-dark_gray rounded-lg px-4 py-6 font-semibold cursor-pointer"
  >
    <p class="text-black dark:text-white">{{ task.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import { type Task } from "../helper/type";
defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
});
</script>
