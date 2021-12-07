import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ArtworkList from "./ArtworkList";


function Impressionism() {
    const { artworks } = useContext(GlobalContext);

    return(
        <div className="content">
            <h1 className="title">Impressionism</h1>
            <ArtworkList artworks={artworks.filter(item => item.term_titles.includes('Impressionism'))} />
        </div>
    );
}

export default Impressionism;
