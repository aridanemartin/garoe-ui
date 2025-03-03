import { sidePosition, type SidePositionType } from "../../types/common.types";
import "./SideImageText.css";

interface SideImageTextProps {
	className?: string;
	imageSrc: string;
	imageAlt: string;
	imagePosition?: SidePositionType;
	imagePositionBreakpoint?: number;
	children: React.ReactNode;
}

export const SideImageText = ({
	className,
	imageSrc,
	imageAlt,
	children,
	imagePosition = sidePosition.LEFT,
}: React.PropsWithChildren<SideImageTextProps>) => {
	const isLeft = imagePosition === sidePosition.LEFT;

	const renderImage = () => {
		return (
			<div className="imageContainer">
				<img className="image" src={imageSrc} alt={imageAlt} />
			</div>
		);
	};

	const renderText = () => {
		return <div className="textContainer">{children}</div>;
	};

	return (
		<section className={`garoe-ui-sideImageText ${className || ""}`}>
			{isLeft ? renderImage() : renderText()}
			{isLeft ? renderText() : renderImage()}
		</section>
	);
};
