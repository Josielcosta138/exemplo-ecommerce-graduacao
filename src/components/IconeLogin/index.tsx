import { PersonOutline } from "@mui/icons-material";
import React, { FC, useState } from "react";
import  "./index.css";
import { Popover } from "@mui/material";
import Login from "../Login";
import { IClienteStore } from "../../store/ClienteStore/types";
import { obterCliente } from "../../store/ClienteStore/clienteStore";

const IconeLogin : FC = () => {
    const [openPopover, setOpenPopover] = useState<boolean>(false);
    const[ancoraPopover, setAncoraPopover] = useState<HTMLDivElement | null>(null);
    const[clienteStore, setClienteStore] = useState<IClienteStore>(obterCliente);

    const onClickLogin = (evento: React.MouseEvent<HTMLDivElement>) => {
        setOpenPopover((openPopover) => !openPopover);
        setAncoraPopover(evento.currentTarget); 
    }

    const onClosePopover = () => {
        setOpenPopover(false);
    }

    return<>
        <div className="container-login" onClick={onClickLogin}>
            <div className="div-log">
            <PersonOutline color ="primary" sx={{fontSize: 40}} />
            </div>
            <div className="div-usuario">
                <div className="texto-login">Olá, {clienteStore?.nome ? clienteStore.nome : "Visitante"}</div>
                <div className="texto-login">{clienteStore?.nome ? "Seja bem vindo" : "Entre ou cadastre-se"}</div>
            </div>
        </div>

        {!clienteStore?.nome && <>
            <Popover 
            open={openPopover}
            onClose={onClosePopover}
            anchorEl={ancoraPopover}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}>
               <Login 
                    onClose={onClosePopover} 
                    onLogin={(cliente: IClienteStore) => {
                        setClienteStore(cliente);
                        onClosePopover()
                    }}
               />
        </Popover>
        </>}

       
    </>
}
export default IconeLogin;