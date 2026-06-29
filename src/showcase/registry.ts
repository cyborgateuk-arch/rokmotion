import {
  CodeAnimateShowcase,
  EcommerceAdsShowcase,
  ElectricityMapsShowcase,
  AnimStatsShowcase,
  AutomationToolShowcase,
  FluidBackgroundShowcase,
  KaraokeShowcase,
  MusicVisualsShowcase,
  NextJsTutorialShowcase,
  ProductVideoShowcase,
  ScreenRecordShowcase,
  ScreencastShowcase,
  StorytellingShowcase,
  VideoStatsShowcase,
  ViralShortsShowcase,
  WatercolorMapShowcase,
  WeatherAppShowcase,
  YearReviewShowcase,
} from "./ShowcaseExtended";
import {
  DataVizShowcase,
  GlassUIShowcase,
  KineticTypeShowcase,
  NeonGridShowcase,
  PaperCraftShowcase,
  RetroWaveShowcase,
} from "./ShowcaseSamples";

export type ShowcaseEntry = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  component: React.FC;
  sourceFile: string;
};

export const SHOWCASE_ENTRIES: ShowcaseEntry[] = [
  { id: "Showcase-PaperCraft", slug: "paper-craft", title: "Paper Craft", subtitle: "Cutout layers · sticky notes · tape", component: PaperCraftShowcase, sourceFile: "ShowcaseSamples.tsx" },
  { id: "Showcase-NeonGrid", slug: "neon-grid", title: "Neon Grid", subtitle: "Cyberpunk glow · perspective depth", component: NeonGridShowcase, sourceFile: "ShowcaseSamples.tsx" },
  { id: "Showcase-RetroWave", slug: "retro-wave", title: "Retro Wave", subtitle: "80s synth · sunset grid · neon", component: RetroWaveShowcase, sourceFile: "ShowcaseSamples.tsx" },
  { id: "Showcase-KineticType", slug: "kinetic-type", title: "Kinetic Type", subtitle: "Bold typography · rhythm · sync", component: KineticTypeShowcase, sourceFile: "ShowcaseSamples.tsx" },
  { id: "Showcase-DataViz", slug: "data-viz", title: "Data Viz", subtitle: "Live charts · gradients · metrics", component: DataVizShowcase, sourceFile: "ShowcaseSamples.tsx" },
  { id: "Showcase-GlassUI", slug: "glass-ui", title: "Glass UI", subtitle: "Frosted panels · depth · motion", component: GlassUIShowcase, sourceFile: "ShowcaseSamples.tsx" },
  { id: "Showcase-MusicVisuals", slug: "music-visuals", title: "Banger Show", subtitle: "High quality music visuals without learning 3D", component: MusicVisualsShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-ViralShorts", slug: "viral-shorts", title: "Submagic", subtitle: "Captions, B-Rolls, Zooms and Sound Effects", component: ViralShortsShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-CodeAnimate", slug: "code-animate", title: "Hackreels", subtitle: "Animate your code in seconds", component: CodeAnimateShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-YearReview", slug: "year-review", title: "GitHub Unwrapped", subtitle: "Personalized year-in-review campaign", component: YearReviewShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-ScreenRecord", slug: "screen-record", title: "Vibrantsnap", subtitle: "Product demos with auto layouts & 4K export", component: ScreenRecordShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-EcommerceAds", slug: "ecommerce-ads", title: "AdmoveAI", subtitle: "Automated eCommerce ad campaigns", component: EcommerceAdsShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-Karaoke", slug: "karaoke", title: "MyKaraoke", subtitle: "Karaoke & lyric videos with AI vocal removal", component: KaraokeShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-WatercolorMap", slug: "watercolor-map", title: "Watercolor Map", subtitle: "Travel animation with watercolor effects", component: WatercolorMapShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-WeatherApp", slug: "weather-app", title: "Hello Météo", subtitle: "Daily weather report generator", component: WeatherAppShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-AutomationTool", slug: "automation-tool", title: "Relay.app", subtitle: "Programmatic instructional videos", component: AutomationToolShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-VideoStats", slug: "video-stats", title: "MUX", subtitle: "Dynamic animated video stats", component: VideoStatsShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-AnimStats", slug: "anim-stats", title: "AnimStats", subtitle: "Statistics into animated GIFs & videos", component: AnimStatsShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-FluidBackground", slug: "fluid-background", title: "Fluidmotion", subtitle: "Animated backgrounds for apps & videos", component: FluidBackgroundShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-Screencast", slug: "screencast", title: "Rokmotion Recorder", subtitle: "Screen recording built with Rokmotion", component: ScreencastShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-NextJsTutorial", slug: "nextjs-tutorial", title: "Next.js", subtitle: "Visual video tutorials for developers", component: NextJsTutorialShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-ElectricityMaps", slug: "electricity-maps", title: "Electricity Maps", subtitle: "Heavy electricity data visualization", component: ElectricityMapsShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-Storytelling", slug: "storytelling", title: "Revid", subtitle: "AI-powered storytelling social videos", component: StorytellingShowcase, sourceFile: "ShowcaseExtended.tsx" },
  { id: "Showcase-ProductVideo", slug: "product-video", title: "SuperMotion", subtitle: "Product promo videos from screen recordings", component: ProductVideoShowcase, sourceFile: "ShowcaseExtended.tsx" },
];