import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AppStubPage from './pages/AppStubPage';
import PrivacyPage from './pages/PrivacyPage';
import OfferPage from './pages/OfferPage';
import AccountDeletionPage from './pages/AccountDeletionPage';
import { CorporatePage } from './components/CorporateLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<CorporatePage pageId="about" />} />
      <Route path="/cooperation" element={<CorporatePage pageId="cooperation" />} />
      <Route path="/careers" element={<CorporatePage pageId="careers" />} />
      <Route path="/courier" element={<CorporatePage pageId="courier" />} />
      <Route path="/suppliers" element={<CorporatePage pageId="suppliers" />} />
      <Route path="/blog" element={<CorporatePage pageId="blog" />} />
      <Route path="/news" element={<CorporatePage pageId="news" />} />
      <Route path="/investors" element={<CorporatePage pageId="investors" />} />
      <Route path="/contacts" element={<CorporatePage pageId="contacts" />} />
      <Route path="/legal" element={<CorporatePage pageId="legal" />} />
      <Route path="/user-agreement" element={<CorporatePage pageId="userAgreement" />} />
      <Route path="/service-rules" element={<CorporatePage pageId="serviceRules" />} />
      <Route path="/app" element={<AppStubPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/delete-account" element={<AccountDeletionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
