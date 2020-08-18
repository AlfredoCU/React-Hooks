const initialState = [
  {
    id: 1,
    todo: "Comprar camisa", // Tarea a realizar.
    done: false, // status de la tarea.
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload]; // Un array de objetos.
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar pantalon",
  done: false,
};

const agregarTodoAction = {
  type: "agregar", // La accion a realizar.
  payload: newTodo, // (carga util) también se puede enviar sólo con newTodo, pero por estandar se usa el payload
};

//* Parametros: Estado anterior y acción.
todos = todoReducer(todos, agregarTodoAction);
console.log(todos);
