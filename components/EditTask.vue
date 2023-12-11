<template>
  <CustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md"
      >
        <p class="text-lg text-black dark:text-white font-semibold">
          Edit Task
        </p>
        <form class="py-6 flex flex-col gap-6" @submit.prevent="submitForm">
          <div class="form-box">
            <label for="title">Title</label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              name="title"
              placeholder="e.g Take coffee break"
              class="text-black dark:text-white"
              :class="{ '!border-red !border': $v.title.$error }"
            />
            <span v-if="$v.title.$error" class="text-xs text-red">
              Title is required
            </span>
          </div>
          <div class="form-box">
            <label for="desc">Description</label>
            <textarea
              id="desc"
              v-model="form.description"
              type="text"
              name="desc"
              cols="30"
              rows="5"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
  recharge the batteries a little."
              class="text-black dark:text-white"
              :class="{ '!border-red !border': $v.description.$error }"
            />
            <span v-if="$v.description.$error" class="text-xs text-red">
              Description is required
            </span>
          </div>
          <CustomKButton
            variant="primary"
            size="lg"
            class="w-full"
            :is-loading="editing"
          >
            <p class="text-white text-sm">Save changes</p>
          </CustomKButton>
        </form>
      </div>
    </template>
  </CustomKModal>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { type PropType } from "vue";
import { type Task } from "../helper/type";

defineEmits(["close-modal"]);

const props = defineProps({
  task: {
    type: (Object as PropType<Task>) || null,
    required: true,
  },
});

const { form, editTask, editing } = useEditTask();

const show = ref<boolean>(true);

const rules = computed(() => {
  return {
    id: { required },
    title: { required },
    description: { required },
    status: { required },
  };
});

const $v = useVuelidate(rules, form);

const submitForm = async () => {
  const isFormCorrect = await $v.value.$validate();
  if (isFormCorrect) {
    editTask();
  }
};

onBeforeMount(() => {
  if (props.task) {
    form.value = props.task;
  }
});
</script>
