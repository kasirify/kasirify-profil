import React from 'react';
import { ShoppingBag, Bell, User } from 'lucide-react';

export default function Navbar({ title = "Kasirify POS" }) {
  return (
    <header className="glass-panel" style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShoppingBag size={20} color="#fff" />
        </div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Kasir<span style={{ color: 'var(--primary)' }}>ify</span>
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button className="btn btn-secondary" style={{ padding: '8px 12px' }}>
          <Bell size={18} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-full)' }}>
          <User size={18} color="var(--primary)" />
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Kasir Utama</span>
        </div>
      </div>
    </header>
  );
}
