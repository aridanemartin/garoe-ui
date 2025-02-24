import React, { useEffect, useRef, useState } from "react";

import { Spinner } from "../Spinner/Spinner";

import { buttonVariants, type buttonVariantType } from "./Button.types";
import "./Button.css";

interface ButtonProps {
	onClick: () => void;
	buttonText?: string;
	className?: string;
	variant?: buttonVariantType;
	disabled?: boolean;
	isLoading?: boolean;
	iconSrc?: string;
	iconAlt?: string;
	iconStyles?: React.CSSProperties;
	iconTooltip?: string;
	style?: React.CSSProperties;
}

export const Button = ({
	onClick,
	buttonText,
	className,
	variant = buttonVariants.PRIMARY,
	iconSrc,
	isLoading,
	disabled,
	iconAlt,
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

	if (!buttonText && !iconSrc) {
		return null;
	}

	const renderTooltip = (iconTooltip: string) => {
		return <span className="button__iconTooltip">{iconTooltip}</span>;
	};

	const renderSpinner = () => {
		return <Spinner />;
	};

	const renderButtonContent = () => {
		return (
			<>
				{iconSrc && (
					<img
						className="button__icon"
						src={iconSrc}
						alt={iconAlt}
						style={iconStyles}
					/>
				)}
				{buttonText && <span className="button__text">{buttonText}</span>}
				{iconTooltip && renderTooltip(iconTooltip)}
			</>
		);
	};

	return (
		<button
			type="button"
			ref={buttonRef}
			style={{ ...style, width: isLoading ? buttonWidth : "auto" }}
			disabled={disabled}
			className={`button button__${variant} ${className ?? ""}`}
			onClick={onClick}
		>
			{isLoading ? renderSpinner() : renderButtonContent()}
		</button>
	);
};
