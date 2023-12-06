<template>
  <aside
    class="fixed top-0 left-0 bottom-0 bg-white dark:bg-dark_gray h-screen w-[300px] overflow-y-hidden"
  >
    <div class="px-6 h-24 flex items-center justify-center">
      <img v-if="!isDark" src="/logo_light.png" alt="Kanban logo" />
      <img v-if="isDark" src="/logo_dark.png" alt="Kanban logo" />
    </div>
    <div class="pt-14">
      <p
        class="px-6 text-medium_gray text-xs uppercase tracking-[2.4px] font-bold"
      >
        All boards (1)
      </p>
      <ul
        class="mt-5 flex flex-col gap-2 w-full styled_scrollbar overflow-y-auto min-h-[50vh] h-[50vh] max-h-[50vh]"
      >
        <li
          class="px-6 flex items-center gap-4 min-h-[48px] h-[48px] cursor-pointer"
          :class="
            active
              ? 'bg-blue rounded-tr-[100px] rounded-br-[100px]'
              : 'hover:text-blue'
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
              :fill="active ? 'white' : '#828FA3'"
            />
          </svg>
          <p :class="active ? 'text-white' : 'text-medium_gray'">
            Platform Launch
          </p>
        </li>
        <!-- <li
          v-for="i in 10"
          :key="i"
          class="px-6 flex items-center gap-4 min-h-[48px] h-[48px] cursor-pointer hover:text-blue"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
              fill="#828FA3"
            />
          </svg>
          <p class="text-medium_gray">Platform Launch</p>
        </li> -->
      </ul>
    </div>
    <div class="w-full absolute left-0 right-0 bottom-6 px-6">
      <div
        class="flex items-center justify-center gap-6 bg-light_gray dark:bg-dark_gray h-[48px] rounded"
      >
        <button
          class="cursor-pointer"
          aria-label="Turn on light mode display"
          @click="toggleTheme('light')"
        >
          <img src="/sun.png" />
        </button>
        <UToggle
          v-model="darkMode"
          color="white"
          class="!bg-blue"
          aria-label="Toggle display mode"
        />
        <button
          class="cursor-pointer"
          aria-label="Turn on dark mode display"
          @click="toggleTheme('dark')"
        >
          <img src="/night.png" />
        </button>
      </div>
      <button
        class="flex items-center gap-2 mt-4 cursor-pointer"
        type="button"
        aria-label="Hide sidebar button"
        @click="$emit('close')"
      >
        <img src="/eye-slash.png" />
        <p class="text-medium_gray font-semibold">Hide Sidebar</p>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
defineEmits(["close"]);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const toggleTheme = (val: string) => {
  colorMode.preference = val;
};

const active = ref<Boolean>(true);
const darkMode = ref(false);
onBeforeMount(() => {
  if (colorMode.preference === "dark") {
    darkMode.value = true;
  } else {
    darkMode.value = false;
  }
});
watch(darkMode, (val) => {
  if (val) {
    toggleTheme("dark");
  } else {
    toggleTheme("light");
  }
});
</script>

<style scoped>
.styled_scrollbar::-webkit-scrollbar {
  width: 4px; /* width of the entire scrollbar */
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
