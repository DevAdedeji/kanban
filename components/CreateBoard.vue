<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div class="bg-white dark:bg-dark_gray w-[480px] p-6 rounded-md">
        <p class="text-lg text-black dark:text-white font-semibold">
          Create New Board
        </p>
        <form class="py-6 flex flex-col gap-6">
          <div class="form-box">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g Web Design"
              class="text-black dark:text-white"
            />
          </div>
          <CustomKButton type="primary" size="lg" class="w-full">
            <p class="text-white text-sm">Create Board</p>
          </CustomKButton>
        </form>
      </div>
    </template>
  </LazyCustomKModal>
</template>

<script setup lang="ts">
defineEmits(["close-modal"]);
const show = ref<boolean>(true);
</script>
