export type TodosList = {
  contents: TodosItem[];
};

export type TodosItem = {
  userId: number;
  id: number;
  title: string;
  complted: boolean;
};
