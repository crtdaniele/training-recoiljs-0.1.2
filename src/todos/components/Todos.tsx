import React from "react";
import fetchTodos from "../api";
import { TodosItem } from "../types";
import useStore from "../../hooks/useStore";

const Todos = () => {
  const { state, contents } = useStore(fetchTodos, true);

  return (
    <>
      {state === "hasValue" &&
        contents?.map((item: TodosItem) => (
          <div key={item.id}>{item.title}</div>
        ))}
    </>
  );
};

export default Todos;
