/**
 * Rokmotion project configuration.
 * (File name `remotion.config.ts` is required by the render engine.)
 *
 * All configuration options: https://www.remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);
