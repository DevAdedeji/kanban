import { type BoardType } from "~/helper/type";

const activeBoard = ref<BoardType | null>(null);
export const useBoard = () => {
  const openBoard = (val: BoardType) => {
    activeBoard.value = val;
  };
  return { activeBoard, openBoard };
};
