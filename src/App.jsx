import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import HeritageDetailPage from './pages/HeritageDetailPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import CulturalStoriesPage from './pages/CulturalStoriesPage';
import CulturalStoryDetailPage from './pages/CulturalStoryDetailPage';
import HeritageMapPage from './pages/HeritageMapPage';
import SearchDiscoverPage from './pages/SearchDiscoverPage';
import SavedHeritagePage from './pages/SavedHeritagePage';
import AboutPage from './pages/AboutPage';
import BambooCraftPage from './pages/BambooCraftPage';
import DistrictProductsPage from './pages/DistrictProductsPage';
import BambooProductDetailPage from './pages/BambooProductDetailPage';
import DistrictPage from './pages/DistrictPage';
import DistrictProductDetailPage from './pages/DistrictProductDetailPage';

// Scroll To Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            
            {/* District Heritage Routes */}
            <Route path="/district/:districtId" element={<DistrictPage />} />
            <Route path="/district/:districtId/:categoryId/:productId" element={<DistrictProductDetailPage />} />
            <Route path="/district/:districtId/:productId" element={<DistrictProductDetailPage />} />

            {/* Bamboo Craft Feature Routes */}
            <Route path="/crafts/bamboo" element={<BambooCraftPage />} />
            <Route path="/crafts/bamboo/:districtId" element={<DistrictProductsPage />} />
            <Route path="/crafts/bamboo/:districtId/:productId" element={<BambooProductDetailPage />} />
            <Route path="/explore/crafts/bamboo" element={<BambooCraftPage />} />
            <Route path="/explore/crafts/bamboo/:districtId" element={<DistrictProductsPage />} />
            <Route path="/explore/crafts/bamboo/:districtId/:productId" element={<BambooProductDetailPage />} />

            <Route path="/heritage/:id" element={<HeritageDetailPage />} />
            <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
            <Route path="/stories" element={<CulturalStoriesPage />} />
            <Route path="/stories/:id" element={<CulturalStoryDetailPage />} />
            <Route path="/map" element={<HeritageMapPage />} />
            <Route path="/search" element={<SearchDiscoverPage />} />
            <Route path="/saved" element={<SavedHeritagePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
        <MobileNavbar />
      </div>
    </Router>
  );
}
