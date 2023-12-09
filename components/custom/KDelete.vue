<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md flex flex-col gap-6"
      >
        <p class="text-lg text-red font-semibold">
          {{ title }}
        </p>
        <p class="text-medium_gray text-sm">
          {{ desc }}
        </p>
        <div class="grid grid-cols-2 gap-4 w-full">
          <CustomKButton type="danger" size="lg" class="w-full">
            <p class="text-white text-sm font-semibold tracking-wide">Delete</p>
          </CustomKButton>
          <CustomKButton type="secondary" size="lg" class="w-full">
            <p class="text-blue text-sm font-semibold tracking-wide">Cancel</p>
          </CustomKButton>
        </div>
      </div>
    </template>
  </LazyCustomKModal>
</template>

<script setup lang="ts">
defineEmits(["close-modal"]);
const show = ref<boolean>(true);
defineProps({
  title: {
    type: String,
    required: true,
    default: "Delete?",
  },
  desc: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
