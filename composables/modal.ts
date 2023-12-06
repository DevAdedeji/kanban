const showCreateTaskModal = ref<boolean>(false);
export const useCreateTaskModal = () => {
  const toggleCreateTaskModal = () => {
    showCreateTaskModal.value = !showCreateTaskModal.value;
  };
  return { toggleCreateTaskModal, showCreateTaskModal };
};
