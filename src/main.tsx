import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/configureStore.ts";
import Home from "./pages/Home.tsx";
import ContextProvider from "./state/provider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </Provider>
);
