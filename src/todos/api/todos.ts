import { selector } from "recoil";
import { refreshAtom } from "../../_general/hooks/useRefreshAtom";
import { TODOS_API } from "../constants";

const fetchTodos = selector({
  key: "fetchTodos",
  get: async ({ get }) => {
    get(refreshAtom("todos"));

    try {
      const response = await fetch(TODOS_API);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export default fetchTodos;
