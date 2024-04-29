import "./App.css";
import { Graph1 } from "./Graph1";
import { Graph2 } from "./Graph2";
import { Graph3 } from "./Graph3";
import { Graph4 } from "./Graph4";
import { Graph5 } from "./Graph5";
import { Graph7 } from "./Graph7";
import { Graph8 } from "./Graph8";
import { Graph9 } from "./Graph9";
import { Graph10 } from "./Graph10";
import { Graph12 } from "./Graph12";
import { Header } from "@components/Header";
import { DashboardDrawer } from "@components/DashboardDrawer";
import { useState } from "react";

type GraphState = {
	Graph1: boolean;
	Graph2: boolean;
	Graph3: boolean;
	Graph4: boolean;
	Graph5: boolean;
	Graph7: boolean;
	Graph8: boolean;
	Graph9: boolean;
	Graph10: boolean;
	Graph12: boolean;
};

function App() {
	const [graphStates, setGraphStates] = useState<GraphState>({
		Graph1: true,
		Graph2: true,
		Graph3: true,
		Graph4: true,
		Graph5: true,
		Graph7: true,
		Graph8: true,
		Graph9: true,
		Graph10: true,
		Graph12: true,
	});

	const toggleGraphVisibility = (graphName: keyof GraphState) => {
		setGraphStates((prevGraphStates) => ({
			...prevGraphStates,
			[graphName]: !prevGraphStates[graphName],
		}));
	};

	return (
		<div>
			<Header
				Drawer={({ onClose, open }) => (
					<DashboardDrawer
						onClose={onClose}
						open={open}
						graphStates={graphStates}
						toggleGraphVisibility={toggleGraphVisibility}
					/>
				)}
			/>

			<div className="grid grid-cols-1 grid-rows-[repeat(24,80px)] lg:grid-rows-[repeat(8,80px)] lg:grid-cols-[5fr,4fr,6fr] grid-flow-col gap-8 p-[40px] pt-[104px]">
				<div className="row-span-1">{graphStates.Graph1 && <Graph1 />}</div>
				<div className="row-span-3">{graphStates.Graph2 && <Graph2 />}</div>

				<div className="row-span-2">{graphStates.Graph3 && <Graph3 />}</div>
				<div className="row-span-2">{graphStates.Graph4 && <Graph4 />}</div>
				<div className="row-span-2">{graphStates.Graph5 && <Graph5 />}</div>
				<div className="row-span-1">{graphStates.Graph5 && <Graph5 />}</div>
				<div className="row-span-3">{graphStates.Graph7 && <Graph7 />}</div>
				<div className="row-span-2">{graphStates.Graph8 && <Graph8 />}</div>
				<div className="row-span-2">{graphStates.Graph9 && <Graph9 />}</div>
				<div className="row-span-4">{graphStates.Graph10 && <Graph10 />}</div>
				<div className="row-span-2">{graphStates.Graph12 && <Graph12 />}</div>
			</div>
		</div>
	);
}

export default App;
