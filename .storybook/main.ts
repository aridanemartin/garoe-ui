import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: [
		"../src/components/**/*.mdx",
		"../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	babel: async (options) => ({
		...options,
		presets: [
			...options.presets,
			[
				"@babel/preset-react", // With this preset, we can avoid import React from "react" in every file
				{
					runtime: "automatic",
				},
				"preset-react-jsx-transform", // Can name this anything, just an arbitrary alias to avoid duplicate presets'
			],
		],
	}),
};
export default config;
