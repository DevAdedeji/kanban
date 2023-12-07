<template>
  <aside
    class="fixed top-0 left-0 bottom-0 bg-white dark:bg-dark_gray h-screen w-[280px] overflow-y-hidden"
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
          class="px-6 min-h-[48px] flex items-center h-[48px] cursor-pointer"
          :class="
            active
              ? 'bg-blue rounded-tr-[100px] rounded-br-[100px]'
              : 'hover:text-blue'
          "
        >
          <nuxt-link class="w-full flex items-center gap-4" to="/board/demo">
            <IconsBoardIcon :active="active" />
            <p :class="active ? 'text-white' : 'text-medium_gray'">
              {{ "Demo Project" }}
            </p>
          </nuxt-link>
        </li>
        <li
          class="px-6 flex items-center gap-4 min-h-[48px] h-[48px] cursor-pointer hover:text-blue"
        >
          <IconsBoardIcon :active="false" :button="true" />
          <div class="flex items-center gap-1">
            <IconsPlusIcon color="blue" />
            <p class="text-blue">Create New Board</p>
          </div>
        </li>
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
          <img src="/sun.png" class="w-[18px] h-[18px]" />
        </button>
        <UToggle
          v-model="darkMode"
          class="!bg-blue"
          aria-label="Toggle display mode"
        />
        <button
          class="cursor-pointer"
          aria-label="Turn on dark mode display"
          @click="toggleTheme('dark')"
        >
          <img src="/night.png" class="w-[18px] h-[18px]" />
        </button>
      </div>
      <button
        class="flex items-center gap-2 mt-4 cursor-pointer"
        type="button"
        aria-label="Hide sidebar button"
        @click="$emit('close')"
      >
        <img src="/eye-slash.png" class="w-[18px] h-[18px]" />
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

const active = ref<boolean>(true);
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
