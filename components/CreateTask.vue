<template>
  <CustomKModal :show="show" @close-modal="$emit('close-modal')">
    <template #content>
      <div
        class="bg-white dark:bg-dark_gray w-[90vw] sm:w-[480px] p-6 rounded-md"
      >
        <p class="text-lg text-black dark:text-white font-semibold">
          Add new Task
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
          <div class="form-box">
            <label for="status">Status</label>
            <CustomKSelect
              :options="statusOptions"
              :error="$v.status.$error"
              :value="null"
              @select="statusSelected"
            />
            <span v-if="$v.status.$error" class="text-xs text-red">
              Status is required
            </span>
          </div>
          <CustomKButton
            variant="primary"
            size="lg"
            class="w-full"
            :is-loading="creating"
          >
            <p class="text-white text-sm">Create Task</p>
          </CustomKButton>
        </form>
      </div>
    </template>
  </CustomKModal>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

defineEmits(["close-modal"]);

const { form, createTask, creating } = useCreateTask();

interface Option {
  value: string;
  label: string;
}

const show = ref<boolean>(true);
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
]);

const statusSelected = (val: Option) => {
  form.status = val.value;
};

const rules = computed(() => {
  return {
    title: { required },
    description: { required },
    status: { required },
  };
});

const $v = useVuelidate(rules, form);

const submitForm = async () => {
  const isFormCorrect = await $v.value.$validate();
  if (isFormCorrect) {
    createTask();
  }
};
</script>
