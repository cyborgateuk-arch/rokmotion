import { loadFont } from "@remotion/google-fonts/PatrickHand";
import { loadFont as loadNunito } from "@remotion/google-fonts/Nunito";
import { ThemeIcon } from "./components/ThemeIcons";
import { AbsoluteFill } from "remotion";
import { z } from "zod";

const { fontFamily: handFont } = loadFont();
const { fontFamily: bodyFont } = loadNunito("normal", {
  weights: ["700", "800"],
  subsets: ["latin"],
});

const PAPER = "#faf6ee";
const KRAFT = "#e8dcc8";
const INK = "#2d2926";
const MUTED = "#6b5e54";
const ACCENT = "#e85d4c";
const BADGE = "#3d7a5f";
const TAPE = "rgba(255, 220, 120, 0.82)";

export const thumbnailSchema = z.object({
  headline: z.string(),
  subtitle: z.string(),
  badge: z.string(),
});

export type ThumbnailProps = z.infer<typeof thumbnailSchema>;

export const ThumbnailRokmotion: React.FC<ThumbnailProps> = ({
  headline,
  subtitle,
  badge,
}) => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${PAPER} 0%, ${KRAFT} 55%, #dfd0b8 100%)`,
        fontFamily: bodyFont,
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.07,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 28,
          left: 520,
          width: 140,
          height: 32,
          background: TAPE,
          borderRadius: 2,
          transform: "rotate(-4deg)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 48,
          right: 180,
          width: 140,
          height: 32,
          background: TAPE,
          borderRadius: 2,
          transform: "rotate(6deg)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 36,
          right: 48,
          background: BADGE,
          color: "#fff",
          fontSize: 20,
          fontWeight: 800,
          padding: "10px 22px",
          borderRadius: 999,
          transform: "rotate(4deg)",
          boxShadow: "0 4px 0 #2d5a45",
        }}
      >
        {badge}
      </div>

      <div style={{ position: "absolute", top: 80, left: 60, transform: "rotate(-12deg)" }}>
        <ThemeIcon name="paper" size={36} color="#6b5e54" />
      </div>
      <div style={{ position: "absolute", bottom: 70, left: 90, transform: "rotate(8deg)" }}>
        <ThemeIcon name="scissors" size={36} color="#6b5e54" />
      </div>
      <div style={{ position: "absolute", top: 100, right: 100, transform: "rotate(10deg)" }}>
        <ThemeIcon name="film" size={36} color="#0b84f3" />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: 56,
          width: 200,
          background: "#fff9c4",
          padding: "16px 18px",
          fontFamily: handFont,
          fontSize: 22,
          color: INK,
          transform: "rotate(-7deg)",
          boxShadow: "0 4px 0 #e6d56c, 0 8px 18px rgba(0,0,0,0.1)",
          lineHeight: 1.3,
        }}
      >
        /rokmotion
      </div>

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 920,
            background: PAPER,
            border: "2px solid #d9cdb8",
            borderRadius: 10,
            padding: "48px 56px 40px",
            boxShadow:
              "0 2px 0 #d9cdb8, 0 10px 30px rgba(45,41,38,0.15), 0 20px 50px rgba(45,41,38,0.08)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: handFont,
              fontSize: 108,
              lineHeight: 1,
              marginBottom: 12,
            }}
          >
            <span style={{ color: ACCENT }}>Rok</span>
            <span style={{ color: INK }}>motion</span>
          </div>
          <div
            style={{
              fontFamily: handFont,
              fontSize: 42,
              color: INK,
              marginBottom: 6,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: 24,
              color: MUTED,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            {subtitle}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};