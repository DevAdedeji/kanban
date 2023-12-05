<template>
  <button
    class="flex items-center justify-center gap-1"
    :class="buttonStyle"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
  type: {
    type: String,
    default: "primary",
  },
});

const buttonStyle = computed(() => {
  let style = "";
  if (props.type === "primary") {
    style += "bg-blue hover:bg-light_blue";
  } else if (props.type === "secondary") {
    style += "bg-[#EFEFF9] hover:bg-[#D8D7F1]";
  } else if (props.type === "danger") {
    style += "bg-red hover:bg-light_red";
  }
  if (props.size === "sm") {
    style += " py-2 px-6 rounded-2xl";
  } else if (props.size === "lg") {
    style += " py-3 px-10 rounded-3xl";
  }
  return style;
});
</script>
