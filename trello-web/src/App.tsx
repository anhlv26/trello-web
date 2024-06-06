import Board from "./pages/Boards/_id";
import { Provider } from "react-redux";
import { store } from "~/reudx/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Board />
      </Provider>
    </>
  );
}

export default App;
