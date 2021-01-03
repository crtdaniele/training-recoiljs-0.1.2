import { atomFamily, useSetRecoilState } from "recoil";

export const refreshAtom = atomFamily({
  key: "refreshAtom",
  default: 0,
});

export default function useRefreshState(key: string) {
  const setState = useSetRecoilState(refreshAtom(key));

  function refresh() {
    setState((state) => {
      console.log(state);
      return state + 1;
    });
  }

  return refresh;
}
