<template>
  <div>
    <!-- Title -->
    <div class="flex items-center gap-2">
      <div class="w-[15px] h-[15px] bg-[#49C4E5] rounded-[50%]"></div>
      <p class="uppercase text-sm text-medium_gray tracking-widest">
        {{ title }} ({{ cards.length }})
      </p>
    </div>
    <!-- List of tasks -->
    <draggable
      class="w-full min-h-[100vh] flex flex-col gap-4"
      :list="cards"
      :item-key="title"
      group="demo"
      @change="updateParent"
    >
      <template #item="{ element }">
        <BoardCard :id="element.id" :task="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cards: {
    default: () => [],
    type: Array,
  },
  title: {
    default: "default Title",
    type: String,
  },
});
const emit = defineEmits(["change"]);

const updateParent = (_e: Event) => {
  emit("change", { type: props.title, data: props.cards });
};
</script>
