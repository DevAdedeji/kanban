import { type Task } from "~/helper/type";

export const useDeleteTask = () => {
  const toast = useToast();
  const client = useSupabaseClient();
  const { activeBoard } = useBoard();
  const { toggleViewTaskModal, toggleDeleteTaskModal } = useModal();
  const route = useRoute();
  const deleting = ref<boolean>(false);

  const id = activeBoard.value?.id || route.params.id;

  const deleteTask = async (task: Task) => {
    if (activeBoard.value) {
      deleting.value = true;
      // So as to lose its reactivity
      const board = reactive(JSON.parse(JSON.stringify(activeBoard.value)));
      const updatedColumn = board[task.status].filter(
        (myTask: Task) => myTask.id !== task.id,
      );
      board[task.status] = updatedColumn;
      const { error } = await client.from("boards").update(board).eq("id", id);
      if (!error) {
        toast.add({
          title: "Task deleted successfully",
          icon: "i-heroicons-check-circle",
        });
        activeBoard.value = board;
        deleting.value = false;
        toggleDeleteTaskModal();
        toggleViewTaskModal();
      } else {
        toast.add({
          title: error.message || "Couldn't delete task, pls try again later",
          icon: "i-heroicons-x-circle",
        });
      }
      deleting.value = false;
    }
  };
  return { deleteTask, deleting };
};
