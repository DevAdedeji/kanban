export const useDeleteBoard = () => {
  const toast = useToast();
  const client = useSupabaseClient();
  const { activeBoard, fetchBoards } = useBoard();
  const route = useRoute();
  const { toggleDeleteBoardModal } = useModal();
  const deleting = ref<boolean>(false);

  const deleteBoard = async () => {
    deleting.value = true;
    const { error } = await client
      .from("boards")
      .delete()
      .eq("id", activeBoard.value?.id || route.params.id);
    if (!error) {
      toast.add({
        title: "Board deleted successfully",
        icon: "i-heroicons-check-circle",
      });
      fetchBoards();
      toggleDeleteBoardModal();
      deleting.value = false;
      navigateTo("/board/demo");
    } else {
      toast.add({
        title: error.message || "Couldn't delete board, pls try again later",
        icon: "i-heroicons-x-circle",
      });
    }
    deleting.value = false;
  };
  return { deleteBoard, deleting };
};
