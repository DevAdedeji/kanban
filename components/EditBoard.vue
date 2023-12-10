<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md"
      >
        <p class="text-lg text-black dark:text-white font-semibold">
          Edit Board
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
          <CustomKButton variant="primary" size="lg" class="w-full">
            <p class="text-white text-sm">Save Changes</p>
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
