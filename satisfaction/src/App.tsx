import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components/layout.style.component";
import { Provider } from "react-redux/es/exports";
import { store } from "./redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
