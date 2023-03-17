import { ReactNode, createContext, useEffect, useState } from "react";
import { Itens } from "../interface/IContent";

interface ProductContextType {
    object: Itens[];
    setObject: (newState: []) => void;
}

interface UserContextProps {
    children: ReactNode;
}

const localItem = JSON.parse(localStorage.getItem('cart') || '[]')

const initialValue = {
    object: localItem as Itens[],
    setObject: () => []
};

export const Context = createContext<ProductContextType>(initialValue);

export const Provider = ({ children }: UserContextProps) => {

    const [object, setObject] = useState<Itens[]>(initialValue.object);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(object))
    }, [object])

    return (
        <Context.Provider value={{ object, setObject }}>
            {children}
        </Context.Provider>
    )
}