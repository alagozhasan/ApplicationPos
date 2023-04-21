import HomePage from "../../../ApplicationPos/client/src/pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartPage from "../../../ApplicationPos/client/src/pages/CartPage";
import NotFound from "../../../ApplicationPos/client/src/pages/NotFound";
import BillPage from "../../../ApplicationPos/client/src/pages/BillPage";
import CustomerPage from "../../../ApplicationPos/client/src/pages/CustomerPage";
import StatisticsPage from "../../../ApplicationPos/client/src/pages/StatisticsPage";
import Register from "../../../ApplicationPos/client/src/pages/auth/Register";
import Login from "../../../ApplicationPos/client/src/pages/auth/Login";
import ProductPage from "./pages/ProductPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/sepet" element={<CartPage/>} />
                <Route path="/faturalar" element={<BillPage/>} />
                <Route path="/*" element={<NotFound/>} />
                <Route path="/musteriler" element={<CustomerPage/>} />
                <Route path="/kayit" element={<Register/>} />
                <Route path="/giris" element={<Login/>} />
                <Route path="/istatistik" element={<StatisticsPage/>} />
                <Route path="/urunler" element={<ProductPage/>} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;