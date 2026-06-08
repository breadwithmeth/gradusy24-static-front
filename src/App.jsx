import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AppStubPage from './pages/AppStubPage';
import PrivacyPage from './pages/PrivacyPage';
import OfferPage from './pages/OfferPage';
import AccountDeletionPage from './pages/AccountDeletionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppStubPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/delete-account" element={<AccountDeletionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
