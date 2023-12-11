import { type Task } from "~/helper/type";

export const useEditTask = () => {
  const toast = useToast();
  const client = useSupabaseClient();
  const { activeBoard } = useBoard();
  const route = useRoute();
  const { toggleEditTaskModal } = useModal();

  const form = ref({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const id = activeBoard.value?.id || route.params.id;
  const updating = ref<boolean>(false);
  const editing = ref<boolean>(false);

  const updateTaskStatus = async (task: Task, status: string) => {
    if (activeBoard.value) {
      updating.value = true;
      // So as to lose its reactivity
      const board = reactive(JSON.parse(JSON.stringify(activeBoard.value)));
      const updatedOldStatusColumn = board[task.status].filter(
        (myTask: Task) => myTask.id !== task.id,
      );
      board[task.status] = updatedOldStatusColumn;
      task.status = status;
      const updatedNewStatusColum = board[task.status];
      updatedNewStatusColum.push(task);
      board[task.status] = updatedNewStatusColum;
      const { error } = await client.from("boards").update(board).eq("id", id);
      if (!error) {
        toast.add({
          title: "Task status updated successfully",
          icon: "i-heroicons-check-circle",
        });
        activeBoard.value = board;
      } else {
        toast.add({
          title:
            error.message || "Couldn't update task status, pls try again later",
          icon: "i-heroicons-x-circle",
        });
      }
      updating.value = false;
    }
  };

  const editTask = async () => {
    if (activeBoard.value) {
      editing.value = true;
      // So as to lose its reactivity
      const board = reactive(JSON.parse(JSON.stringify(activeBoard.value)));
      const taskId = form.value.id;
      let taskToBeUpdated = board[form.value.status].find(
        (task: Task) => task.id === taskId,
      );
      const taskToBeUpdatedIndex = board[form.value.status].findIndex(
        (task: Task) => task.id === taskId,
      );
      taskToBeUpdated = form.value;
      board[form.value.status][taskToBeUpdatedIndex] = taskToBeUpdated;
      const { data, error } = await client
        .from("boards")
        .upsert(board)
        .select("*");
      if (data) {
        activeBoard.value = board;
        toast.add({
          title: "Task updated successfully",
          icon: "i-heroicons-check-circle",
        });
        toggleEditTaskModal();
        return;
      }
      if (error) {
        toast.add({
          title: error.message || "Couldn't update task status, pls try again",
          icon: "i-heroicons-x-circle",
        });
      }
      editing.value = false;
    }
  };
  return { updateTaskStatus, updating, editTask, editing, form };
};
