import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../context/GlobalState";
import ArtworkList from "./ArtworkList";


function Other() {
    const { artworks } = useContext(GlobalContext);

    return (
        <div className="content">
            <h1 className="title">Other Atrworks</h1>
            <ArtworkList artworks={artworks.filter(item => 
                !item.term_titles.includes('Renaissance') && 
                !item.term_titles.includes('Impressionism') && 
                !item.term_titles.includes('Post-Impressionism')
            )} />
        </div>
    );
}

export default Other;
