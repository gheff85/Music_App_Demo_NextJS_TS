import { SidebarButton } from "./SidebarButton/SidebarButton";
import {HomeIcon, LibraryIcon, SearchIcon} from "@heroicons/react/outline";

export const Sidebar = () => {
	<div className="text-gray-500 p-5 text-sm border-r border-gray-900">
		<div className="space-y-4">
			<SidebarButton Icon={HomeIcon} buttonText="Home" />
			<SidebarButton Icon={SearchIcon} buttonText="Search" />
			<SidebarButton Icon={LibraryIcon} buttonText="Your Library" />

			<hr className="border-t-[0.1x] border-gray-900" />
		</div>
	</div>
};