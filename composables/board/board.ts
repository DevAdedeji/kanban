import { type BoardType, type Task } from "~/helper/type";
import { columns } from "~/helper/data";

const activeBoard = ref<BoardType | null>(null);
const fetchingBoards = ref<boolean>(false);
const boards = ref<BoardType[]>([]);

export const useBoard = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const toast = useToast();

  const openBoard = (val: BoardType) => {
    activeBoard.value = val;
  };

  const fetchBoards = async () => {
    fetchingBoards.value = true;
    const { data, error } = await useAsyncData("boards", async () => {
      const data = await client
        .from("boards")
        .select("*")
        .eq("user_id", user.value ? user.value.id : "")
        .order("created_at");
      return data.data as unknown as BoardType[];
    });
    if (data.value) {
      boards.value = data.value;
    }
    fetchingBoards.value = false;
    return { data, error };
  };

  const updateBoardTasks = async () => {
    // So as to lose its reactivity
    const board = reactive(JSON.parse(JSON.stringify(activeBoard.value)));
    columns.forEach((column) => {
      if (board[column.id].length > 0) {
        board[column.id].forEach((task: Task) => {
          task.status = column.id;
        });
      }
    });
    const { data, error } = await client
      .from("boards")
      .upsert(board)
      .select("*");
    if (data) {
      activeBoard.value = board;
      return;
    }
    if (error) {
      toast.add({
        title: error.message || "Couldn't update task status, pls try again",
        icon: "i-heroicons-x-circle",
      });
    }
  };

  const updateCurrentBoard = async (id: string | string[]) => {
    const { data } = await useAsyncData("boards", async () => {
      const data = await client
        .from("boards")
        .select("*")
        .eq("user_id", user.value ? user.value.id : "")
        .order("created_at");
      return data.data as unknown as BoardType[];
    });
    if (data.value) {
      boards.value = data.value;
      const currentBoard = boards.value.find(
        (board: BoardType) => board.id === id,
      );
      if (currentBoard) {
        activeBoard.value = currentBoard;
      }
    }
  };

  return {
    activeBoard,
    openBoard,
    fetchBoards,
    boards,
    fetchingBoards,
    updateBoardTasks,
    updateCurrentBoard,
  };
};
