export const useEditBoard = () => {
  const toast = useToast();
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const { activeBoard, boards } = useBoard();
  const route = useRoute();
  const { toggleEditBoardModal } = useModal();
  const updating = ref<boolean>(false);

  const form = reactive({
    name: activeBoard.value?.name || "",
    user_id: user.value?.id,
    id: activeBoard.value?.id || route.params.id,
  });

  const editBoard = async () => {
    updating.value = true;
    const { data, error } = await client
      .from("boards")
      .upsert(form)
      .select("*");
    if (data) {
      const updatedData = data[0];
      const oldDataIndex = boards.value.findIndex(
        (board) => Number(board.id) === Number(form.id),
      );
      if (oldDataIndex !== -1) {
        activeBoard.value = updatedData;
        boards.value[oldDataIndex] = updatedData;
        toast.add({
          title: "Board updated successfully",
          icon: "i-heroicons-check-circle",
        });
      } else {
        toast.add({
          title: "Board updated successfully, pls refresh to see changes",
          icon: "i-heroicons-check-circle",
        });
      }
      toggleEditBoardModal();
    }
    if (error) {
      toast.add({
        title: error.message || "Couldn't update board, pls try again later",
        icon: "i-heroicons-x-circle",
      });
    }
    updating.value = false;
  };
  return { editBoard, updating, form };
};
