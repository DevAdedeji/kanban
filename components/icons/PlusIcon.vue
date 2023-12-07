<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :style="iconColor"
  >
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: "",
  },
});
const iconColor = computed(() => {
  if (props.color === "blue") {
    return "fill: #635FC7;transform: ;msFilter:;";
  } else {
    return "fill: #ffffff;transform: ;msFilter:;";
  }
});
</script>
