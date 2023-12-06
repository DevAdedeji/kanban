<template>
  <div class="h-[200vh]">
    <CreateTask
      v-if="showCreateTaskModal"
      @close-modal="showCreateTaskModal = false"
    />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
const { showCreateTaskModal } = useCreateTaskModal();
</script>

<style scoped>
/* Your component's CSS goes here */
</style>
