import axios from 'axios';
import { useContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import Home from './components/Home';
import Impressionism from './components/Impressionism';
import Other from './components/Other';
import PostImpressionism from './components/PostImpressionism';
import Renaissance from './components/Renaissance';
import { GlobalContext } from './context/GlobalState';


async function getArtworks() {
  return (await axios.get('https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true', {
    params: {
      size: 100,
      fields: ['id', 'title', 'artist_display', 'artist_title', 'term_titles', 'date_end', 'style_title', 'image_id']
    }
  })).data;
}

function App() {
  const { setArtworks, artworks } = useContext(GlobalContext);
  console.log(artworks);

  useEffect(() => {
    //if (!artworks.length) getArtworks().then(res => setArtworks(res.data));
    if (!artworks.length) getArtworks().then(res => setArtworks(res.data.filter(item => 
      (item.term_titles.includes('painting') || item.term_titles.includes('drawings (visual works)')) && 
      !item.term_titles.includes('Modernism')
    )));
    console.log(artworks);
  });

  return (
    <div className="App">
      <header>
        <h1>Artsie</h1>
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/renaissance">Renaissance</Link>
          <Link className="link" to="/impressionism">Impressionism</Link>
          <Link className="link" to="/post-impressionism">Post-Impressionism</Link>
          <Link className="link" to="/other-artworks">Other Atrworks</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renaissance" element={<Renaissance />} />
        <Route path="/impressionism" element={<Impressionism />} />
        <Route path="/post-impressionism" element={<PostImpressionism />} />
        <Route path="/other-artworks" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
