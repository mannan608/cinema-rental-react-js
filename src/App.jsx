import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Home from "./pages/Home";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Home />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
