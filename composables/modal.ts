const showCreateTaskModal = ref<boolean>(false);
const showCreateBoardModal = ref<boolean>(false);
const showEditBoardModal = ref<boolean>(false);
const showDeleteTaskModal = ref<boolean>(false);
const showDeleteBoardModal = ref<boolean>(false);
const showViewTaskModal = ref<boolean>(false);
const showEditTaskModal = ref<boolean>(false);

export const useModal = () => {
  const toggleCreateTaskModal = () => {
    showCreateTaskModal.value = !showCreateTaskModal.value;
  };

  const toggleCreateBoardModal = () => {
    showCreateBoardModal.value = !showCreateBoardModal.value;
  };

  const toggleEditBoardModal = () => {
    showEditBoardModal.value = !showEditBoardModal.value;
  };

  const toggleViewTaskModal = () => {
    showViewTaskModal.value = !showViewTaskModal.value;
  };

  const toggleEditTaskModal = () => {
    showEditTaskModal.value = !showEditTaskModal.value;
  };

  const toggleDeleteBoardModal = () => {
    showDeleteBoardModal.value = !showDeleteBoardModal.value;
  };

  const toggleDeleteTaskModal = () => {
    showDeleteTaskModal.value = !showDeleteTaskModal.value;
  };

  return {
    toggleCreateTaskModal,
    showCreateTaskModal,
    toggleCreateBoardModal,
    showCreateBoardModal,
    toggleEditBoardModal,
    showEditBoardModal,
    toggleViewTaskModal,
    showViewTaskModal,
    toggleEditTaskModal,
    showEditTaskModal,
    toggleDeleteBoardModal,
    showDeleteBoardModal,
    toggleDeleteTaskModal,
    showDeleteTaskModal,
  };
};
