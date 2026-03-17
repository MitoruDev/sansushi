export function WaveDivider() {
  return (
    <div className="relative h-12 w-full overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full fill-background"
      >
        <path
          d="M0,64 C300,120 600,0 900,64 C1050,96 1125,96 1200,64 L1200,120 L0,120 Z"
          opacity="0.4"
        />
        <path
          d="M0,80 C400,140 800,20 1200,80 L1200,120 L0,120 Z"
          className="opacity-60"
        />
      </svg>
    </div>
  );
}
