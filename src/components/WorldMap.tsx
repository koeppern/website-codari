export default function WorldMap() {
  return (
    <svg viewBox="0 0 800 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="dach-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* World dots - simplified representation */}
      <g fill="#cbd5e1" opacity="0.3">
        {/* North America */}
        {[[120,100],[140,90],[160,100],[130,120],[150,120],[170,110],[110,130],[140,140],[180,130]].map(([x,y],i) => (
          <circle key={`na${i}`} cx={x} cy={y} r="2" />
        ))}
        {/* South America */}
        {[[200,220],[190,240],[210,250],[195,270],[205,290],[215,260]].map(([x,y],i) => (
          <circle key={`sa${i}`} cx={x} cy={y} r="2" />
        ))}
        {/* Africa */}
        {[[420,200],[430,220],[410,240],[425,260],[440,240],[415,280],[430,280]].map(([x,y],i) => (
          <circle key={`af${i}`} cx={x} cy={y} r="2" />
        ))}
        {/* Asia */}
        {[[520,100],[540,90],[560,110],[580,100],[600,120],[550,130],[570,140],[590,140],[620,130],[640,150],[560,160],[610,160]].map(([x,y],i) => (
          <circle key={`as${i}`} cx={x} cy={y} r="2" />
        ))}
        {/* Australia */}
        {[[640,260],[660,270],[650,280],[670,280],[680,260]].map(([x,y],i) => (
          <circle key={`au${i}`} cx={x} cy={y} r="2" />
        ))}
        {/* Europe (non-DACH) */}
        {[[370,100],[360,110],[380,90],[350,130],[390,110],[400,100],[370,130],[340,120]].map(([x,y],i) => (
          <circle key={`eu${i}`} cx={x} cy={y} r="2" />
        ))}
      </g>

      {/* DACH region glow */}
      <circle cx="400" cy="130" r="40" fill="url(#dach-glow)" />

      {/* Connection lines from DACH */}
      <g stroke="#4f46e5" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4">
        <line x1="400" y1="130" x2="150" y2="110" />
        <line x1="400" y1="130" x2="200" y2="250" />
        <line x1="400" y1="130" x2="430" y2="240" />
        <line x1="400" y1="130" x2="580" y2="120" />
        <line x1="400" y1="130" x2="660" y2="270" />
      </g>

      {/* DACH cities */}
      <g filter="url(#glow)">
        {/* Düsseldorf */}
        <circle cx="392" cy="122" r="4" fill="#4f46e5" />
        <circle cx="392" cy="122" r="6" fill="none" stroke="#4f46e5" strokeWidth="1" opacity="0.5" />
        {/* Krefeld */}
        <circle cx="390" cy="118" r="3" fill="#818cf8" />
        {/* Wien */}
        <circle cx="410" cy="135" r="3" fill="#818cf8" />
        {/* Zürich */}
        <circle cx="398" cy="140" r="3" fill="#818cf8" />
      </g>

      {/* Connection endpoints */}
      <g fill="#0ea5e9" opacity="0.6">
        <circle cx="150" cy="110" r="3" />
        <circle cx="200" cy="250" r="3" />
        <circle cx="430" cy="240" r="3" />
        <circle cx="580" cy="120" r="3" />
        <circle cx="660" cy="270" r="3" />
      </g>
    </svg>
  );
}
