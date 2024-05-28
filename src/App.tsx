import "./style.css";
import logoSenac from "./pic/logo.png"
import MenuBar from "./components/MenuBar";
import Router from "./Router";
import CarrinhoDrawer from "./components/CarrinhoDrawer";
import IconeLogin from "./components/IconeLogin";

function App() {


  return (
   <div className="body">
      <div className="corpo">
          <header className="cabecalho">
            <div className="logo">
              < img src={logoSenac} alt="logo" />
              <div className="item-usuario">
                <IconeLogin/>
              </div>
              <div className="item-carrinho">
              <CarrinhoDrawer />
              </div>
            </div>
            <MenuBar /> 
          </header>
      <Router />
      <div className="centered">
        </div>
      </div>
   </div>
   
  ); 
}

export default App;
