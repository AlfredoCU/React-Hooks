export const testTodos = [
  {
    id: 1,
    desc: "Aprender React",
    done: false,
  },
  {
    id: 2,
    desc: "Aprender Vue",
    done: false,
  },
];

const newTodo = {
  id: 3,
  desc: "Aprender Angular",
  done: false,
};

export const actionAdd = {
  type: "add",
  payload: newTodo,
};

export const actionDelete = {
  type: "delete",
  payload: 3,
};

export const actionToggle = {
  type: "toggle",
  payload: 1,
};
