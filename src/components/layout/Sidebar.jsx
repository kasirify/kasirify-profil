import React from 'react';
import { LayoutDashboard, ShoppingCart, Package, BarChart3, Settings } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pos', label: 'Kasir / POS', icon: ShoppingCart },
    { id: 'products', label: 'Produk & Stok', icon: Package },
    { id: 'reports', label: 'Laporan', icon: BarChart3 },
    { id: 'settings', label: 'Pengaturan', icon: Settings },
  ];

  return (
    <aside style={{ width: 240, background: 'var(--bg-surface)', borderRight: '1px solid var(--border-color)', padding: '20px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ padding: '0 12px 12px 12px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Menu Utama
      </div>

      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: isActive ? 'var(--primary-light)' : 'transparent',
              color: isActive ? 'var(--primary)' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: isActive ? 700 : 500,
              cursor: 'pointer',
              transition: 'var(--transition)',
              textAlign: 'left',
              width: '100%'
            }}
          >
            <Icon size={20} color={isActive ? 'var(--primary)' : 'var(--text-muted)'} />
            {item.label}
          </button>
        );
      })}
    </aside>
  );
}
