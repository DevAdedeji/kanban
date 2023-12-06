<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div class="bg-white h-[500px] w-[500px]">
        <p>Hello</p>
      </div>
    </template>
  </LazyCustomKModal>
</template>

<script setup lang="ts">
defineEmits(["close-modal"]);
const show = ref<boolean>(true);
</script>
