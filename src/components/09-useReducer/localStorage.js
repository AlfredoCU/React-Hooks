const saveLocalStorage = () => {
  const user = {
    name: "Alfredo",
    lastName: "CU",
    email: "alf11cu@gmail.com",
  };
  localStorage.setItem("user", JSON.stringify(user));
};

const getLocalStorage = () => {
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  } else {
    console.log("No hay data");
  }
};

saveLocalStorage();
getLocalStorage();

// alfredo = new Person(); invocacion de function, crea un contexto y un espacio de memoria
