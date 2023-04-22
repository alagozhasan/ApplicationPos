import HomePage from "../../../ApplicationPos/client/src/pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CartPage from "../../../ApplicationPos/client/src/pages/CartPage";
import NotFound from "../../../ApplicationPos/client/src/pages/NotFound";
import BillPage from "../../../ApplicationPos/client/src/pages/BillPage";
import CustomerPage from "../../../ApplicationPos/client/src/pages/CustomerPage";
import StatisticsPage from "../../../ApplicationPos/client/src/pages/StatisticsPage";
import Register from "../../../ApplicationPos/client/src/pages/auth/Register";
import Login from "../../../ApplicationPos/client/src/pages/auth/Login";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
  localStorage.setItem("cart",JSON.stringify(cart))
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouterControl>
              <HomePage />
            </RouterControl>
          }
        />
        <Route
          path="/sepet"
          element={
            <RouterControl>
              <CartPage />
            </RouterControl>
          }
        />
        <Route
          path="/faturalar"
          element={
            <RouterControl>
              <BillPage />
            </RouterControl>
          }
        />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/musteriler"
          element={
            <RouterControl>
              <CustomerPage />
            </RouterControl>
          }
        />
        <Route path="/kayit" element={<Register />} />
        <Route path="/giris" element={<Login />} />
        <Route
          path="/istatistik"
          element={
            <RouterControl>
              <StatisticsPage />
            </RouterControl>
          }
        />
        <Route
          path="/urunler"
          element={
            <RouterControl>
              <ProductPage />
            </RouterControl>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export const RouterControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/giris" />;
  }
};
