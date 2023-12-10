export const useCreateBoard = () => {
  const toast = useToast();
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const { boards } = useBoard();
  const { toggleCreateBoardModal } = useModal();
  const creating = ref<boolean>(false);

  const form = reactive({
    name: "",
    user_id: user.value?.id,
  });

  const createBoard = async () => {
    creating.value = true;
    const { data, error } = await client
      .from("boards")
      .upsert(form)
      .select("*");
    if (data) {
      toast.add({
        title: "Board created successfully",
        icon: "i-heroicons-check-circle",
      });
      boards.value.push(data[0]);
      toggleCreateBoardModal();
    }
    if (error) {
      toast.add({
        title: error.message || "Couldn't create board, pls try again later",
        icon: "i-heroicons-x-circle",
      });
    }
    creating.value = false;
  };
  return { createBoard, creating, form };
};
