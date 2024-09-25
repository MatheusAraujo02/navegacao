import React, { createContext, useState, useContext } from "react";

const AtividadeContext = createContext();

export const AtividadesProvider = ({ children }) => {
    const [atividadesLidas, setAtividadesLidas] = useState({});

    const toggleAtividadeLida = (id) => {
        setAtividadesLidas((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return(
        <AtividadeContext.Provider value ={{ atividadesLidas, toggleAtividadeLida}}> 
            {children}
        </AtividadeContext.Provider>
    );
};

export const useAtividades = () => useContext(AtividadeContext);