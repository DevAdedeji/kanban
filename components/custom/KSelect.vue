<template>
  <div ref="target" class="relative">
    <div
      class="h-10 rounded border p-2 cursor-pointer flex items-center justify-between"
      :class="[
        showOptions ? 'border-blue' : 'border-[#979797]',
        error ? '!border-red !border' : '',
      ]"
      @click="showOptions = !showOptions"
    >
      <p class="text-sm">
        {{ selected ? selected.label : "Select an option" }}
      </p>
      <IconsArrowDown />
    </div>
    <div
      v-if="showOptions"
      class="absolute top-12 left-0 right-0 z-10 bg-white dark:bg-black overflow-hidden shadow-xl border border-light_gray dark:border-none dark:border-[#979797] rounded-lg"
    >
      <ul class="min-h-[8vh] max-h-[20vh] overflow-y-auto styled_scrollbar">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="p-2 border-b dark:border-none border-light_gray dark:border-[#979797] hover:bg-light_gray hover:dark:bg-dark_gray cursor-pointer text-sm"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  options: Option[];
  error: Boolean;
}

const props = defineProps<SelectProps>();
const emits = defineEmits(["select"]);

watch(props, () => {});

const selected = ref<Option | null>(null);
const showOptions = ref<boolean>(false);
const target = ref<HTMLDivElement | null>(null);

const selectOption = (val: Option) => {
  selected.value = val;
  emits("select", val);
  showOptions.value = false;
};
onClickOutside(target, (_event) => {
  showOptions.value = false;
});
</script>

<style scoped>
.styled_scrollbar::-webkit-scrollbar {
  width: 6px; /* width of the entire scrollbar */
}

.styled_scrollbar::-webkit-scrollbar-track {
  background: transparent; /* color of the tracking area */
}

.styled_scrollbar::-webkit-scrollbar-thumb {
  background-color: #828fa3; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid transparent; /* creates padding around scroll thumb */
}
</style>
