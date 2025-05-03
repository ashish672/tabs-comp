type TabProps = {
	index: number;
	title: string;
	currentTab: number;
	setCurrentTab: (index: number) => void;
	isAnimating: boolean;
};

const Tab = ({
	index,
	title,
	currentTab,
	setCurrentTab,
	isAnimating
}: TabProps) => {
	return (
		<div
			className={`tab ${
				isAnimating && currentTab === index ? 'animate' : ''
			}`}
			onClick={() => setCurrentTab(index)}
			style={{
				borderBottom: currentTab === index ? `2px solid white` : 0
			}}
		>
			<h1>{title}</h1>
		</div>
	);
};

export default Tab;
