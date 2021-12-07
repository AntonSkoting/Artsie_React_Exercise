

function ArtworkItem({ artwork }) {
    return (
        <div style={{ marginTop: '50px', borderBottom: '1px solid gray' }} className="artwork">
            <div style={{ textAlign: 'center' }}>
                <a target='_blank' rel="noreferrer" href={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}>
                    <img
                        style={{ maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain' }}
                        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                        alt={artwork.title}
                    />
                </a>
            </div>
            <div>
                <p>{artwork.title + ', ' + artwork.date_end}</p>
                <p style={{ textAlign: 'right', fontStyle: 'italic' }}>
                    {artwork.artist_display}
                </p>
                {false && <p>{artwork.term_titles.join(', ')}</p>}
            </div>
        </div>
    );
}

export default ArtworkItem;
