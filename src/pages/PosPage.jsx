import React, { useState } from 'react';
import { Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

export default function PosPage() {
  const [products] = useState([
    { id: 1, name: 'Espresso Single', price: 18000, category: 'Minuman' },
    { id: 2, name: 'Kopi Susu Gula Aren', price: 24000, category: 'Minuman' },
    { id: 3, name: 'Croissant Original', price: 22000, category: 'Makanan' },
    { id: 4, name: 'Matcha Latte', price: 26000, category: 'Minuman' },
  ]);

  const [cart, setCart] = useState([
    { id: 2, name: 'Kopi Susu Gula Aren', price: 24000, qty: 2 }
  ]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px', height: '100%' }}>
      {/* Product List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Daftar Produk</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '14px' }}>
          {products.map((p) => (
            <div key={p.id} className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: 6 }}>{p.category}</span>
                <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{p.name}</h4>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent)' }}>{formatRupiah(p.price)}</span>
                <button className="btn btn-primary" style={{ padding: '6px 10px' }} onClick={() => addToCart(p)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
            Keranjang Kasir
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{formatRupiah(item.price)} x {item.qty}</div>
                </div>
                <div style={{ fontWeight: 700 }}>{formatRupiah(item.price * item.qty)}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800 }}>
            <span>Total:</span>
            <span style={{ color: 'var(--primary)' }}>{formatRupiah(total)}</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
            <CreditCard size={18} /> Process Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}
