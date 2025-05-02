import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import ComparePage from "./pages/ComparePage";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { PokemonProvider } from "./contexts/PokemonContext"

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-red-600">
          <Header />
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pokemon/:id" element={<DetailPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/pokemon/:id" element={<DetailPage />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
