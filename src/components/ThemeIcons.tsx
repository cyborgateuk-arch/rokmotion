type IconProps = {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
};

const Svg: React.FC<IconProps & { children: React.ReactNode; viewBox?: string }> = ({
  size = 24,
  color = "currentColor",
  style,
  viewBox = "0 0 24 24",
  children,
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", color, ...style }}
  >
    {children}
  </svg>
);

export const PaperIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" fill="rgba(255,255,255,0.15)" />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const ScissorsIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 8.5L20 3M9 15.5L20 21M9 8.5L9 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Svg>
);

export const FilmIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="rgba(11,132,243,0.15)" />
    <path d="M4 9h3v2H4v4h3v2H4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M20 9h-3v2h3v4h-3v2h3" stroke="currentColor" strokeWidth="1.4" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.35" />
  </Svg>
);

export const PinIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path d="M12 2C9.5 2 8 4 8 6.5c0 2.2 1.2 3.4 2.5 4.5L9 21l3-2 3 2-.5-10c1.3-1.1 2.5-2.3 2.5-4.5C17 4 15.5 2 13 2h-1z" fill="currentColor" opacity="0.9" />
    <circle cx="12" cy="6.5" r="1.5" fill="#fff" opacity="0.5" />
  </Svg>
);

export const SneakerIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path d="M3 14c2-1 4-1 6 0l2 1 4-1 6 2v3H3v-5z" fill="currentColor" opacity="0.25" />
    <path d="M4 15h16M6 12l3-2 5 1 4-2 3 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="17" r="1.2" fill="currentColor" />
    <circle cx="15" cy="17" r="1.2" fill="currentColor" />
  </Svg>
);

export const BagIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path d="M7 9V7a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="5" y="9" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.15" />
    <path d="M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const WatchIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <rect x="8" y="6" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.12" />
    <path d="M10 4h4M10 20h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const HeadphonesIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path d="M4 14v-2a8 8 0 0116 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="2" y="14" width="4" height="6" rx="2" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.4" />
    <rect x="18" y="14" width="4" height="6" rx="2" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.4" />
  </Svg>
);

export const CloudIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path
      d="M7 18h10a4 4 0 000-8 5.5 5.5 0 00-10.6-1.2A3.5 3.5 0 007 18z"
      fill="currentColor"
      opacity="0.85"
    />
  </Svg>
);

export const SunIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i / 8) * Math.PI * 2;
      const x1 = 12 + Math.cos(a) * 7;
      const y1 = 12 + Math.sin(a) * 7;
      const x2 = 12 + Math.cos(a) * 9.5;
      const y2 = 12 + Math.sin(a) * 9.5;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />;
    })}
  </Svg>
);

export const LightningIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" fill="currentColor" />
  </Svg>
);

export const GearIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path
      d="M12 8a4 4 0 100 8 4 4 0 000-8zm8.5 4a7.2 7.2 0 00-.3-1.2l2-1.5-2-3.5-2.4 1a7.5 7.5 0 00-2.1-1.2L15.5 2h-7l-.7 3.6a7.5 7.5 0 00-2.1 1.2l-2.4-1-2 3.5 2 1.5a7.2 7.2 0 000 2.4l-2 1.5 2 3.5 2.4-1a7.5 7.5 0 002.1 1.2L8.5 22h7l.7-3.6a7.5 7.5 0 002.1-1.2l2.4 1 2-3.5-2-1.5c.2-.4.3-.8.3-1.2z"
      fill="currentColor"
      opacity="0.9"
    />
  </Svg>
);

export const PlayIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
  </Svg>
);

export const FlameIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <path
      d="M12 2c1 3 3 4.5 3 7.5a3.5 3.5 0 11-7 0C8 6.5 10 5 11 2c.3 1 .7 1.5 1 2z"
      fill="currentColor"
    />
    <path d="M12 22c3.5 0 6-2.5 6-6 0-3-2-5-3-7-1 2.5-3 4-3 7 0 2 1.5 4 3 4 1.5 0 3-1.5 3-4 0-1-.5-2-1-3 1 1.5 2 3.5 2 6 0 3.5-2.5 6-6 6z" fill="currentColor" opacity="0.55" />
  </Svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size, color, style }) => (
  <Svg size={size} color={color} style={style}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.15" />
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export type ThemeIconName =
  | "paper"
  | "scissors"
  | "film"
  | "pin"
  | "sneaker"
  | "bag"
  | "watch"
  | "headphones"
  | "cloud"
  | "sun"
  | "lightning"
  | "gear"
  | "play"
  | "flame"
  | "check";

const ICON_MAP: Record<ThemeIconName, React.FC<IconProps>> = {
  paper: PaperIcon,
  scissors: ScissorsIcon,
  film: FilmIcon,
  pin: PinIcon,
  sneaker: SneakerIcon,
  bag: BagIcon,
  watch: WatchIcon,
  headphones: HeadphonesIcon,
  cloud: CloudIcon,
  sun: SunIcon,
  lightning: LightningIcon,
  gear: GearIcon,
  play: PlayIcon,
  flame: FlameIcon,
  check: CheckIcon,
};

export const ThemeIcon: React.FC<IconProps & { name: ThemeIconName }> = ({
  name,
  size,
  color,
  style,
}) => {
  const Icon = ICON_MAP[name];
  return <Icon size={size} color={color} style={style} />;
};