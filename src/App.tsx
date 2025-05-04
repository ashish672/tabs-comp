import { useState } from 'react';
import Tabs from './components/Tabs';
import './App.css';

type Tabs = {
	id: number;
	title: string;
	description: string;
}[];

export const tabs: Tabs = [
	{
		id: 0,
		title: 'Tab 1',
		description: 'This is the content for Tab 1'
	},
	{
		id: 1,
		title: 'Tab 2',
		description: 'This is the content for Tab 2'
	},
	{
		id: 2,
		title: 'Tab 3',
		description: 'This is the content for Tab 3'
	}
];

function App() {
	const [currentTab, setCurrentTab] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const setAnimatingTab = (index: number) => {
		setCurrentTab(index);
		setIsAnimating(true);
		setTimeout(() => {
			setIsAnimating(false);
		}, 300);
	};
	console.log('HELLO');
	return (
		<div style={{ width: '100%' }}>
			<Tabs
				isAnimating={isAnimating}
				currentTab={currentTab}
				setCurrentTab={setAnimatingTab}
			/>
			{tabs
				.filter((tab) => tab.id === currentTab)
				.map((t) => (
					<h3>{t.description}</h3>
				))}
		</div>
	);
}

export default App;
