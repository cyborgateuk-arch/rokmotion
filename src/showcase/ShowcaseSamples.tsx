import { loadFont } from "@remotion/google-fonts/Inter";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

// 1 — Paper cutout craft style
export const PaperCraftShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 80 } });
  const wobble = Math.sin(frame * 0.4) * 3;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(160deg,#faf6ee,#e8dcc8)", fontFamily }}>
      <AbsoluteFill style={{ opacity: 0.07, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)" }} />
      <div style={{ position: "absolute", top: 24, left: "50%", marginLeft: -50, width: 100, height: 24, background: "rgba(255,220,120,0.85)", transform: `rotate(-4deg)` }} />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%,-50%) rotate(${-4 + wobble * 0.3}deg) scale(${interpolate(enter, [0, 1], [0.7, 1])})`,
          width: 420,
          background: "#fffef9",
          border: "2px solid #d9cdb8",
          borderRadius: 10,
          padding: "28px 32px",
          boxShadow: "0 4px 0 #d9cdb8, 0 12px 30px rgba(45,41,38,0.15)",
          opacity: enter,
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 800, color: "#e85d4c", marginBottom: 8 }}>Paper Craft</div>
        <div style={{ fontSize: 18, color: "#6b5e54" }}>Cutout layers · sticky notes · tape</div>
        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          {["📄", "✂️", "📌"].map((e, i) => (
            <div
              key={e}
              style={{
                fontSize: 28,
                transform: `rotate(${interpolate(frame, [i * 8, i * 8 + 20], [-8, 8], clamp)}deg)`,
              }}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 2 — Neon cyberpunk grid
export const NeonGridShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const scan = (frame * 4) % 400;

  return (
    <AbsoluteFill style={{ background: "#050510", fontFamily, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,255,0.15) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          transform: `perspective(400px) rotateX(60deg) translateY(${interpolate(frame, [0, 90], [0, 80], clamp)}px)`,
          transformOrigin: "center bottom",
        }}
      />
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(255,0,128,0.35),transparent 60%)" }} />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: scan,
          height: 3,
          background: "rgba(0,255,255,0.6)",
          boxShadow: "0 0 20px cyan",
        }}
      />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#ff00aa", textShadow: "0 0 20px #ff00aa,0 0 40px #ff00aa", letterSpacing: 4, opacity: interpolate(frame, [0, 15], [0, 1], clamp) }}>
          NEON GRID
        </div>
        <div style={{ fontSize: 16, color: "#00ffff", marginTop: 12, letterSpacing: 6, opacity: interpolate(frame, [10, 25], [0, 1], clamp) }}>
          CYBERPUNK · GLOW · DEPTH
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 3 — Retro synthwave
export const RetroWaveShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const sunY = interpolate(frame, [0, 90], [20, -10], { ...clamp, easing: Easing.out(Easing.quad) });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg,#1a0a2e 0%,#3d1a5c 40%,#ff6b9d 100%)", fontFamily }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(180deg,transparent,#12082a 30%)", perspective: 200 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: 2,
              height: `${40 + i * 8}%`,
              background: i % 2 === 0 ? "#ff2d95" : "#00d4ff",
              transform: `translateX(${(i - 6) * 55}px) rotateX(70deg)`,
              transformOrigin: "bottom center",
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: `${sunY}%`,
          transform: "translate(-50%,-50%)",
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "linear-gradient(180deg,#ffeb3b,#ff6b00)",
          boxShadow: "0 0 60px #ff6b00",
        }}
      />
      <div style={{ position: "absolute", top: 40, left: 0, right: 0, textAlign: "center" }}>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#fff", textShadow: "3px 3px 0 #ff2d95", letterSpacing: 2 }}>RETRO WAVE</div>
        <div style={{ fontSize: 14, color: "#00d4ff", letterSpacing: 8, marginTop: 8 }}>80s · SYNTH · GRID</div>
      </div>
    </AbsoluteFill>
  );
};

// 4 — Kinetic typography
export const KineticTypeShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const words = ["MOVE", "TYPE", "SYNC", "ROCK"];
  const active = Math.floor(interpolate(frame, [0, 90], [0, 3.99], clamp));

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily, justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
        {words.map((word, i) => {
          const isActive = i === active;
          const scale = isActive ? interpolate(frame % 22, [0, 11, 22], [1, 1.25, 1], clamp) : 0.75;
          const opacity = isActive ? 1 : 0.25;
          return (
            <div
              key={word}
              style={{
                fontSize: isActive ? 56 : 32,
                fontWeight: 900,
                color: isActive ? "#fff" : "#444",
                transform: `scale(${scale}) translateX(${isActive ? Math.sin(frame * 0.5) * 8 : 0}px)`,
                opacity,
                letterSpacing: isActive ? 12 : 4,
                transition: "none",
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// 5 — Data visualization (live chart dashboard)
export const DataVizShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const chartW = 520;
  const chartH = 130;
  const padX = 36;
  const padY = 16;

  const pointCount = 24;
  const visiblePoints = Math.min(
    pointCount,
    Math.floor(interpolate(frame, [0, 55], [4, pointCount], clamp)),
  );

  const series = Array.from({ length: pointCount }).map((_, i) => {
    const live = Math.sin(i * 0.55 + frame * 0.09) * 18;
    const base = 68 + Math.sin(i * 0.4) * 22 + Math.cos(i * 0.25) * 12;
    return Math.max(18, Math.min(92, base + live));
  });

  const toX = (i: number) => padX + (i / (pointCount - 1)) * (chartW - padX * 2);
  const toY = (v: number) => padY + ((100 - v) / 100) * (chartH - padY * 2);

  const linePath = series
    .slice(0, visiblePoints)
    .map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i).toFixed(1)} ${toY(v).toFixed(1)}`)
    .join(" ");

  const areaPath =
    visiblePoints > 1
      ? `${linePath} L ${toX(visiblePoints - 1).toFixed(1)} ${chartH - padY} L ${toX(0).toFixed(1)} ${chartH - padY} Z`
      : "";

  const headIndex = Math.max(0, visiblePoints - 1);
  const headX = toX(headIndex);
  const headY = toY(series[headIndex]);
  const pulse = interpolate(frame % 20, [0, 10, 20], [0.5, 1, 0.5], clamp);

  const revenue = Math.round(interpolate(frame, [0, 90], [8420, 12840], { ...clamp, easing: Easing.out(Easing.quad) }));
  const users = Math.round(interpolate(frame, [5, 90], [1200, 2847], { ...clamp, easing: Easing.out(Easing.quad) }));
  const growth = interpolate(frame, [10, 90], [2.1, 18.6], { ...clamp, easing: Easing.out(Easing.quad) }).toFixed(1);

  const bars = [58, 72, 48, 86, 64, 91, 55, 78];
  const barColors = ["#22d3ee", "#38bdf8", "#818cf8", "#a78bfa", "#34d399", "#2dd4bf", "#60a5fa", "#f472b6"];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at 20% 0%, #1e3a5f 0%, #0b1220 55%, #050a14 100%)",
        fontFamily,
        padding: 22,
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.12,
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.35) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.35) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: "#64748b", letterSpacing: 2, fontWeight: 700 }}>LIVE ANALYTICS</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc", marginTop: 2 }}>Revenue Dashboard</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.35)",
            borderRadius: 999,
            padding: "4px 10px",
            fontSize: 10,
            fontWeight: 700,
            color: "#4ade80",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: `0 0 ${6 + pulse * 6}px #4ade80`,
            }}
          />
          LIVE
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        {[
          { label: "Revenue", value: `$${revenue.toLocaleString()}`, color: "#22d3ee" },
          { label: "Active users", value: users.toLocaleString(), color: "#a78bfa" },
          { label: "Growth", value: `+${growth}%`, color: "#34d399" },
        ].map((kpi, i) => (
          <div
            key={kpi.label}
            style={{
              flex: 1,
              background: "rgba(15,23,42,0.75)",
              border: "1px solid rgba(148,163,184,0.15)",
              borderRadius: 10,
              padding: "10px 12px",
              opacity: interpolate(frame, [i * 6, i * 6 + 14], [0, 1], clamp),
              transform: `translateY(${interpolate(frame, [i * 6, i * 6 + 14], [8, 0], clamp)}px)`,
            }}
          >
            <div style={{ fontSize: 9, color: "#64748b", fontWeight: 600 }}>{kpi.label}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: kpi.color, marginTop: 2 }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "rgba(15,23,42,0.8)",
          border: "1px solid rgba(34,211,238,0.2)",
          borderRadius: 12,
          padding: "12px 14px 8px",
          marginBottom: 12,
          boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600 }}>Real-time trend</div>
          <div style={{ fontSize: 10, color: "#22d3ee", fontWeight: 700 }}>+{growth}%</div>
        </div>
        <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`}>
          <defs>
            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          {[25, 50, 75].map((g) => (
            <line
              key={g}
              x1={padX}
              x2={chartW - padX}
              y1={toY(g)}
              y2={toY(g)}
              stroke="rgba(148,163,184,0.12)"
              strokeWidth="1"
            />
          ))}
          {areaPath ? <path d={areaPath} fill="url(#lineFill)" /> : null}
          {linePath ? (
            <path
              d={linePath}
              fill="none"
              stroke="url(#lineStroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
          {visiblePoints > 0
            ? series.slice(0, visiblePoints).map((v, i) => (
                <circle
                  key={i}
                  cx={toX(i)}
                  cy={toY(v)}
                  r={i === headIndex ? 5 : 2.5}
                  fill={i === headIndex ? "#fff" : "#38bdf8"}
                  stroke={i === headIndex ? "#22d3ee" : "none"}
                  strokeWidth={i === headIndex ? 2 : 0}
                  opacity={i === headIndex ? 1 : 0.7}
                />
              ))
            : null}
          {visiblePoints > 1 ? (
            <circle
              cx={headX}
              cy={headY}
              r={8 + pulse * 4}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              opacity={0.35 + pulse * 0.35}
            />
          ) : null}
        </svg>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 72 }}>
        {bars.map((base, i) => {
          const liveH = base + Math.sin(frame * 0.12 + i * 0.8) * 8;
          const height = interpolate(frame, [20 + i * 3, 38 + i * 3], [0, liveH], { ...clamp, easing: Easing.out(Easing.quad) });
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div
                style={{
                  width: "100%",
                  height: `${height}%`,
                  minHeight: 2,
                  borderRadius: "4px 4px 1px 1px",
                  background: `linear-gradient(180deg, ${barColors[i]}, ${barColors[i]}33)`,
                  boxShadow: `0 0 12px ${barColors[i]}55`,
                }}
              />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// 6 — Glassmorphism UI
export const GlassUIShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const float = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 60 } });
  const orbX = interpolate(frame, [0, 90], [-30, 30], clamp);
  const orbY = interpolate(frame, [0, 90], [20, -20], clamp);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg,#667eea 0%,#764ba2 50%,#f093fb 100%)", fontFamily }}>
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          filter: "blur(40px)",
          left: `calc(30% + ${orbX}px)`,
          top: `calc(20% + ${orbY}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%,-50%) scale(${interpolate(float, [0, 1], [0.85, 1])})`,
          width: 380,
          padding: 28,
          borderRadius: 24,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          opacity: float,
        }}
      >
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Glass UI</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>Frosted panels · depth · motion</div>
        <div style={{ display: "flex", gap: 10 }}>
          {[72, 58, 91].map((v, i) => (
            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: 12, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{Math.round(interpolate(frame, [15 + i * 5, 35 + i * 5], [0, v], clamp))}%</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};