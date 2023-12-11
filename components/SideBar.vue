<template>
  <aside
    class="fixed top-0 left-0 bottom-0 bg-white dark:bg-dark_gray h-screen w-[250px] md:w-[280px] overflow-y-hidden"
  >
    <div class="px-6 h-24 flex items-center justify-center">
      <ClientOnly>
        <img v-if="!isDark" src="/logo_light.png" alt="Kanban logo" />
        <img v-if="isDark" src="/logo_dark.png" alt="Kanban logo" />
      </ClientOnly>
    </div>
    <div class="pt-4">
      <p
        class="px-6 text-medium_gray text-xs uppercase tracking-[2.4px] font-bold"
      >
        All boards ({{ boards.length + 1 }})
      </p>
      <ul
        class="mt-5 flex flex-col gap-4 w-full styled_scrollbar overflow-y-auto min-h-[50vh] h-[50vh] max-h-[50vh]"
      >
        <li
          class="px-6 min-h-[48px] flex items-center h-[48px]hover:dark:bg-light_black cursor-pointer dark:font-semibold tracking-wider hover:dark:bg-light_black"
          :class="
            route.path === '/board/demo'
              ? 'bg-blue rounded-tr-[100px] rounded-br-[100px] text-white'
              : 'hover:bg-[#EFEFF9] rounded-tr-[100px] rounded-br-[100px] text-medium_gray hover:text-blue'
          "
        >
          <nuxt-link
            class="w-full h-full flex items-center gap-4"
            to="/board/demo"
          >
            <IconsBoardIcon :active="route.path === '/board/demo'" />
            <p>
              {{ "Demo Project" }}
            </p>
          </nuxt-link>
        </li>
        <li
          v-for="board in boards"
          :key="board.id"
          class="px-6 min-h-[48px] flex items-center h-[48px] cursor-pointer dark:font-semibold tracking-wider hover:dark:bg-light_black"
          :class="
            route.path === `/board/${board.id}`
              ? 'bg-blue rounded-tr-[100px] rounded-br-[100px] text-white'
              : 'hover:bg-[#EFEFF9] rounded-tr-[100px] rounded-br-[100px] text-medium_gray hover:text-blue'
          "
        >
          <nuxt-link
            class="w-full h-full flex items-center gap-4"
            :to="`/board/${board.id}`"
          >
            <IconsBoardIcon :active="route.path === `/board/${board.id}`" />
            <p>
              {{ board.name }}
            </p>
          </nuxt-link>
        </li>
        <li
          class="px-6 flex items-center min-h-[48px] h-[48px] cursor-pointer text-blue hover:bg-[#EFEFF9] rounded-tr-[100px] rounded-br-[100px] hover:dark:bg-light_black dark:font-semibold tracking-wider"
        >
          <button
            class="flex items-center gap-4 w-full"
            aria-label="Create new board button"
            @click="toggleCreateBoardModal"
          >
            <IconsBoardIcon :active="false" :button="true" />
            <div class="flex items-center gap-1">
              <IconsPlusIcon color="blue" />
              <p>Create New Board</p>
            </div>
          </button>
        </li>
      </ul>
    </div>
    <div class="w-full absolute left-0 right-0 bottom-6 px-6">
      <button
        class="flex items-center justify-center gap-4 h-[48px] bg-light_gray dark:bg-light_black rounded mb-2 w-full"
        aria-label="Log out button"
        @click="logOut"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          :style="`fill: ${
            isDark ? '#ffffff' : '#000000'
          }; transform:; msfilter:`"
        >
          <path d="m2 12 5 4v-3h9v-2H7V8z"></path>
          <path
            d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"
          ></path>
        </svg>
        <p class="text-black dark:text-white hover:text-blue">Log out</p>
      </button>
      <div
        class="flex items-center justify-center gap-6 bg-light_gray dark:bg-light_black h-[48px] rounded"
      >
        <button
          class="cursor-pointer"
          aria-label="Turn on light mode display"
          @click="toggleTheme('light')"
        >
          <img src="/sun.png" class="w-[18px] h-[18px]" alt="light mode icon" />
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
          <img
            src="/night.png"
            class="w-[18px] h-[18px]"
            alt="dark mode icon"
          />
        </button>
      </div>
      <button
        class="flex items-center gap-2 mt-4 cursor-pointer"
        type="button"
        aria-label="Hide sidebar button"
        @click="$emit('close')"
      >
        <img
          src="/eye-slash.png"
          class="w-[18px] h-[18px]"
          alt="hide sidebar icon"
        />
        <p class="text-medium_gray font-semibold">Hide Sidebar</p>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineEmits(["close"]);
const colorMode = useColorMode();
const route = useRoute();
const { toggleCreateBoardModal } = useModal();
const { boards } = useBoard();
const { logOut } = useAuth();

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
  if (colorMode.preference === "dark") {
    darkMode.value = true;
  } else {
    darkMode.value = false;
  }
};

// const active = ref<boolean>(true);
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
