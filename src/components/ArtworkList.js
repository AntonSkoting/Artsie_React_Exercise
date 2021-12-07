import ArtworkItem from "./ArtworkItem";


function ArtworkList({ artworks }) {

    function compareAlfabeticaly(str1, str2) {
        let result = 0;
        for (let i = 0; i < Math.min(str1.length, str2.length) && result === 0; i++) {
            if (str1[i].toLowerCase() > str2[i].toLowerCase()) result = 1;
            if (str1[i].toLowerCase() < str2[i].toLowerCase()) result = -1;
        }
        if (result === 0) result = str2.length - str1.length;

        return result;
    }

    function compareArtist(artwork1, artwork2) {
        if(!artwork1.artist_title && !artwork2.artist_title) return 0;
        if(!artwork1.artist_title) return 1;
        if(!artwork2.artist_title) return -1;
        return compareAlfabeticaly(
            artwork1.artist_title.split(' ').reverse().join(' '),
            artwork2.artist_title.split(' ').reverse().join(' ')
        );
    }

    function compareYear(artwork1, artwork2) {
        if(!artwork1.date_end && !artwork2.date_end) return 0;
        if(!artwork1.date_end) return 1;
        if(!artwork2.date_end) return -1;
        return artwork2.date_end - artwork1.date_end;
    }

    function sortFunction(artwork1, artwork2) {
        let result = compareArtist(artwork1, artwork2);
        if(result === 0) result = compareYear(artwork1, artwork2);
        return result;
    }

    return(
        <div>
            {artworks.sort(sortFunction).map(artwork => {
                return <ArtworkItem key={artwork.id} artwork={artwork} />
            })}
        </div>
    );
}

export default ArtworkList;
