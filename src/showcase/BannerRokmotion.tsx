import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BLUE = "#0b84f3";
const BG = "#0a1020";

export const BannerRokmotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const enter = Math.max(
    0.2,
    spring({ frame, fps, config: { damping: 16, stiffness: 90 } }),
  );
  const pulse = interpolate(
    frame,
    [0, durationInFrames / 2, durationInFrames],
    [0.4, 1, 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 45%, rgba(11,132,243,${pulse * 0.25}) 0%, ${BG} 70%)`,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,132,243,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(11,132,243,0.06) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.6,
        }}
      />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            transform: `scale(${interpolate(enter, [0, 1], [0.9, 1])})`,
            opacity: enter,
            filter: `drop-shadow(0 0 ${20 + pulse * 35}px rgba(11,132,243,${pulse * 0.85}))`,
          }}
        >
          <Img
            src={staticFile("rokmotion-logo-blue.svg")}
            style={{
              height: 100,
              width: "auto",
            }}
          />
        </div>
      </AbsoluteFill>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)`,
          opacity: pulse,
        }}
      />
    </AbsoluteFill>
  );
};