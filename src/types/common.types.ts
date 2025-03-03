export const sidePosition = {
	LEFT: "left",
	RIGHT: "right",
} as const;

export type SidePositionType = (typeof sidePosition)[keyof typeof sidePosition];
