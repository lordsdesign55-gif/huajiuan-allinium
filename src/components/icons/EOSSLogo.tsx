export function EOSSLogo({ className = 'h-12 w-auto' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 48"
      fill="none"
      className={className}
      aria-label="EOSS System Doors & Windows"
    >
      <rect x="0" y="0" width="48" height="48" rx="6" fill="currentColor" fillOpacity="0.1" />
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="11"
        fontWeight="800"
        letterSpacing="0.05em"
      >
        EOSS
      </text>
      <text
        x="24"
        y="38"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.8"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="7"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        SYSTEM
      </text>
      <text
        x="58"
        y="28"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="16"
        fontWeight="800"
        letterSpacing="-0.02em"
      >
        EOSS
      </text>
      <text
        x="58"
        y="40"
        fill="currentColor"
        fillOpacity="0.7"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="8"
        fontWeight="600"
        letterSpacing="0.12em"
      >
        DOORS & WINDOWS
      </text>
    </svg>
  );
}
