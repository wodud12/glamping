import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Footer from './components/Footer';

const AppDiv = styled.div`
  width: 100vw;
  height: 100%;
  padding-top: 80px;
`
function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
