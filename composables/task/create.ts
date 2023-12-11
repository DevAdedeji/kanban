export const useCreateTask = () => {
  const { activeBoard } = useBoard();
  const { toggleCreateTaskModal } = useModal();
  const toast = useToast();
  const client = useSupabaseClient();
  const route = useRoute();
  const creating = ref<boolean>(false);

  const form = reactive({
    title: "",
    description: "",
    status: "",
  });

  const id = activeBoard.value?.id || route.params.id;

  const createTask = async () => {
    if (activeBoard.value) {
      creating.value = true;
      const columnToBeUpdated = activeBoard.value[form.status];
      columnToBeUpdated.push(form);
      activeBoard.value[form.status] = columnToBeUpdated;
      const { error } = await client
        .from("boards")
        .update(activeBoard.value)
        .eq("id", id);
      if (!error) {
        toast.add({
          title: "Task created successfully",
          icon: "i-heroicons-check-circle",
        });
        toggleCreateTaskModal();
      } else {
        toast.add({
          title: error.message || "Couldn't create task, pls try again later",
          icon: "i-heroicons-x-circle",
        });
      }
      creating.value = false;
    }
  };

  return { form, createTask, creating };
};
