import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import DashboardPage from './pages/DashboardPage';
import PosPage from './pages/PosPage';

export default function App() {
  const [page, setPage] = useState('home'); // 'home' | 'solutions' | 'pricing' | 'about' | 'login' | 'register' | 'app'
  const [activeTab, setActiveTab] = useState('dashboard');

  if (page === 'home') {
    return <LandingPage onNavigate={setPage} onGoToApp={() => setPage('login')} />;
  }

  if (page === 'solutions') {
    return <SolutionsPage onNavigate={setPage} onGoToApp={() => setPage('login')} />;
  }

  if (page === 'pricing') {
    return <PricingPage onNavigate={setPage} onGoToApp={() => setPage('login')} />;
  }

  if (page === 'about') {
    return <AboutPage onNavigate={setPage} onGoToApp={() => setPage('login')} />;
  }

  if (page === 'login') {
    return <LoginPage onNavigate={setPage} onGoToApp={() => setPage('app')} />;
  }

  if (page === 'register') {
    return <RegisterPage onNavigate={setPage} onGoToApp={() => setPage('app')} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Top Banner inside POS App to return to client landing page */}
      <div style={{ background: '#1c1b1b', color: '#ffd600', padding: '6px 24px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>KASIRIFY APP DASHBOARD SYSTEM</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setPage('home')}
            style={{ background: '#ffd600', color: '#1c1b1b', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
          >
            ← Beranda Client
          </button>
          <button
            onClick={() => setPage('solutions')}
            style={{ background: '#0b00e7', color: 'white', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
          >
            Solusi Bisnis
          </button>
          <button
            onClick={() => setPage('pricing')}
            style={{ background: 'white', color: '#1c1b1b', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
          >
            Pricing
          </button>
          <button
            onClick={() => setPage('about')}
            style={{ background: '#ae3200', color: 'white', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
          >
            Tentang Kami
          </button>
          <button
            onClick={() => setPage('login')}
            style={{ background: '#10b981', color: 'white', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
          >
            Login / Auth
          </button>
        </div>
      </div>

      <Navbar />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main style={{ flex: 1, padding: '24px', overflowY: 'auto', background: 'var(--bg-dark)' }}>
          {activeTab === 'dashboard' && <DashboardPage />}
          {activeTab === 'pos' && <PosPage />}
          {activeTab !== 'dashboard' && activeTab !== 'pos' && (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <h3>Halaman <span style={{ textTransform: 'capitalize', color: 'var(--primary)' }}>{activeTab}</span> Siap Didevelop</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Struktur komponen dan styling sudah bersih dan siap digunakan.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
