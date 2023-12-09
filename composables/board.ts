import { type BoardType } from "~/helper/type";

const activeBoard = ref<BoardType | null>(null);

export const useBoard = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const boards = ref<BoardType[]>([]);

  const openBoard = (val: BoardType) => {
    activeBoard.value = val;
  };

  const fetchBoards = async () => {
    const { data, error } = await useAsyncData("boards", async () => {
      const data = await client
        .from("boards")
        .select("*")
        .eq("user_id", user.value ? user.value.id : "")
        .order("created_at");
      return data as unknown as BoardType[];
    });
    if (data.value) {
      boards.value = data.value;
    }
    return { data, error };
  };
  return { activeBoard, openBoard, fetchBoards, boards };
};
