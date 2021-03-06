import { ElementType } from "react";

const SidebarButton = ({Icon, buttonText, onClickFunction}: SidebarButtonProps) => (
	<button className="flex item-center space-x-2 hover:text-white" 
	onClick={onClickFunction}>
		<Icon className="h-5 w-5" />
		<p>{buttonText}</p>
	</button>
);

type SidebarButtonProps = {
	Icon: ElementType
	buttonText: string
	onClickFunction?: () => void
};

export default SidebarButton;