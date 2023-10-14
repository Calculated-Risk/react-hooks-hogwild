import React from "react";
import Nav from "./Nav";
import HogListTable from "./HogListTable";
import hogs from "../porkers_data";


function App() {
	return (
		<div className="App">
			<Nav />
			<HogListTable porkData={hogs} />
		</div>
	);
}

export default App;
