import { FC, useEffect, useState } from "react";
import { STATU_CODE, apiGet } from "../../api/RestClient";
import { IBtnProduto, IProduto } from "./types";
import "./index.css";
import BotaoPadrao from "../../components/BtnPadrao";
import { useParams } from "react-router-dom";

const Home : FC = () =>{
    const { categoria } = useParams();
    const [produtos, setProdutos] = useState<IProduto[]>([]); 

    const carregaProdutos = async() => {
        console.log("Categoria: ",categoria);
        let url = "/produtos/"

        if (categoria) {
            url = `/produtos/categoria/${categoria}`;
        }

        const response = await apiGet(url);
        if (response.status === STATU_CODE.OK) {
            console.log(response);
            setProdutos(response.data);

        }
    }

    useEffect(() => {
        carregaProdutos();
    }, []);

    const redirecionarDetalhesProduto = (idProduto: number) => {
        if(idProduto) {
            window.location.href = `/produtos/detalhes/${idProduto}`;
        }
    }

    return <>
        {produtos?.length ? <> 
            <div className="container">
                {produtos.map((produto: IProduto) => {
                    return <>
                       <div className="produto">
                            <a className="produto_imagem" href={`/produtos/detalhes/${produto.id}`}>
                                <img src={produto.imagemPequena}/>
                            </a>
                            <div className="produto_nome">
                                <p>{produto.nome}</p>
                            </div>
                            <div className="produto_preco">
                                <p>R$ {produto.preco}.00</p>
                                <div><BotaoPadrao label="Comprar" onClick={() => { 
                                    redirecionarDetalhesProduto((produto.id))
                                }}
                                /></div>
                            </div>
                       </div>

                    </>
                })}
            </div>
        </> : <div>Lista vazia</div>}
        
    </>
}
export default Home;