<template>
  <nav
    v-if="activeBoard"
    class="w-full bg-white dark:bg-dark_gray h-24 flex items-center justify-between px-6 sticky top-0 max-w-[1500px]"
  >
    <div class="flex items-center gap-6">
      <div v-if="!showSidebar" class="p-6">
        <img v-if="!isDark" src="/logo_light.png" alt="Kanban logo" />
        <img v-if="isDark" src="/logo_dark.png" alt="Kanban logo" />
      </div>
      <div class="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Kanban logo"
          class="w-[24px] h-[25px] sm:hidden"
        />
        <h2
          class="text-black dark:text-white text-lg sm:text-2xl font-semibold"
        >
          {{ activeBoard.name || "N/A" }}
        </h2>
        <button
          class="flex items-center justify-center sm:hidden dropdown_toggler"
          aria-label="Toggle mobile menu"
          @click="showMobileMenu = !showMobileMenu"
        >
          <img
            src="/arrow.png"
            alt="arrow"
            class="w-[24px] h-[24px dropdown_toggler duration-100"
            :class="showMobileMenu ? 'rotate-180' : ''"
          />
        </button>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <CustomKButton size="sm" variant="primary" @click="toggleCreateTaskModal">
        <IconsPlusIcon />
        <p class="text-white text-sm hidden sm:block">Add New Task</p>
      </CustomKButton>
      <button
        class="cursor-pointer p-2 dropdown_toggler"
        type="button"
        aria-label="Toggle board option"
        @click="toggleBoardOptions"
      >
        <IconsDotY />
      </button>
    </div>
    <div v-if="showBoardOptions" class="absolute right-6 top-24 my_shadow">
      <ul
        class="bg-white dark:bg-dark_gray shadow-xl p-4 rounded flex flex-col gap-2 z-50"
      >
        <li>
          <button
            class="text-medium_gray text-base md:text-sm"
            @click="toggleEditBoardModal"
          >
            Edit board
          </button>
        </li>
        <li>
          <button
            class="text-red text-base md:text-sm"
            @click="toggleDeleteModal"
          >
            Delete board
          </button>
        </li>
      </ul>
    </div>
    <div
      v-if="showMobileMenu"
      class="absolute top-[100px] left-6 right-0 rounded bg-white dark:bg-dark_gray w-[264px] h-[322px] my_shadow sm:hidden mobile_menu"
    >
      <div class="pt-4">
        <p
          class="px-6 text-medium_gray text-xs uppercase tracking-[2.4px] font-bold"
        >
          All boards (1)
        </p>
        <ul
          class="mt-5 flex flex-col gap-4 w-full styled_scrollbar overflow-y-auto min-h-[150px] h-[150px] max-h-[150px]"
        >
          <li
            class="px-6 min-h-[40px] flex items-center h-[40px] cursor-pointer dark:font-semibold tracking-wider hover:dark:bg-light_black"
            :class="
              route.path === '/board/demo'
                ? 'bg-blue rounded-tr-[100px] rounded-br-[100px] text-white'
                : 'hover:bg-[#EFEFF9] rounded-tr-[100px] rounded-br-[100px] text-medium_gray hover:text-blue'
            "
            @click="showMobileMenu = false"
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
            class="px-6 min-h-[40px] flex items-center h-[40px] cursor-pointer dark:font-semibold tracking-wider hover:dark:bg-light_black"
            :class="
              route.path === `/board/${board.id}`
                ? 'bg-blue rounded-tr-[100px] rounded-br-[100px] text-white'
                : 'hover:bg-[#EFEFF9] rounded-tr-[100px] rounded-br-[100px] text-medium_gray hover:text-blue'
            "
            @click="showMobileMenu = false"
          >
            <nuxt-link
              class="w-full flex h-full items-center gap-4"
              :to="`/board/${board.id}`"
            >
              <IconsBoardIcon :active="route.path === `/board/${board.id}`" />
              <p>
                {{ board.name }}
              </p>
            </nuxt-link>
          </li>
          <li
            class="px-6 flex items-center min-h-[40px] h-[40px] cursor-pointer text-blue hover:bg-[#EFEFF9] rounded-tr-[100px] rounded-br-[100px] hover:dark:bg-light_black dark:font-semibold tracking-wider"
            @click="showMobileMenu = false"
          >
            <button
              class="flex items-center gap-4 w-full h-full"
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
          class="flex items-center justify-center gap-4 h-[40px] bg-light_gray dark:bg-light_black rounded mb-2 w-full"
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
          class="flex items-center justify-center gap-6 bg-light_gray dark:bg-dark_gray h-[40px] rounded"
        >
          <button
            class="cursor-pointer"
            aria-label="Turn on light mode display"
            @click="toggleTheme('light')"
          >
            <img
              src="/sun.png"
              class="w-[18px] h-[18px]"
              alt="light mode icon"
            />
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
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  showSidebar: {
    type: Boolean,
  },
});
const colorMode = useColorMode();
const route = useRoute();
const {
  toggleCreateTaskModal,
  toggleEditBoardModal,
  toggleDeleteModal,
  toggleCreateBoardModal,
} = useModal();
const { activeBoard, boards } = useBoard();
const { logOut } = useAuth();

const showBoardOptions = ref<boolean>(false);
const showMobileMenu = ref<boolean>(false);
const darkMode = ref(false);

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

const toggleBoardOptions = () => {
  if (showBoardOptions.value) {
    showBoardOptions.value = false;
  } else {
    showBoardOptions.value = true;
  }
};

watch(darkMode, (val) => {
  if (val) {
    toggleTheme("dark");
  } else {
    toggleTheme("light");
  }
});

onBeforeMount(() => {
  if (colorMode.preference === "dark") {
    darkMode.value = true;
  } else {
    darkMode.value = false;
  }
});

const handleOnClickOutside = (event: MouseEvent) => {
  const classList = (event.target as HTMLElement).classList;
  if (!classList.contains("dropdown_toggler")) {
    const classListArray = Array.from(classList);
    if (classListArray && classListArray.length > 0) {
      const hasDropdownClass = classListArray.some((classItem) =>
        classItem.includes("dropdown"),
      );
      if (!hasDropdownClass) {
        showBoardOptions.value = false;
        showMobileMenu.value = false;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("click", handleOnClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleOnClickOutside);
});
</script>
