import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../context/GlobalState";
import ArtworkList from "./ArtworkList";


function Renaissance() {
    const { artworks } = useContext(GlobalContext);

    return(
        <div className="content">
            <h1 className="title">Renaissance</h1>
            <ArtworkList artworks={artworks.filter(item => item.term_titles.includes('Renaissance'))} />
        </div>
    );
}

export default Renaissance;