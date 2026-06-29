# Rokmotion

**Create programmatic videos with [Remotion](https://www.remotion.dev) + Grok AI.**

Rokmotion is a Remotion project and Grok skill that lets you generate motion graphics, tutorials, and edited videos from code — with optional AI voiceover or your own audio.

## Demo video

**[PaperRokmotionStart demo](demos/PaperRokmotionStart-demo.mp4)** — 30-second paper-animation tutorial showing how to start Rokmotion with Grok, synced to ElevenLabs narration.

https://github.com/cyborgateuk-arch/rokmotion/raw/main/demos/PaperRokmotionStart-demo.mp4

| Scene | Content |
|-------|---------|
| Intro | "Start Rokmotion with Grok" — paper cutout style |
| Step 1 | Type `/rokmotion` in Grok |
| Step 2 | Describe your video (duration, style, format) |
| Step 3 | Grok builds Remotion scenes |
| Step 4 | ElevenLabs syncs voiceover to scene timing |
| Step 5 | Render your MP4 |

---

## Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node)
- **ffmpeg** (optional) — for video-to-video audio extraction and duration probing
- **Grok** with the `rokmotion` skill installed at `~/.grok/skills/rokmotion/`
- **ElevenLabs API key** (Mode 2 only) — free tier works with default voice

---

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/cyborgateuk-arch/rokmotion.git
cd rokmotion
```

### 2. Install dependencies

```bash
npm install
```

First run downloads Remotion and Chrome Headless Shell for rendering (~100 MB).

### 3. Configure environment (Mode 2 only)

```bash
cp .env.example .env
```

Edit `.env` and add your ElevenLabs key:

```
ELEVENLABS_API_KEY=your_key_here
```

Get a key at [elevenlabs.io](https://elevenlabs.io). **Never commit `.env`** — it is gitignored.

### 4. Verify setup

```bash
npm run dev
```

Opens Remotion Studio at **http://localhost:3000**. You should see all compositions in the sidebar.

```bash
npx remotion compositions
```

Lists available video compositions.

---

## How to make videos

When you ask Grok to create a video (`/rokmotion`), it will ask you to pick one of **three modes**:

### Mode 1: User voiceover

You provide a recorded audio file. Grok builds visuals synced to your voice.

```bash
# Import your audio and detect duration
npm run import-assets -- --mode user-voiceover --project myvideo --audio /path/to/voiceover.mp3

# Preview
npm run dev

# Render
npx remotion render UserVoiceoverVideo out/myvideo.mp4 \
  --props='{"mode":"user-voiceover","projectId":"myvideo","audioFile":"uploads/myvideo/voiceover.mp3","durationInSeconds":30}'
```

**Best for:** podcasts, personal narration, existing voice recordings.

---

### Mode 2: ElevenLabs + script

Grok writes a narration script. ElevenLabs generates voice. Scenes auto-sync to speech alignment.

```bash
# Test API key
npm run elevenlabs:test

# Generate voiceover + scene timing
npm run voiceover -- PaperRokmotionStart

# Or with custom script:
npm run voiceover -- MyComposition Your full narration script here...

# Render (example: paper tutorial)
npx remotion render PaperRokmotionStart out/video.mp4
```

**Auto-generated files:**
- `public/voiceover/<id>/narration.mp3` — audio
- `src/voiceover/<id>.timing.ts` — scene sync from ElevenLabs alignment
- `src/voiceover/<id>.meta.ts` — duration metadata

**Best for:** tutorials, promos, explainers without recording your own voice.

**Free-tier voice:** Bella (`EXAVITQu4vr4xnSDxMaL`). Override with `ELEVENLABS_VOICE_ID` in `.env`.

---

### Mode 3: Video to video

Provide a source video. Keep original audio. Add animated overlay scenes where needed.

```bash
# Import source video + generate starter scene plan
npm run import-assets -- --mode video-to-video --project myedit --video /path/to/source.mp4

# Edit scene plan — set source vs animated segments
# File: public/uploads/myedit/scene-plan.json

# Render
npx remotion render VideoToVideoEnhance out/myedit.mp4 \
  --props='{"mode":"video-to-video","projectId":"myedit","sourceVideo":"uploads/myedit/source.mp4","audioFile":"uploads/myedit/source-audio.mp3","scenePlan":{...}}'
```

**Scene behavior:**
| Type | What happens |
|------|----------------|
| `source` | Full user video visible, original audio plays |
| `animated` | Full video hidden; animated overlay shown; user video in PiP (box/circle) if enabled |

**PiP options** in `scene-plan.json`:
- `shape`: `"box"` or `"circle"`
- `position`: `"bottom-right"`, `"bottom-left"`, `"top-right"`, `"top-left"`
- `pip.enabled: false` — fully hide user video during animated scenes

**Best for:** enhancing existing footage, adding motion graphics to talking-head videos.

---

## Available compositions

| Composition ID | Description | Mode |
|----------------|-------------|------|
| `PaperRokmotionStart` | Paper-animation "how to start" tutorial (demo video) | 2 |
| `RokmotionTutorial` | Dark motion-graphics tutorial | 2 |
| `UserVoiceoverVideo` | Template for user-provided audio | 1 |
| `VideoToVideoEnhance` | Template for video editing + overlays | 3 |

---

## Quick start — recreate the demo video

```bash
git clone https://github.com/cyborgateuk-arch/rokmotion.git
cd rokmotion
npm install
cp .env.example .env          # add ElevenLabs key
npm run voiceover -- PaperRokmotionStart
npx remotion render PaperRokmotionStart out/PaperRokmotionStart.mp4
```

Output: `out/PaperRokmotionStart.mp4` (~30s, 1920×1080).

---

## Grok skill

Install the skill so Grok auto-invokes Rokmotion when you ask for videos:

The skill lives at `~/.grok/skills/rokmotion/SKILL.md` (user scope).

**Slash command:** `/rokmotion make a 30s tutorial video`

Grok will ask which mode you want, gather assets, write compositions, and render.

---

## Project structure

```
rokmotion/
├── demos/                    # Demo videos (committed to GitHub)
├── src/
│   ├── PaperRokmotionStart.tsx   # Paper-animation tutorial
│   ├── RokmotionTutorial.tsx     # Motion graphics tutorial
│   ├── UserVoiceoverVideo.tsx    # Mode 1 template
│   ├── VideoToVideoEnhance.tsx   # Mode 3 template
│   ├── components/UserVideoPiP.tsx
│   ├── voiceover/                # Auto-generated timing + metadata
│   └── calculate-metadata/       # Dynamic duration from audio
├── scripts/
│   ├── elevenlabs/           # TTS generation + alignment sync
│   └── import-assets.ts      # Import user audio/video
├── public/uploads/           # User assets (gitignored)
├── public/voiceover/         # Generated narration (gitignored)
└── out/                      # Rendered videos (gitignored)
```

---

## Common commands

```bash
npm run dev                    # Preview in Remotion Studio
npm run render                 # Render (pass composition ID)
npm run voiceover -- <id>      # Generate ElevenLabs narration
npm run import-assets -- ...   # Import user audio or video
npm run elevenlabs:test        # Verify ElevenLabs API
npx remotion compositions      # List compositions
npx tsc --noEmit               # Typecheck
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank video output | Check composition returns visible content |
| ElevenLabs 402 error | Use free-tier voice Bella, or upgrade plan |
| `ELEVENLABS_API_KEY` missing | Copy `.env.example` to `.env` and add key |
| Render slow first time | Chrome Headless Shell downloads on first render |
| ffmpeg not found | Install ffmpeg for video-to-video audio extraction |

---

## License

Remotion is free for teams of up to 3. See [Remotion license](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).