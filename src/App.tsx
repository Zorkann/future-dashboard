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
import { CheckboxButton } from "@components/Button";
import { useState } from "react";

function App() {
	const [showGraph1, setShowGraph1] = useState(true);

	const handleCheckboxChange = (isChecked: boolean) => {
		setShowGraph1(isChecked);
	};

	return (
		<div>
			<Header Drawer={DashboardDrawer} />

			<div className="grid grid-cols-1 grid-rows-[repeat(24,80px)] lg:grid-rows-[repeat(8,80px)] lg:grid-cols-[5fr,4fr,6fr] grid-flow-col gap-8 p-[40px] pt-[104px]">
				<div className="row-span-1">
					<CheckboxButton onChange={handleCheckboxChange} />
					{showGraph1 && <Graph1 />}
				</div>
				<div className="row-span-3">
					<Graph2 />
				</div>
				<div className="row-span-2">
					<Graph3 />
				</div>
				<div className="row-span-2">
					<Graph4 />
				</div>
				<div className="row-span-2">
					<Graph5 />
				</div>
				<div className="row-span-1">
					<Graph5 />
				</div>
				<div className="row-span-3">
					<Graph7 />
				</div>
				<div className="row-span-2">
					<Graph8 />
				</div>
				<div className="row-span-2">
					<Graph9 />
				</div>
				<div className="row-span-4">
					<Graph10 />
				</div>
				<div className="row-span-2">
					<Graph12 />
				</div>
			</div>
		</div>
	);
}

export default App;
