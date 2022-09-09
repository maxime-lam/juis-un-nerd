import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './component/Banner';
import Footer from './component/Footer';

import Home from './pages/Home';
import CalcJs from './pages/CalcJs';
import Stage1 from './pages/Stage1';
import Stage2 from './pages/stage2';






function App() {
  return (
    <div className="App">
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route index element={
              <Home
                  titleMain='Bienvenue sur mon Portfolio' titleSkill="Mes Compétences"
                  titleProject="Mes Projets" titleExperience="Mes Experiences"
             />
          } />
          <Route path='/calcjs' element={<CalcJs title="Calculatrice JavaScript" />} />
          <Route path='/stage1' element={<Stage1 title="Stage de première année de BTS"/>} />
          <Route path='/stage2' element={<Stage2 title="Stage de deuxième année de BTS"/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
