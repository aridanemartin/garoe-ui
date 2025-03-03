import { Button, type ButtonProps } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";
import { buttonVariants } from "./Button.types";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
		componentSubtitle:
			"Displays an image that represents a user or organization",
	},
	tags: ["autodocs"],

	argTypes: {
		variant: {
			control: {
				type: "select",
			},
			options: [...Object.keys(buttonVariants)],
		},
		text: {
			control: {
				type: "text",
			},
		},
		onClick: { action: "clicked" },
	},
	args: {
		variant: "primary",
		text: "Click me",
	},
};

export default meta;

export const Default: StoryObj<typeof Button> = (args: ButtonProps) => (
	<Button {...args} />
);
Default.storyName = "Default";

export const Loading: StoryObj<typeof Button> = (args: ButtonProps) => (
	<Button {...args} isLoading />
);
Loading.storyName = "Loading";

// export const Sizes = {
// 	args: {
// 		username: "Tom Coleman",
// 		src: "https://avatars2.githubusercontent.com/u/132554",
// 	},
// 	render: (args) => (
// 		<>
// 			<Avatar {...args} size="large" />
// 			<Avatar {...args} size="medium" />
// 			<Avatar {...args} size="small" />
// 			<Avatar {...args} size="tiny" />
// 		</>
// 	),
// };
