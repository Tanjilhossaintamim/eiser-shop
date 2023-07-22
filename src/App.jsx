import { Provider } from "react-redux";
import "./App.css";
import MainComponents from "./components/MainComponents";
import Store from "./redux/Store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
