import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import MenuInicio from "./pages/MenuInicio";
import ProdutosDetalhe from "./pages/ProdutosDetalhes";
import Clientes from "./pages/Clientes";
import CheckoutEndereco from "./pages/checkoutEndereco";

const Router : FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuInicio />} />
                <Route path="/home" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/sobre" element={<Sobre /> }/>
                <Route path="/menuInicio" element={<MenuInicio />}  />
                <Route path="/produtos/detalhes/:codigoProduto" element={<ProdutosDetalhe/>} />
                <Route path="/:categoria" element={<Home />} />
                <Route path="/clientes" element={<Clientes/>} />
                <Route path="/checkout/endereco" element={<CheckoutEndereco />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;