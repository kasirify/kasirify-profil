import React from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

export default function DashboardPage() {
  const stats = [
    { title: 'Total Penjualan Hari Ini', value: formatRupiah(2450000), icon: DollarSign, change: '+14.2%', color: '#10b981' },
    { title: 'Jumlah Transaksi', value: '38 Transaksi', icon: ShoppingBag, change: '+8%', color: '#6366f1' },
    { title: 'Pelanggan Baru', value: '12 Orang', icon: Users, change: '+5%', color: '#06b6d4' },
    { title: 'Produk Terlaris', value: 'Kopi Susu Gula Aren', icon: TrendingUp, change: '120 Porsi', color: '#f59e0b' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Ringkasan Dahsboard</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Pantau performa penjualan dan statistik toko Anda secara real-time.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.title}</span>
                <div style={{ padding: 8, borderRadius: 8, background: 'rgba(255,255,255,0.05)' }}>
                  <Icon size={20} color={item.color} />
                </div>
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800 }}>{item.value}</div>
              <span className="badge badge-primary" style={{ width: 'fit-content', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                {item.change}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
