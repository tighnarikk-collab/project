'use client';

import { useState } from 'react';

export default function SliderDesktop() {
  const [current, setCurrent] = useState(0);
  const total = 4;
  const visible = 2;
  const max = total - visible;

  const prev = () => { if (current > 0) setCurrent(c => c - 1); };
  const next = () => { if (current < max) setCurrent(c => c + 1); };

  return (
    <div className="slider-desktop">
      <button
        className="slider-btn slider-prev"
        onClick={prev}
        style={{ opacity: current === 0 ? 0.3 : 1 }}
      >
        ‹
      </button>
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 50}%)` }}
        >
          <img src="/depoimento1.webp" alt="Depoimento 1" className="slider-img" />
          <img src="/depoimento2.webp" alt="Depoimento 2" className="slider-img" />
          <img src="/depoimento3.webp" alt="Depoimento 3" className="slider-img" />
          <img src="/depoimento4.webp" alt="Depoimento 4" className="slider-img" />
        </div>
      </div>
      <button
        className="slider-btn slider-next"
        onClick={next}
        style={{ opacity: current >= max ? 0.3 : 1 }}
      >
        ›
      </button>
    </div>
  );
}
