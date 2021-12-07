import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state //
const initailState = {
    artworks: []
};

// Create Context //
export const GlobalContext = createContext(initailState);

// Provider Component //
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initailState);

    function setArtworks(artwork) {
        dispatch({
            type: 'SET_ARTWORKS', 
            payload: artwork
        });
    }

    return(
        <GlobalContext.Provider value={{
            artworks: state.artworks,
            setArtworks
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
