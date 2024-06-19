import { FC, useEffect, useState } from "react";
import { obterCliente } from "../../store/ClienteStore/clienteStore";
import { IClienteStore } from "../../store/ClienteStore/types";
import { STATU_CODE, apiGet } from "../../api/RestClient";

const CheckoutEndereco : FC = () =>{
    const [endereco, setEndereco] = useState();
    const cliente: IClienteStore = obterCliente();
    const [enderecoList, setEnderecoList] = useState();
    
    const carregarEnderecos = async() => {
        const response = await apiGet(`/enderecos/${cliente.id}`)
        if (response.status === STATU_CODE.OK) {
            setEnderecoList(response.data);
        }
    }

    useEffect(() => {
        carregarEnderecos(); 
    }, []); // só executa ao reiderizar pagina
    return <>
        Teste
    </>
}
export default CheckoutEndereco;