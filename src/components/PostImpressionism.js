import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ArtworkList from "./ArtworkList";


function PostImpressionism() {
    const { artworks } = useContext(GlobalContext);

    return(
        <div className="content">
            <h1 className="title">Post-Impressionism</h1>
            <ArtworkList artworks={artworks.filter(item => item.term_titles.includes('Post-Impressionism'))} />
        </div>
    );
}

export default PostImpressionism;