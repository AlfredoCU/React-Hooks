export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]; // Concatenas los objetos dentro de un array.  //* action.payload es un objeto.

    case "delete":
      return state.filter((todo) => todo.id !== action.payload); // Regresa un nuevo arreglo. //* action.payload es un id.

    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      break;
  }

  return state;
};

// case "toggle-old":
//   console.log(state);
//   return state.map((todo) => {
//     //* action.payload es un id.
//     if (todo.id === action.payload) {
//       return {
//         ...todo,
//         done: !todo.done,
//       };
//     } else {
//       return todo;
//     }
//   });
