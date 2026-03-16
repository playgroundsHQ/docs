import React, { useState } from 'react';

const SPARKLE_POSITIONS = [
  [12, 8], [88, 15], [25, 82], [70, 90], [5, 45], [95, 55], [50, 5], [45, 92],
];
const SPARKLE_DELAYS = [0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1];
const EXPLODE_COUNT = 12;

export default function AnimatedPhoenixLogo({ size = 28 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="animated-phoenix-logo"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spinning gradient glow ring */}
      <div className="phoenix-glow-ring">
        <div className="phoenix-glow-ring-inner" />
      </div>

      {/* Sparkle particles */}
      <div className="phoenix-sparkle-container">
        {SPARKLE_POSITIONS.map(([left, top], i) => (
          <div
            key={i}
            className="phoenix-sparkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${SPARKLE_DELAYS[i]}s`,
            }}
          />
        ))}
      </div>

      {/* Ping ripples */}
      <div className="phoenix-ping-ring">
        <div className="phoenix-ping-ring-inner phoenix-ping-slow" />
      </div>
      <div className="phoenix-ping-ring">
        <div className="phoenix-ping-ring-inner phoenix-ping-slower" />
      </div>

      {/* Logo image */}
      <div className="phoenix-logo-image">
        <img
          src="/img/logo.png"
          alt="Phoenix Logo"
          className={`phoenix-logo-img ${isHovered ? 'phoenix-logo-hovered' : ''}`}
        />
        {/* Radial glow */}
        <div className="phoenix-radial-glow" />
      </div>

      {/* Energy flow lines */}
      <div className="phoenix-energy-container">
        <div className="phoenix-energy-line phoenix-energy-1" />
        <div className="phoenix-energy-line phoenix-energy-2" />
        <div className="phoenix-energy-line phoenix-energy-3" />
      </div>

      {/* Orbiting dots */}
      <div className="phoenix-orbit phoenix-orbit-forward">
        <div className="phoenix-orbit-dot phoenix-orbit-dot-cyan" />
      </div>
      <div className="phoenix-orbit phoenix-orbit-reverse">
        <div className="phoenix-orbit-dot phoenix-orbit-dot-pink" />
      </div>

      {/* Exploding particles on hover */}
      {isHovered &&
        Array.from({ length: EXPLODE_COUNT }, (_, i) => (
          <div
            key={i}
            className="phoenix-explode-particle"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${20 + (i % 5) * 5}px)`,
              animationDelay: `${i * 0.04}s`,
            }}
          />
        ))}
    </div>
  );
}
