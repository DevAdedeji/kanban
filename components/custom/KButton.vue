<template>
  <button class="flex items-center justify-center gap-2" :class="buttonStyle">
    <span v-if="isLoading" class="loader"></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
  variant: {
    type: String,
    default: "primary",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const buttonStyle = computed(() => {
  let style = "";
  if (props.variant === "primary") {
    style += "bg-blue hover:bg-light_blue";
  } else if (props.variant === "secondary") {
    style += "bg-[#EFEFF9] hover:bg-[#D8D7F1]";
  } else if (props.variant === "danger") {
    style += "bg-red hover:bg-light_red";
  }
  if (props.size === "sm") {
    style += " py-2 px-4 sm:px-6 rounded-2xl";
  } else if (props.size === "lg") {
    style += " py-3 px-8 sm:px-10 rounded-3xl";
  }
  return style;
});
</script>

<style scoped>
.loader {
  width: 1.2rem;
  height: 1.2rem;
  border: 0.1rem solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>
