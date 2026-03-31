'use client';

import { useState } from 'react';

export default function SliderDesktop2() {
  const [current, setCurrent] = useState(0);
  const total = 4;
  const visible = 2;
  const max = total - visible;

  const prev = () => { if (current > 0) setCurrent(c => c - 1); };
  const next = () => { if (current < max) setCurrent(c => c + 1); };

  const btnStyle = (disabled) => ({
    background: '#5a189a',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '42px',
    height: '42px',
    fontSize: '28px',
    cursor: disabled ? 'default' : 'pointer',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.3 : 1,
    transition: 'opacity 0.2s, background 0.2s',
    lineHeight: 1,
    outline: 'none',
  });

  const imgStyle = {
    width: 'calc(50% - 8px)',
    flexShrink: 0,
    height: 'auto',
    borderRadius: '10px',
    display: 'block',
    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
      maxWidth: '860px',
      padding: '0 24px',
    }}>
      <button onClick={prev} style={btnStyle(current === 0)}>‹</button>

      <div style={{ flex: 1, overflow: 'hidden', borderRadius: '10px' }}>
        <div style={{
          display: 'flex',
          gap: '16px',
          transition: 'transform 0.4s ease',
          transform: `translateX(-${current * 50}%)`,
        }}>
          <img src="/depoimento1.webp" alt="Depoimento 1" style={imgStyle} />
          <img src="/depoimento2.webp" alt="Depoimento 2" style={imgStyle} />
          <img src="/depoimento3.webp" alt="Depoimento 3" style={imgStyle} />
          <img src="/depoimento4.webp" alt="Depoimento 4" style={imgStyle} />
        </div>
      </div>

      <button onClick={next} style={btnStyle(current >= max)}>›</button>
    </div>
  );
}
