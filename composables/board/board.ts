import { type BoardType } from "~/helper/type";

const activeBoard = ref<BoardType | null>(null);
const fetchingBoards = ref<boolean>(false);
const boards = ref<BoardType[]>([]);

export const useBoard = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();

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

  return { activeBoard, openBoard, fetchBoards, boards };
};
