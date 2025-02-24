export const buttonVariants = {
	PRIMARY: "primary",
	SECONDARY: "secondary",
	TERTIARY: "tertiary",
	GHOST: "ghost",
	DANGER: "danger",
	WARNING: "warning",
	SUCCESS: "success",
	INFO: "info",
	LIGHT: "light",
	DARK: "dark",
	LINK: "link",
	TEXT: "text",
	OUTLINE: "outline",
	CLEAR: "clear",
	ONLY_ICON: "only-icon",
} as const;

export type buttonVariantType =
	(typeof buttonVariants)[keyof typeof buttonVariants];
