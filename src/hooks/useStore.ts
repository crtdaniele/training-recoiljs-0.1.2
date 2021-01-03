import { useEffect } from "react";
import { RecoilValueReadOnly, useRecoilValueLoadable } from "recoil";
import useRefreshState from "./useRefreshAtom";

const useStore = <T>(
  fetchData: RecoilValueReadOnly<T>,
  refreshOnceTime: boolean
) => {
  const data = useRecoilValueLoadable(fetchData);
  const { state, contents } = data;

  const refresh = useRefreshState("todos");

  useEffect(() => {
    if (!refreshOnceTime && state !== "loading" && state !== "hasError") {
      refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state === "hasError") {
  }

  if (state === "loading") {
  }

  return {
    state,
    contents,
    refresh,
  };
};

export default useStore;
