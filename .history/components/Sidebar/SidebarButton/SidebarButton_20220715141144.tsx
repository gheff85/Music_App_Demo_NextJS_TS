import { ElementType } from "react";
import { isContext } from "vm";

const SidebarButton = ({Icon, buttonText}: SidebarButtonProps) => (
	<button className="flex item-center space-x-2 hover:text-white" >
		<Icon className="h-5 w-5" />
		<p>{buttonText}</p>
	</button>
);

type SidebarButtonProps = {
	Icon: ElementType
	buttonText: string
	onClickFunction
};

export default SidebarButton;