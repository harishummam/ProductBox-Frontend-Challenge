import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ItemsScreen from "./screens/ItemsScreen";
import CartScreen from "./screens/CartScreen";
import AddItemScreen from "./screens/AddItemScreen";
import NavBar from "./components/NavBar";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/items" element={<ItemsScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/add-item" element={<AddItemScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
