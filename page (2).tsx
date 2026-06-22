@import "tailwindcss";

:root {
  --font-display: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-body: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #080808;
  color: #e8e8f0;
  font-family: var(--font-body);
  overflow-x: hidden;
}

::selection {
  background: rgba(108, 99, 255, 0.3);
  color: #fff;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #080808;
}
::-webkit-scrollbar-thumb {
  background: rgba(108, 99, 255, 0.4);
  border-radius: 3px;
}

/* Glassmorphism utility */
.glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #fff 0%, #a0a0c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-accent {
  background: linear-gradient(135deg, #6c63ff 0%, #a855f7 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Noise texture overlay */
.noise::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
}

/* Glow effects */
.glow-accent {
  box-shadow: 0 0 40px rgba(108, 99, 255, 0.15), 0 0 80px rgba(108, 99, 255, 0.05);
}

.glow-text {
  text-shadow: 0 0 40px rgba(108, 99, 255, 0.4);
}

/* Animated border */
@keyframes borderGlow {
  0%, 100% { border-color: rgba(108, 99, 255, 0.3); }
  50% { border-color: rgba(168, 85, 247, 0.5); }
}

.border-animated {
  animation: borderGlow 3s ease-in-out infinite;
}

/* Section spacing */
section {
  position: relative;
}
