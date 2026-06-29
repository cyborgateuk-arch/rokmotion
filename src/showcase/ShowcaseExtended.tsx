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
  weights: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const ShowcaseCard: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bg: string;
}> = ({ title, subtitle, children, bg }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  return (
    <AbsoluteFill style={{ background: bg, fontFamily }}>
      {children}
      <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, opacity: enter }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{title}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{subtitle}</div>
      </div>
    </AbsoluteFill>
  );
};

export const MusicVisualsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <ShowcaseCard title="Banger Show" subtitle="Music visuals" bg="#0a0014">
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", gap: 6, flexDirection: "row" }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: interpolate(Math.sin(frame * 0.35 + i * 0.5), [-1, 1], [20, 120], clamp),
              borderRadius: 4,
              background: `linear-gradient(180deg, hsl(${280 + i * 8},90%,60%), hsl(${200 + i * 5},80%,40%))`,
              boxShadow: `0 0 12px hsl(${260 + i * 8},90%,50%)`,
            }}
          />
        ))}
      </AbsoluteFill>
    </ShowcaseCard>
  );
};

export const ViralShortsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const cap = interpolate(frame, [0, 90], [0, 1], clamp);
  return (
    <ShowcaseCard title="Submagic" subtitle="Viral shorts" bg="#111">
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-55%)", width: 180, height: 320, borderRadius: 16, background: "#1a1a2e", border: "3px solid #333", overflow: "hidden" }}>
        <div style={{ height: "60%", background: "linear-gradient(180deg,#ff6b6b,#4ecdc4)" }} />
        <div style={{ padding: 12, fontSize: 11, fontWeight: 700, color: "#fff", opacity: cap, transform: `translateY(${interpolate(cap, [0, 1], [10, 0])}px)` }}>
          Captions · B-Roll · Zoom
        </div>
      </div>
    </ShowcaseCard>
  );
};

export const CodeAnimateShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const lines = ['const video = "rokmotion";', '+ render(video);', '// ✓ animated'];
  return (
    <ShowcaseCard title="Hackreels" subtitle="Animate your code" bg="#1e1e2e">
      <div style={{ position: "absolute", top: 40, left: 24, right: 24, background: "#11111b", borderRadius: 10, padding: 16, fontFamily: "monospace", fontSize: 13 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: i === 1 ? "#7ee787" : "#cdd6f4", opacity: interpolate(frame, [i * 12, i * 12 + 15], [0, 1], clamp), marginBottom: 6 }}>
            {line}
          </div>
        ))}
      </div>
    </ShowcaseCard>
  );
};

export const YearReviewShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const stars = interpolate(frame, [0, 90], [0, 200], clamp);
  return (
    <ShowcaseCard title="GitHub Unwrapped" subtitle="Year-in-review campaign" bg="#0d1117">
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontSize: 48 }}>🚀</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#58a6ff", marginTop: 8 }}>{Math.round(stars)} commits</div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", left: `${(i * 17) % 100}%`, top: `${(i * 23 + frame * 2) % 80}%`, width: 3, height: 3, borderRadius: "50%", background: "#fff", opacity: 0.6 }} />
        ))}
      </AbsoluteFill>
    </ShowcaseCard>
  );
};

export const ScreenRecordShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [30, 60], [1, 1.15], clamp);
  return (
    <ShowcaseCard title="Vibrantsnap" subtitle="Fast screen recording" bg="#0f172a">
      <div style={{ position: "absolute", inset: 30, borderRadius: 12, background: "#1e293b", border: "2px solid #334155", transform: `scale(${zoom})`, transformOrigin: "center" }}>
        <div style={{ height: 24, background: "#334155", borderRadius: "10px 10px 0 0" }} />
        <div style={{ position: "absolute", bottom: 12, right: 12, width: 56, height: 56, borderRadius: "50%", background: "#0b84f3", border: "3px solid #fff" }} />
      </div>
    </ShowcaseCard>
  );
};

export const EcommerceAdsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const slide = interpolate(frame, [0, 90], [0, -120], clamp);
  return (
    <ShowcaseCard title="AdmoveAI" subtitle="Ecommerce ads" bg="#fef3c7">
      <div style={{ position: "absolute", top: 50, left: 24, display: "flex", gap: 12, transform: `translateX(${slide}px)` }}>
        {["👟", "👜", "⌚"].map((e, i) => (
          <div key={i} style={{ width: 100, height: 120, background: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>{e}</div>
        ))}
      </div>
    </ShowcaseCard>
  );
};

export const KaraokeShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const highlight = Math.floor(interpolate(frame, [0, 90], [0, 5], clamp));
  const words = ["Sing", "along", "with", "Rokmotion", "tonight"];
  return (
    <ShowcaseCard title="MyKaraoke" subtitle="Karaoke video maker" bg="#1a0533">
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 10, flexWrap: "wrap", padding: 40 }}>
        {words.map((w, i) => (
          <span key={w} style={{ fontSize: 28, fontWeight: 800, color: i === highlight ? "#ff6ec7" : "rgba(255,255,255,0.3)" }}>{w}</span>
        ))}
      </AbsoluteFill>
    </ShowcaseCard>
  );
};

export const WatercolorMapShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const path = interpolate(frame, [0, 90], [0, 100], clamp);
  return (
    <ShowcaseCard title="Watercolor Map" subtitle="Animated travel map" bg="#e8f4f8">
      <svg width="100%" height="100%" viewBox="0 0 640 360">
        <path d="M80,200 Q200,100 320,180 T560,140" fill="none" stroke="#4a90d9" strokeWidth="4" strokeDasharray={`${path * 5} 1000`} opacity="0.8" />
        <circle cx={80 + path * 4.8} cy={200 - path * 0.6} r="8" fill="#e85d4c" />
        <text x="300" y="100" fontSize="40" fill="#4a90d9" opacity="0.3" fontFamily="cursive">Paris → Tokyo</text>
      </svg>
    </ShowcaseCard>
  );
};

export const WeatherAppShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const temp = Math.round(interpolate(frame, [0, 90], [12, 24], clamp));
  return (
    <ShowcaseCard title="Hello Météo" subtitle="Weather app" bg="linear-gradient(180deg,#87CEEB,#E0F4FF)">
      <div style={{ position: "absolute", top: 50, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.9)", borderRadius: 20, padding: "24px 40px", textAlign: "center", color: "#1e3a5f" }}>
        <div style={{ fontSize: 48 }}>☀️</div>
        <div style={{ fontSize: 42, fontWeight: 800 }}>{temp}°C</div>
        <div style={{ fontSize: 14 }}>Paris · Daily forecast</div>
      </div>
    </ShowcaseCard>
  );
};

export const AutomationToolShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const step = Math.floor(interpolate(frame, [0, 90], [0, 2.99], clamp));
  const steps = ["Trigger", "Process", "Render"];
  return (
    <ShowcaseCard title="Relay.app" subtitle="Automation tool" bg="#f8fafc">
      <div style={{ position: "absolute", top: 60, left: 40, right: 40, display: "flex", gap: 16, justifyContent: "center" }}>
        {steps.map((s, i) => (
          <div key={s} style={{ flex: 1, padding: 16, borderRadius: 12, background: i <= step ? "#0b84f3" : "#e2e8f0", color: i <= step ? "#fff" : "#94a3b8", fontWeight: 700, fontSize: 14, textAlign: "center" }}>{s}</div>
        ))}
      </div>
    </ShowcaseCard>
  );
};

export const VideoStatsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const views = Math.round(interpolate(frame, [0, 90], [0, 12800], { ...clamp, easing: Easing.out(Easing.quad) }));
  return (
    <ShowcaseCard title="MUX" subtitle="Visualize video stats" bg="#000">
      <div style={{ position: "absolute", inset: 20, borderRadius: 8, background: "#111", border: "1px solid #333" }}>
        <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "8px 14px", borderRadius: 8, color: "#0b84f3", fontWeight: 700, fontSize: 16 }}>
          ▶ {views.toLocaleString()} views
        </div>
      </div>
    </ShowcaseCard>
  );
};

export const AnimStatsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const n = Math.round(interpolate(frame, [0, 90], [0, 97], { ...clamp, easing: Easing.out(Easing.quad) }));
  return (
    <ShowcaseCard title="AnimStats" subtitle="Animated statistics" bg="#0b84f3">
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 900, color: "#fff" }}>{n}%</div>
        <div style={{ fontSize: 18, color: "rgba(255,255,255,0.8)" }}>Growth this quarter</div>
      </AbsoluteFill>
    </ShowcaseCard>
  );
};

export const FluidBackgroundShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, 90], [0, 100], clamp);
  return (
    <ShowcaseCard title="Fluidmotion" subtitle="Animated backgrounds" bg={`linear-gradient(${135 + x * 0.5}deg, #667eea, #764ba2, #f093fb)`}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at ${30 + x * 0.4}% ${40 + Math.sin(frame * 0.1) * 20}%, rgba(255,255,255,0.2), transparent 50%)` }} />
    </ShowcaseCard>
  );
};

export const ScreencastShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const rec = frame % 30 < 15;
  return (
    <ShowcaseCard title="Rokmotion Recorder" subtitle="Screencast videos" bg="#1c1c1e">
      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", alignItems: "center", gap: 8, color: rec ? "#ff4444" : "#666", fontWeight: 700, fontSize: 14 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: rec ? "#ff4444" : "#666" }} /> REC
      </div>
      <div style={{ position: "absolute", inset: 50, borderRadius: 8, border: "2px dashed #444" }} />
    </ShowcaseCard>
  );
};

export const NextJsTutorialShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [10, 40], [0, 1], clamp);
  return (
    <ShowcaseCard title="Next.js" subtitle="Video tutorial" bg="#000">
      <div style={{ position: "absolute", left: 24, top: 40, width: "45%", opacity: reveal }}>
        <div style={{ fontSize: 11, color: "#888", fontFamily: "monospace" }}>export default function Page()</div>
        <div style={{ fontSize: 11, color: "#7ee787", fontFamily: "monospace" }}>return &lt;Component /&gt;</div>
      </div>
      <div style={{ position: "absolute", right: 24, top: 50, fontSize: 32, fontWeight: 800, color: "#fff", opacity: reveal }}>React →</div>
    </ShowcaseCard>
  );
};

export const ElectricityMapsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const emissions = interpolate(frame, [0, 90], [200, 450], clamp);
  return (
    <ShowcaseCard title="Electricity Maps" subtitle="Data visualization" bg="#0a1628">
      <div style={{ position: "absolute", inset: 30, borderRadius: 12, background: "rgba(11,132,243,0.15)", border: "1px solid rgba(11,132,243,0.3)" }}>
        <div style={{ position: "absolute", top: 20, left: 20, fontSize: 14, color: "#94a3b8" }}>Europe grid</div>
        <div style={{ position: "absolute", bottom: 20, right: 20, fontSize: 28, fontWeight: 800, color: "#22d3ee" }}>{Math.round(emissions)} gCO₂</div>
      </div>
    </ShowcaseCard>
  );
};

export const StorytellingShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const slide = Math.floor(interpolate(frame, [0, 90], [0, 2.99], clamp));
  const stories = ["Once upon a time…", "AI wrote the script", "Rokmotion rendered it"];
  return (
    <ShowcaseCard title="Revid" subtitle="Storytelling social videos" bg="#1a1a2e">
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 40 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", textAlign: "center" }}>{stories[slide]}</div>
      </AbsoluteFill>
    </ShowcaseCard>
  );
};

export const ProductVideoShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 80 } });
  return (
    <ShowcaseCard title="SuperMotion" subtitle="Product videos" bg="#f1f5f9">
      <div style={{ position: "absolute", left: "50%", top: "45%", transform: `translate(-50%,-50%) scale(${interpolate(enter, [0, 1], [0.8, 1])})`, width: 120, height: 200, borderRadius: 20, background: "#1e293b", border: "4px solid #334155", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
        <div style={{ height: "70%", background: "linear-gradient(180deg,#0b84f3,#6366f1)", borderRadius: "16px 16px 0 0" }} />
      </div>
    </ShowcaseCard>
  );
};