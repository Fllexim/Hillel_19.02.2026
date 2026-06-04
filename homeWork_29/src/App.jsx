import { store } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/Main";
import ButtonDecrement from "./components/ButtonDecrement";
import ButtonIncrement from "./components/ButtonIncrement";

function App() {
  return (
    <Provider store={store}>
      <Main />
      <ButtonIncrement />
      <ButtonDecrement />
    </Provider>
  );
}

export default App;
