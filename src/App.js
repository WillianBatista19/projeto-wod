import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import Recomendacao from './components/Pages/Recomendacao/recomendacao';
import Sistemas from './components/Pages/Sistemas/sistemas';
import Sobre from './components/Pages/Sobre/sobre'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/recomendacoes' element={<Recomendacao />} />
        <Route path='/sistemas' element={<Sistemas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
