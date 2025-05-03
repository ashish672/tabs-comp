import { tabs } from '../App';
import Tab from './Tab';
import './Tabs.css';

type TabsProps = {
	currentTab: number;
	setCurrentTab: (index: number) => void;
	isAnimating: boolean;
};

const Tabs = ({ currentTab, setCurrentTab, isAnimating }: TabsProps) => {
	return (
		<div className="tabs">
			{tabs.map(({ title }, index) => (
				<Tab
					title={title}
					currentTab={currentTab}
					index={index}
					setCurrentTab={setCurrentTab}
					isAnimating={isAnimating}
				/>
			))}
		</div>
	);
};

export default Tabs;
