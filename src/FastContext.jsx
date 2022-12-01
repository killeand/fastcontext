import { createContext } from "react";
import useStoreData from './useStoreData';

const FastContext = createContext(null);

export function FastContextProvider({children}) {
    return (
        <FastContext.Provider value={useStoreData({
            first: "",
            last: ""
        })}>
            {children}
        </FastContext.Provider>
    );
}

export default FastContext;