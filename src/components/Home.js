import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


function Home() {
    const { artworks } = useContext(GlobalContext);
    const artwork = artworks.length ? artworks[Math.floor(Math.random() * artworks.length)] : null;

    return (
        <div className="content">
            <h1 className="title">Home</h1>
            <div className="half-block">
                <h2>About</h2>
                <p>
                    <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Artsie</span> is a digital Gallery of classic art divided by artstyle.<br />
                    Artworks are kindly provided by the <span style={{ fontWeight: 'bold' }}>Art Institute of Chicago</span>.<br />
                    All images are in the public domain.
                </p>
            </div>
            <div className="half-block half-block-right">
                {artwork && <div>
                    <img
                        style={{ maxHeight: '55vh', maxWidth: '100%', objectFit: 'contain' }}
                        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                        alt={artwork.title}
                    />
                    <p style={{opacity: '0.5'}}>{artwork.artist_title + ' - ' + (artwork.style_title ? artwork.style_title : 'Other')}</p>
                </div>}
            </div>
        </div>
    );
}

export default Home;
