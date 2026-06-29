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

// 5 — Data visualization
export const DataVizShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [65, 42, 88, 55, 72, 95, 48];

  return (
    <AbsoluteFill style={{ background: "#0f172a", fontFamily, padding: 40 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#94a3b8", marginBottom: 24 }}>LIVE METRICS</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 200 }}>
        {bars.map((h, i) => {
          const height = interpolate(frame, [i * 4, i * 4 + 20], [0, h], { ...clamp, easing: Easing.out(Easing.quad) });
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: "100%",
                  height: `${height}%`,
                  borderRadius: "6px 6px 2px 2px",
                  background: `linear-gradient(180deg,${["#22d3ee", "#a78bfa", "#34d399", "#f472b6", "#fbbf24", "#60a5fa", "#fb7185"][i]},transparent)`,
                  boxShadow: `0 0 20px ${["#22d3ee", "#a78bfa", "#34d399", "#f472b6", "#fbbf24", "#60a5fa", "#fb7185"][i]}44`,
                }}
              />
              <div style={{ fontSize: 11, color: "#64748b" }}>Q{i + 1}</div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: 28,
          height: 2,
          background: "linear-gradient(90deg,transparent,#22d3ee,transparent)",
          transform: `translateX(${interpolate(frame, [0, 90], [-100, 100], clamp)}%)`,
        }}
      />
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