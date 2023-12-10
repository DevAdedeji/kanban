<template>
  <LazyCustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md"
      >
        <p class="text-lg text-black dark:text-white font-semibold">
          Create New Board
        </p>
        <form class="py-6 flex flex-col gap-6" @submit.prevent="submitForm">
          <div class="form-box">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="e.g Web Design"
              class="text-black dark:text-white"
              :class="{ '!border-red !border': $v.name.$error }"
            />
            <span v-if="$v.name.$error" class="text-xs text-red">
              Name is required
            </span>
          </div>
          <CustomKButton
            type="submit"
            variant="primary"
            size="lg"
            class="w-full"
            :is-loading="creating"
          >
            <p class="text-white text-sm">Create Board</p>
          </CustomKButton>
        </form>
      </div>
    </template>
  </LazyCustomKModal>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

defineEmits(["close-modal"]);
const show = ref<boolean>(true);
const { createBoard, creating, form } = useCreateBoard();

const rules = computed(() => {
  return {
    name: { required },
    user_id: { required },
  };
});

const $v = useVuelidate(rules, form);

const submitForm = async () => {
  const isFormCorrect = await $v.value.$validate();
  if (isFormCorrect) {
    createBoard();
  }
};
</script>
