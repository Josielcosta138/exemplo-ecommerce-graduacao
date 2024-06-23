import { FC, useState } from "react";
import "./index.css";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { AlternateEmail, Key, Visibility, VisibilityOff } from "@mui/icons-material";
import InputSelect from "../../components/inputSelect";
import { listaGeneros } from "./type";
import { STATU_CODE, apiPost } from "../../api/RestClient";


const Clientes : FC = ({
   
  
}) => {
    const [genero, setGeneros] = useState<string>();
    const [nome, setNome] = useState<string>();
    const [sobrenome, setSobrenome] = useState<string>();
    const [documento, setDocumento] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [cpf, setCpf] = useState<string>();

    const salvarCliente = async () => {
        const data = { 
            nome: nome,
            sobrenome: sobrenome,
            documento: documento,
            email: email,
            senha: senha,
            sexo: genero,
            dataNascimento : "1999-03-12"
        }

        const response = await apiPost("/clientes/", data);

        if(response.status === STATU_CODE.CREATED){
            alert("Cliente cadastrado com sucesso!")
        }
    }

    return <>
        <div className="div-nome">
            <div className="div-clientes">
            <div className="div-nome-linha">
                <div className="div-nome">
                    <TextField 
                        value={nome}
                        fullWidth
                        label="NOME"
                        type="nome"
                        onChange={(event) => {
                            if (event) {
                                setNome(event.target.value);
                            }
                        }}  
                    />
                </div>
                <div className="div-nome">
                        <TextField 
                            value={sobrenome}
                            fullWidth
                            label="SOBRENOME"
                            type="Sobrenome"
                            onChange={(event) => {
                                if (event) {
                                    setSobrenome(event.target.value);
                                }
                            }}
                        />
                </div>
                <div className="div-nome">
                        <TextField 
                            value={cpf}
                            fullWidth
                            label="CPF"
                            type="CPF"
                            onChange={(event) => {
                                if (event) {
                                    setCpf(event.target.value);
                                }
                            }}
                               
                        />
                </div>
                <div className="div-nome">
                        <TextField 
                            value={documento}
                            fullWidth
                            label="DOCUMENTO"
                            type="document"
                            onChange={(event) => {
                                if (event) {
                                    setDocumento(event.target.value);
                                }
                            }}
                               
                        />
                </div>

                <div className="div-nome">
                        <InputSelect 
                            lista={listaGeneros}
                            valor={genero}
                            label={"GENEROS"}
                            atualizarValor={(valor : any) => {
                                setGeneros(valor);
                            }}
                        />
                </div>

                <div className="div-nome">
                        <TextField 
                            value={email}
                            fullWidth
                            label="E-MAIL"
                            type="e-mail"
                            onChange={(event) => {
                                if (event) {
                                    setEmail(event.target.value);
                                }
                            }}
                        />
                </div>

                <div className="div-nome">
                        <TextField 
                            value={senha}
                            fullWidth
                            label=" SENHA"
                            type="password"
                            onChange={(event) => {
                                if (event) {
                                    setSenha(event.target.value);
                                }
                            }}
                            
                        />
                </div>     
                <div className="div-nome">
                    <Button 
                        variant="contained"
                            onClick={() => {
                                salvarCliente()
                            }}>
                    Salvar</Button>
                </div>

            </div>
        </div>
       </div>

    </>
}
export default Clientes;