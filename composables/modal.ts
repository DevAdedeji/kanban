const showCreateTaskModal = ref<boolean>(false);
const showCreateBoardModal = ref<boolean>(false);
const showEditBoardModal = ref<boolean>(false);
const showDeleteModal = ref<boolean>(false);
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

  const toggleDeleteModal = () => {
    showDeleteModal.value = !showDeleteModal.value;
  };

  const toggleViewTaskModal = () => {
    showViewTaskModal.value = !showViewTaskModal.value;
  };

  const toggleEditTaskModal = () => {
    showEditTaskModal.value = !showEditTaskModal.value;
  };

  return {
    toggleCreateTaskModal,
    showCreateTaskModal,
    toggleCreateBoardModal,
    showCreateBoardModal,
    toggleEditBoardModal,
    showEditBoardModal,
    toggleDeleteModal,
    showDeleteModal,
    toggleViewTaskModal,
    showViewTaskModal,
    toggleEditTaskModal,
    showEditTaskModal,
  };
};
