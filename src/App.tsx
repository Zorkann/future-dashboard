import "./App.css";
import { Graph1 } from "./Graph1";
import { Graph2 } from "./Graph2";
import { Graph3 } from "./Graph3";
import { Graph4 } from "./Graph4";
import { Graph5 } from "./Graph5";
import { Graph7 } from "./Graph7";
import { Graph8 } from "./Graph8";
import { Graph10 } from "./Graph10";
import { Graph12 } from "./Graph12";

function App() {
	return (
		<>
			<div className="w-[400px]">
				<Graph1 />
				<Graph2 />
				<Graph3 />
				<Graph4 />
				<Graph5 />
				<Graph7 />
				<Graph8 />
			</div>
			<div className="w-[600px]">
				<Graph10 />
				<Graph12 />
			</div>
		</>
	);
}

export default App;
