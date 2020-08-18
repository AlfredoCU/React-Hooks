import React from "react";
// import Counter from "./components/01-useState/Counter";
// import CounterWithCustomHooks from "./components/01-useState/CounterWithCustomHooks";
// import Form from "./components/02-useEffect/Form";
// import FormWithCustomHooks from "./components/02-useEffect/FormWithCustomHooks";
// import Quotes from "./components/03-examples/Quotes";
// import FocusScreen from "./components/04-useRef/FocusScreen";
// import RealExampleRef from "./components/04-useRef/RealExampleRef";
// import { Layout } from "./components/05-useLayoutEffect/Layout";
// import Memo from "./components/06-useMemo/Memo";
// import MemoHook from "./components/06-useMemo/MemoHook";
// import CallBack from "./components/07-useCallback/Callback";
// import { Padre } from "./components/08-tarea-memo/Padre";
// import TodoApp from "./components/09-useReducer/TodoApp";
import MainApp from "./components/10-useContext/MainApp";
// import "./components/09-useReducer/intro-reducer";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hooks</h1>
      </header>
      <main>
        {/* <Counter />
        <CounterWithCustomHooks />
        <Form />
        <FormWithCustomHooks />
        <Quotes />
        <FocusScreen />
        <RealExampleRef />
        <Layout />
        <Memo />
        <MemoHook />
        <CallBack />
        <Padre /> */}
        {/* <TodoApp /> */}
        <MainApp />
      </main>
    </div>
  );
};

export default App;
