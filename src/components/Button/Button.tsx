import { useEffect, useRef, useState } from "react";

import { Spinner } from "../Spinner/Spinner";

import { buttonVariants, type buttonVariantType } from "./Button.types";
import "./Button.css";
import { sidePosition, type SidePositionType } from "../../types/common.types";

export interface ButtonProps {
	onClick: () => void;
	text?: string;
	className?: string;
	variant?: buttonVariantType;
	disabled?: boolean;
	isLoading?: boolean;
	iconSrc?: string;
	iconAlt?: string;
	iconPosition?: SidePositionType;
	iconStyles?: React.CSSProperties;
	iconTooltip?: string;
	style?: React.CSSProperties;
}

export const Button = ({
	onClick,
	text,
	className,
	variant = buttonVariants.PRIMARY,
	iconSrc,
	isLoading,
	disabled,
	iconAlt,
	iconPosition,
	iconStyles,
	iconTooltip,
	style,
}: ButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [buttonWidth, setButtonWidth] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (buttonRef.current && !isLoading) {
			setButtonWidth(`${buttonRef.current.offsetWidth}px`);
		}
	}, [isLoading]);

	if (!text && !iconSrc) {
		return null;
	}

	const renderTooltip = (iconTooltip: string) => {
		return <span className="garoe-ui-button__iconTooltip">{iconTooltip}</span>;
	};

	const renderSpinner = () => {
		return <Spinner />;
	};

	const renderButtonContent = () => {
		const icon = iconSrc && (
			<img
				className="garoe-ui-button__icon"
				src={iconSrc}
				alt={iconAlt}
				style={iconStyles}
			/>
		);
		const buttonText = text && (
			<span className="garoe-ui-button__text">{text}</span>
		);
		const tooltip = iconTooltip && renderTooltip(iconTooltip);

		if (iconPosition === sidePosition.LEFT) {
			return (
				<>
					{icon}
					{buttonText}
					{tooltip}
				</>
			);
		}

		return (
			<>
				{text}
				{icon}
				{tooltip}
			</>
		);
	};

	return (
		<button
			type="button"
			ref={buttonRef}
			style={{ ...style, width: isLoading ? buttonWidth : "auto" }}
			disabled={disabled}
			className={`garoe-ui-button ${variant} ${className ?? ""}`}
			onClick={onClick}
		>
			{isLoading ? renderSpinner() : renderButtonContent()}
		</button>
	);
};
